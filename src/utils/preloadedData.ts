import { Transaction, Block } from '../types';

export const generatePreloadedBlock = (previousHash: string, blockNumber: number): Block => {
  const preloadedTransactions: Transaction[] = [
    {
      id: `preload-${Math.random().toString(36).substr(2, 9)}`,
      from: ['Alice', 'Bob', 'Charlie', 'Dave'][Math.floor(Math.random() * 4)],
      to: ['Alice', 'Bob', 'Charlie', 'Dave'][Math.floor(Math.random() * 4)],
      candies: Math.floor(Math.random() * 10) + 1,
      timestamp: Date.now() - Math.floor(Math.random() * 1000000)
    },
    {
      id: `preload-${Math.random().toString(36).substr(2, 9)}`,
      from: ['Alice', 'Bob', 'Charlie', 'Dave'][Math.floor(Math.random() * 4)],
      to: ['Alice', 'Bob', 'Charlie', 'Dave'][Math.floor(Math.random() * 4)],
      candies: Math.floor(Math.random() * 10) + 1,
      timestamp: Date.now() - Math.floor(Math.random() * 1000000)
    }
  ];

  return {
    id: `preload-${Math.random().toString(36).substr(2, 9)}`,
    previousHash,
    timestamp: Date.now() - Math.floor(Math.random() * 1000000),
    transactions: preloadedTransactions,
    nonce: Math.floor(Math.random() * 1000000),
    hash: `000${Math.random().toString(36).substr(2, 8)}`,
    miner: ['Alice', 'Bob', 'Charlie', 'Dave'][Math.floor(Math.random() * 4)]
  };
};