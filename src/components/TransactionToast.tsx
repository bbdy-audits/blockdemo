import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Transaction } from '../types';

interface TransactionToastProps {
  transaction: Transaction;
  status: 'pending' | 'approved';
}

export const TransactionToast: React.FC<TransactionToastProps> = ({ transaction, status }) => {
  return (
    <div className={`
      fixed bottom-4 right-4 max-w-md bg-white rounded-lg shadow-lg p-4
      transform transition-all duration-500
      ${status === 'approved' ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
    `}>
      <div className="flex items-start">
        <div className={`
          flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
          ${status === 'approved' ? 'bg-green-100' : 'bg-yellow-100'}
        `}>
          <CheckCircle className={`w-5 h-5 ${status === 'approved' ? 'text-green-600' : 'text-yellow-600'}`} />
        </div>
        <div className="ml-3 w-0 flex-1">
          <p className="text-sm font-medium text-gray-900">
            {status === 'approved' ? 'Transaction Approved!' : 'Processing Transaction...'}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            {transaction.from} sent {transaction.candies} candies to {transaction.to}
          </p>
        </div>
      </div>
    </div>
  );
};