export interface Transaction {
  id: string;
  from: string;
  to: string;
  candies: number;
  timestamp: number;
}

export interface Block {
  id: string;
  previousHash: string;
  timestamp: number;
  transactions: Transaction[];
  nonce: number;
  hash: string;
  miner: string;
}

export interface Player {
  name: string;
  candies: number;
  minedBlocks: number;
}