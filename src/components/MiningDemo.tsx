import React from 'react';
import { Pickaxe, ShieldCheck, Coins, Cpu } from 'lucide-react';

export const MiningDemo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Pickaxe className="w-8 h-8 text-purple-500" />
          <h2 className="text-2xl font-bold text-gray-800">Become a Miner/Validator</h2>
        </div>

        <div className="space-y-8">
          {/* PoW Section */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Cpu className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-purple-800">Proof of Work (PoW)</h3>
            </div>
            <p className="text-purple-700 mb-4">
              In PoW, miners compete to solve complex mathematical puzzles. The first to solve it gets to add the next block and receive rewards.
            </p>
            <ul className="list-disc list-inside text-purple-700 space-y-2">
              <li>Requires powerful computing hardware</li>
              <li>High energy consumption</li>
              <li>More decentralized</li>
              <li>Used by Bitcoin</li>
            </ul>
          </div>

          {/* PoS Section */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-pink-600" />
              <h3 className="text-xl font-semibold text-pink-800">Proof of Stake (PoS)</h3>
            </div>
            <p className="text-pink-700 mb-4">
              In PoS, validators stake their coins as collateral. The more you stake, the higher your chances of being chosen to validate the next block.
            </p>
            <ul className="list-disc list-inside text-pink-700 space-y-2">
              <li>Energy efficient</li>
              <li>Requires holding cryptocurrency</li>
              <li>Used by Ethereum</li>
              <li>Lower hardware requirements</li>
            </ul>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Coins className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-purple-800">Benefits of Mining/Validating</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">Rewards</h4>
                <ul className="list-disc list-inside text-purple-600 space-y-1">
                  <li>Block rewards</li>
                  <li>Transaction fees</li>
                  <li>Voting rights</li>
                </ul>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">Network Support</h4>
                <ul className="list-disc list-inside text-purple-600 space-y-1">
                  <li>Secure the network</li>
                  <li>Process transactions</li>
                  <li>Maintain decentralization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};