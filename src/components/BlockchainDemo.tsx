import React, { useState } from 'react';
import { BlockchainVisualizer } from './BlockchainVisualizer';
import { TransactionForm } from './TransactionForm';
import { TransactionToast } from './TransactionToast';
import { PendingTransactions } from './PendingTransactions';
import { Block, Transaction } from '../types';
import { mineBlock } from '../utils/blockchain';

export const BlockchainDemo: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>(() => [{
    id: '0',
    previousHash: '0000000000000000',
    timestamp: Date.now(),
    transactions: [],
    nonce: 0,
    hash: '0000000000000000',
    miner: 'Genesis'
  }]);
  
  const [pendingTransactions, setPendingTransactions] = useState<Transaction[]>([]);
  const [lastTransaction, setLastTransaction] = useState<Transaction | null>(null);
  const [transactionStatus, setTransactionStatus] = useState<'pending' | 'approved'>('pending');
  const [isProcessingBlock, setIsProcessingBlock] = useState(false);
  
  const players = ['Alice', 'Bob', 'Charlie', 'Dave'];

  const handleTransaction = (from: string, to: string, candies: number) => {
    if (blocks.length >= 10) {
      alert('Maximum number of blocks reached! The blockchain is complete.');
      return;
    }

    const newTransaction: Transaction = {
      id: Math.random().toString(36).substr(2, 9),
      from,
      to,
      candies,
      timestamp: Date.now()
    };

    setLastTransaction(newTransaction);
    setTransactionStatus('pending');
    setPendingTransactions(prev => [...prev, newTransaction]);

    setTimeout(() => {
      setTransactionStatus('approved');
      
      if (pendingTransactions.length >= 2) {
        setIsProcessingBlock(true);
        
        setTimeout(() => {
          const previousBlock = blocks[blocks.length - 1];
          const transactions = [...pendingTransactions, newTransaction];
          const transactionsString = JSON.stringify(transactions);
          
          const { hash, nonce } = mineBlock(previousBlock.hash, transactionsString);
          
          const newBlock: Block = {
            id: Math.random().toString(36).substr(2, 9),
            previousHash: previousBlock.hash,
            timestamp: Date.now(),
            transactions,
            nonce,
            hash,
            miner: players[Math.floor(Math.random() * players.length)]
          };

          setBlocks(prev => [...prev, newBlock]);
          setPendingTransactions([]);
          setIsProcessingBlock(false);
        }, 2000);
      }

      setTimeout(() => {
        setLastTransaction(null);
      }, 3000);
    }, 3000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Blockchain</h2>
          <BlockchainVisualizer blocks={blocks} />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Pending Transactions</h2>
          <PendingTransactions transactions={pendingTransactions} />
        </div>
      </div>
      
      <div>
        <TransactionForm 
          onSubmit={handleTransaction} 
          players={players}
          disabled={isProcessingBlock || blocks.length >= 10}
        />
      </div>

      {lastTransaction && (
        <TransactionToast
          transaction={lastTransaction}
          status={transactionStatus}
        />
      )}
    </div>
  );
};