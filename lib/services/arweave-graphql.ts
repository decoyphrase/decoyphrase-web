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

    // Calculate Unique Users (Owners of the files? Or people who donated?)
    // The previous logic counted owners of FILE transactions, which are... us (the app wallet).
    // Wait, filesQuery has `owners: ["${address}"]`. The owner IS the wallet.
    // So distinct owners will always be 1 (the app wallet) if we filter by our owner.
    // Ah, the previous code in `arweave-graphql.ts` was:
    // `owners: ["${address}"]` ...
    // `const validOwners = fileEdges.map((edge) => edge.node.owner?.address)`
    // This basically counts how many times WE uploaded?
    // User count usually implies distinct users who used the app?
    // But if the app uploads on behalf of users using the storage fund wallet...
    // The storage fund wallet pays. The `owner` of the tx is the storage fund wallet.
    // Where is the user info? Maybe in tags?
    // If the user connects their OWN wallet to pay, then `owners` shouldn't be our wallet.
    // But this `getArweaveStats` seems to track "Stats of the Protocol/App".
    // If we pay for them, we are the owner.
    // Let's stick to the previous logical implementation but fixed for pagination.
    // Previous implementation: `owners: ["${address}"]` -> `uniqueUsersCount = new Set(validOwners).size`.
    // Valid owners would just be [our_address, our_address...]. Size = 1.
    // Maybe `totalFiles` is useful, but `totalUsers` might be 1 if we are the only signer.
    // Let's keep the logic but maybe it's intended to be "People who donated"?
    // Donations query: `recipients: ["${address}"]`. The `owner` of those txs are the donors.
    // Let's count unique donors from donationNodes! That makes more sense for "Total Users" (or total supporters).

    // Changing logic to count unique DONORS as users, because counting our own address as users (from files) seems wrong if we are the signer.
    // Unless the query was meant to be different. The previous code queried files with `owners: [address]`.

    const uniqueDonors = new Set(donationNodes.map((node) => node.owner.address)).size;

    return {
      totalDonationsWinston: totalDonationsWinston.toString(),
      totalFiles,
      totalUsers: uniqueDonors > 0 ? uniqueDonors : 0, // Fallback to 0 if none
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
