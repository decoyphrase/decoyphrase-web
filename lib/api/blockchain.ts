import { TEAM_FUND_WALLETS, STORAGE_FUND_WALLET } from '@/constants/pricing';

/**
 * Blockchain Client for fetching wallet balances
 * Uses Edge-compatible fetch API with no external heavy SDKs
 */

interface JsonRpcResponse<T> {
  jsonrpc: string;
  result: T;
  id: number;
  error?: {
    code: number;
    message: string;
  };
}

// Balance Converters
const TO_AR = (winston: number) => winston / 1e12;
const TO_SOL = (lamports: number) => lamports / 1e9;
const TO_ETH = (wei: number) => wei / 1e18;
const TO_BTC = (sats: number) => sats / 1e8;
const TO_SUI = (mist: number) => mist / 1e9;

export class BlockchainClient {
  /**
   * Fetch all balances for Team and Storage funds
   */
  static async getAllBalances() {
    // 1. Storage Fund (Arweave)
    const storagePromise = this.getArweaveBalance(STORAGE_FUND_WALLET.address)
      .then((bal) => ({ type: 'storage', balance: bal }))
      .catch((e) => {
        console.error('Failed to fetch Arweave balance:', e);
        return { type: 'storage', balance: 0 };
      });

    // 2. Team Fund (Multi-chain)
    const teamPromises = TEAM_FUND_WALLETS.map(async (wallet) => {
      try {
        let balance = 0;
        switch (wallet.code) {
          case 'SOL':
            balance = await this.getSolanaBalance(wallet.address);
            break;
          case 'ETH': // Ethereum
          case 'BASE': // Base
          case 'POLYGON': // Polygon
            balance = await this.getEvmBalance(wallet.code, wallet.address);
            break;
          case 'BTC':
            balance = await this.getBitcoinBalance(wallet.address);
            break;
          case 'SUI':
            balance = await this.getSuiBalance(wallet.address);
            break;
          default:
            console.warn(`Unknown chain code: ${wallet.code}`);
        }
        return { code: wallet.code, balance };
      } catch (e) {
        console.error(`Failed to fetch ${wallet.code} balance:`, e);
        return { code: wallet.code, balance: 0 };
      }
    });

    const [storageResult, ...teamResults] = await Promise.all([storagePromise, ...teamPromises]);

    return {
      storageBal: (storageResult as { balance: number }).balance,
      teamBalances: teamResults as { code: string; balance: number }[],
    };
  }

  // --- Individual Fetchers ---

  private static async getArweaveBalance(address: string): Promise<number> {
    try {
      const res = await fetch(`https://arweave.net/wallet/${address}/balance`, {
        next: { revalidate: 300 }, // 5 min cache
      });
      if (!res.ok) throw new Error(`Arweave fetch failed: ${res.statusText}`);
      const winston = await res.text();
      return TO_AR(Number(winston));
    } catch (e) {
      console.error('Arweave RPC Error', e);
      return 0;
    }
  }

  private static async getSolanaBalance(address: string): Promise<number> {
    try {
      const res = await fetch('https://api.mainnet-beta.solana.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'getBalance',
          params: [address],
        }),
        next: { revalidate: 300 },
      });

      const data = (await res.json()) as JsonRpcResponse<{ value: number }>;
      if (data.error) throw new Error(data.error.message);
      return TO_SOL(data.result.value);
    } catch (e) {
      console.error('Solana RPC Error', e);
      return 0;
    }
  }

  private static async getEvmBalance(chain: string, address: string): Promise<number> {
    let rpcUrls: string[] = [];

    switch (chain) {
      case 'ETH':
        rpcUrls = [
          'https://ethereum.publicnode.com', // Stable, robust, no-key
          'https://cloudflare-eth.com',
          'https://1rpc.io/eth',
          'https://eth.llamarpc.com',
        ];
        break;
      case 'BASE':
        rpcUrls = ['https://mainnet.base.org'];
        break;
      case 'POLYGON':
        rpcUrls = ['https://polygon-rpc.com'];
        break;
      default:
        return 0;
    }

    for (const rpcUrl of rpcUrls) {
      try {
        const res = await fetch(rpcUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: 1,
            method: 'eth_getBalance',
            params: [address, 'latest'],
          }),
          next: { revalidate: 300 },
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = (await res.json()) as JsonRpcResponse<string>;
        if (data.error) throw new Error(data.error.message);

        return TO_ETH(Number(data.result));
      } catch (e) {
        console.warn(`${chain} RPC Error (${rpcUrl}):`, e);
        // Continue to next RPC
      }
    }

    console.error(`All ${chain} RPCs failed.`);
    return 0;
  }

  private static async getBitcoinBalance(address: string): Promise<number> {
    try {
      const res = await fetch(`https://mempool.space/api/address/${address}`, {
        next: { revalidate: 300 },
      });
      if (!res.ok) throw new Error(`Bitcoin fetch failed: ${res.statusText}`);

      const data = await res.json();
      // Sum of confirmed + unconfirmed (mempool) balance
      const satoshis =
        data.chain_stats.funded_txo_sum -
        data.chain_stats.spent_txo_sum +
        (data.mempool_stats.funded_txo_sum - data.mempool_stats.spent_txo_sum);

      return TO_BTC(satoshis);
    } catch (e) {
      console.error('Bitcoin RPC Error', e);
      return 0;
    }
  }

  private static async getSuiBalance(address: string): Promise<number> {
    try {
      const res = await fetch('https://fullnode.mainnet.sui.io:443', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'suix_getBalance',
          params: { owner: address },
        }),
        next: { revalidate: 300 },
      });

      const data = (await res.json()) as JsonRpcResponse<{ totalBalance: string }>;
      if (data.error) throw new Error(data.error.message);
      return TO_SUI(Number(data.result.totalBalance));
    } catch (e) {
      console.error('Sui RPC Error', e);
      return 0;
    }
  }
}
