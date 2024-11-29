import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { Transaction } from '../types';

interface PendingTransactionsProps {
  transactions: Transaction[];
}

interface ApprovedStatus {
  [key: string]: boolean;
}

export const PendingTransactions: React.FC<PendingTransactionsProps> = ({ transactions }) => {
  const [approvedStatus, setApprovedStatus] = useState<ApprovedStatus>({});

  useEffect(() => {
    transactions.forEach((tx) => {
      if (!approvedStatus[tx.id]) {
        setTimeout(() => {
          setApprovedStatus(prev => ({
            ...prev,
            [tx.id]: true
          }));
        }, 3000);
      }
    });
  }, [transactions]);

  return (
    <div className="space-y-2">
      {transactions.map((tx) => (
        <div
          key={tx.id}
          className={`
            p-3 bg-gray-50 rounded-lg flex items-center justify-between
            ${!approvedStatus[tx.id] ? 'animate-pulse' : ''}
          `}
        >
          <span>
            {tx.from} → {tx.to}: {tx.candies} 🍬
          </span>
          {approvedStatus[tx.id] && (
            <CheckCircle className="w-5 h-5 text-green-500 animate-bounce-once" />
          )}
        </div>
      ))}
    </div>
  );
}