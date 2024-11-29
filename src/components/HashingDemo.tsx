import React, { useState, useEffect } from 'react';
import { Hash, RefreshCw } from 'lucide-react';
import { calculateHash } from '../utils/blockchain';

export const HashingDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
    setHash(calculateHash(input));
    const timer = setTimeout(() => setAnimation(false), 500);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Hash className="w-8 h-8 text-purple-500" />
          <h2 className="text-2xl font-bold text-gray-800">Hash Generator</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter any text to generate its hash
            </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-lg"
              placeholder="Type something..."
            />
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <label className="text-sm font-medium text-gray-700">Generated Hash</label>
              <RefreshCw className={`w-4 h-4 text-purple-500 ${animation ? 'animate-spin' : ''}`} />
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg font-mono text-lg break-all border border-purple-100">
              {hash || '0000000000000000'}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">How Hashing Works</h3>
            <p className="text-purple-700">
              A hash function is like a digital fingerprint generator. It takes any input 
              (like text, files, or transactions) and creates a unique fixed-length string. 
              The same input always produces the same hash, but even a tiny change creates 
              a completely different result!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};