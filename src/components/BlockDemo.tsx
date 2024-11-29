import React, { useState } from 'react';
import { Cube, Clock, Hash, Link, Database } from 'lucide-react';
import { calculateHash } from '../utils/blockchain';

export const BlockDemo: React.FC = () => {
  const [blockData, setBlockData] = useState({
    timestamp: Date.now(),
    previousHash: '0000000000000000',
    data: '',
    nonce: 0
  });

  const [mining, setMining] = useState(false);
  const [difficulty] = useState(4);

  const hash = calculateHash(
    `${blockData.previousHash}${blockData.timestamp}${blockData.data}${blockData.nonce}`
  );

  const mineBlock = () => {
    setMining(true);
    let currentNonce = blockData.nonce;
    
    const miningInterval = setInterval(() => {
      currentNonce++;
      const newHash = calculateHash(
        `${blockData.previousHash}${blockData.timestamp}${blockData.data}${currentNonce}`
      );
      
      setBlockData(prev => ({ ...prev, nonce: currentNonce }));
      
      if (newHash.startsWith('0'.repeat(difficulty))) {
        clearInterval(miningInterval);
        setMining(false);
      }
    }, 100);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Cube className="w-8 h-8 text-purple-500" />
          <h2 className="text-2xl font-bold text-gray-800">Block Structure</h2>
        </div>

        <div className="space-y-6">
          {/* Block Components */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-purple-500" />
                  <label className="text-sm font-medium text-gray-700">Timestamp</label>
                </div>
                <input
                  type="text"
                  value={new Date(blockData.timestamp).toISOString()}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Link className="w-4 h-4 text-purple-500" />
                  <label className="text-sm font-medium text-gray-700">Previous Hash</label>
                </div>
                <input
                  type="text"
                  value={blockData.previousHash}
                  onChange={(e) => setBlockData({ ...blockData, previousHash: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Database className="w-4 h-4 text-purple-500" />
                  <label className="text-sm font-medium text-gray-700">Block Data</label>
                </div>
                <textarea
                  value={blockData.data}
                  onChange={(e) => setBlockData({ ...blockData, data: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md h-24"
                  placeholder="Enter block data..."
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Hash className="w-4 h-4 text-purple-500" />
                  <label className="text-sm font-medium text-gray-700">Nonce</label>
                </div>
                <input
                  type="number"
                  value={blockData.nonce}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Hash className="w-4 h-4 text-purple-500" />
                  <label className="text-sm font-medium text-gray-700">Current Hash</label>
                </div>
                <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 font-mono break-all">
                  {hash}
                </div>
              </div>

              <button
                onClick={mineBlock}
                disabled={mining}
                className="w-full mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50"
              >
                {mining ? 'Mining...' : 'Mine Block'}
              </button>
            </div>
          </div>

          {/* Block Information */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Block Components Explained</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-purple-700 mb-2">Essential Components</h4>
                <ul className="list-disc list-inside text-purple-600 space-y-1">
                  <li>Timestamp: When the block was created</li>
                  <li>Previous Hash: Links to the previous block</li>
                  <li>Data: Transactions or other information</li>
                  <li>Nonce: Number used for mining</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-purple-700 mb-2">Mining Process</h4>
                <ul className="list-disc list-inside text-purple-600 space-y-1">
                  <li>Adjust nonce until hash starts with {difficulty} zeros</li>
                  <li>Hash combines all block components</li>
                  <li>Difficulty determines mining time</li>
                  <li>Higher difficulty = more zeros needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};