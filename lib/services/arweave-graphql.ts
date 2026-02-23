/**
 * Arweave GraphQL Service
 * Fetches on-chain statistics for DecoyPhrase
 */

import { STORAGE_FUND_WALLET } from '@/constants/pricing';

const ARWEAVE_GRAPHQL_URL = 'https://arweave.net/graphql';

interface TransactionNode {
  id: string;
  quantity: {
    winston: string;
  };
  owner: {
    address: string;
  };
  tags?: {
    name: string;
    value: string;
  }[];
}

interface TransactionEdge {
  node: TransactionNode;
  cursor: string;
}

interface TransactionConnection {
  edges: TransactionEdge[];
  pageInfo: {
    hasNextPage: boolean;
  };
}

interface ArweaveStats {
  totalDonationsWinston: string;
  totalFiles: number;
  totalUsers: number;
}

/**
 * Fetch all transactions matching a query using pagination
 */
async function fetchAllTransactions(
  baseQuery: (cursor?: string) => string
): Promise<TransactionNode[]> {
  let allNodes: TransactionNode[] = [];
  let hasNextPage = true;
  let cursor: string | undefined = undefined;

  while (hasNextPage) {
    const query = baseQuery(cursor);

    try {
      const res = await fetchGraphQl<{ transactions: TransactionConnection }>(query);
      const { edges, pageInfo } = res.data.transactions;

      const nodes = edges.map((edge) => edge.node);
      allNodes = allNodes.concat(nodes);

      hasNextPage = pageInfo.hasNextPage;
      if (hasNextPage && edges.length > 0) {
        const lastEdge = edges[edges.length - 1];
        if (lastEdge) {
          cursor = lastEdge.cursor;
        } else {
          hasNextPage = false;
        }
      } else {
        hasNextPage = false;
      }

      // Safety break to prevent infinite loops in dev/testing or extreme data sizes
      // In production with huge history, we'd need a different strategy (aggregator)
      if (allNodes.length > 5000) {
        console.warn('Transaction limit reached in fetchAllTransactions');
        break;
      }
    } catch (error) {
      console.error('Error fetching transactions page:', error);
      break;
    }
  }

  return allNodes;
}

/**
 * Fetch stats from Arweave GraphQL
 */
export async function getArweaveStats(): Promise<ArweaveStats> {
  const address = STORAGE_FUND_WALLET.address;

  // Query 1: Total Donations (Incoming transactions to wallet)
  const donationsQueryCtx = (cursor?: string) => `
    query {
      transactions(
        recipients: ["${address}"]
        first: 100
        ${cursor ? `after: "${cursor}"` : ''}
      ) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            owner { address }
            quantity {
              winston
            }
          }
        }
      }
    }
  `;

  // Query 2: Total Files (Outgoing transactions with App-Name tag)
  const filesQueryCtx = (cursor?: string) => `
    query {
      transactions(
        owners: ["${address}"]
        tags: [
          { name: "App-Name", values: ["DecoyPhrase"] }
        ]
        first: 100
        ${cursor ? `after: "${cursor}"` : ''}
      ) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            owner {
              address
            }
            quantity {
               winston
            }
            tags {
              name
              value
            }
          }
        }
      }
    }
  `;

  try {
    const [donationNodes, fileNodes] = await Promise.all([
      fetchAllTransactions(donationsQueryCtx),
      fetchAllTransactions(filesQueryCtx),
    ]);

    // Calculate Total Donations
    const totalDonationsWinston = donationNodes.reduce((acc, node) => {
      // Check if quantity exists and is valid
      const amount = node.quantity?.winston ? BigInt(node.quantity.winston) : BigInt(0);
      return acc + amount;
    }, BigInt(0));

    // Calculate Total Files
    const totalFiles = fileNodes.length;

    // Changing logic to count unique users by reading the "Owner" tag embedded in our files
    // alongside unique "donors" which may not have uploaded anything but paid anyway.
    const uniqueUserHashes = new Set<string>();
    fileNodes.forEach((node) => {
      if (node.tags) {
        const ownerTag = node.tags.find((t) => t.name === 'Owner');
        if (ownerTag && ownerTag.value) {
          uniqueUserHashes.add(ownerTag.value);
        }
      }
    });

    const uniqueDonors = new Set(donationNodes.map((node) => node.owner.address));

    const totalUsersSet = new Set([...Array.from(uniqueUserHashes), ...Array.from(uniqueDonors)]);
    const totalUsersCount = totalUsersSet.size;

    return {
      totalDonationsWinston: totalDonationsWinston.toString(),
      totalFiles,
      totalUsers: totalUsersCount > 0 ? totalUsersCount : 0, // Fallback to 0 if none
    };
  } catch (error) {
    console.error('Arweave GraphQL Error:', error);
    return {
      totalDonationsWinston: '0',
      totalFiles: 0,
      totalUsers: 0,
    };
  }
}

async function fetchGraphQl<T>(query: string): Promise<{ data: T }> {
  const res = await fetch(ARWEAVE_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 }, // Cache for 60s
  });

  if (!res.ok) {
    throw new Error(`GraphQL fetch failed: ${res.status}`);
  }

  return res.json();
}
