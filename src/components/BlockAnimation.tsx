import React from 'react';
import { Block } from '../types';

interface BlockAnimationProps {
  block: Block;
  index: number;
  isNew?: boolean;
}

export const BlockAnimation: React.FC<BlockAnimationProps> = ({ block, index, isNew }) => {
  return (
    <div
      className={`
        flex-shrink-0 w-64 bg-white rounded-lg shadow-lg p-4
        transform transition-all duration-500
        ${isNew ? 'animate-bounce-once' : ''}
      `}
    >
      <div className="text-sm font-mono mb-2 flex items-center justify-between">
        <span className="text-purple-600">Block #{index}</span>
        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
          Nonce: {block.nonce}
        </span>
      </div>
      <div className="text-xs text-gray-500 mb-2 break-all">
        <span className="font-medium">Hash:</span> {block.hash.substring(0, 12)}...
      </div>
      <div className="text-xs text-gray-500 mb-2 break-all">
        <span className="font-medium">Previous:</span> {block.previousHash.substring(0, 12)}...
      </div>
      <div className="border-t pt-2">
        <div className="text-sm font-semibold mb-1">Transactions:</div>
        {block.transactions.map((tx) => (
          <div
            key={tx.id}
            className="text-xs bg-gray-50 p-2 rounded mb-1 transition-all hover:bg-gray-100"
          >
            <div className="flex items-center justify-between">
              <span>{tx.from} → {tx.to}</span>
              <span className="font-medium">{tx.candies} 🍬</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-2 flex items-center justify-between">
        <span>Mined by: {block.miner}</span>
        <span>{new Date(block.timestamp).toLocaleTimeString()}</span>
      </div>
    </div>
  );
};