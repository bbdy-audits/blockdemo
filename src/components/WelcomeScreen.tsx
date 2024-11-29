import React from 'react';
import { Candy } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl text-center">
        <div className="mb-6">
          <Candy className="w-16 h-16 mx-auto text-purple-500" />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Welcome to BlockDemo</h1>
        <p className="text-lg text-purple-600 mb-4">by BlockBuddy: Your buddy for blockchain</p>
        <p className="text-xl text-gray-600 mb-8">
          Learn blockchain concepts by trading candies in a fun and simple way!
        </p>
        <div className="space-y-4 mb-8">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h2 className="font-semibold text-purple-700">🍬 Trade Candies</h2>
            <p className="text-purple-600">Make transactions and see them added to blocks</p>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg">
            <h2 className="font-semibold text-pink-700">⛏️ Be a Miner</h2>
            <p className="text-pink-600">Verify transactions and earn rewards</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="font-semibold text-blue-700">🔗 Build Blocks</h2>
            <p className="text-blue-600">Watch the blockchain grow with each transaction</p>
          </div>
        </div>
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Start Learning
        </button>
      </div>
    </div>
  );
};