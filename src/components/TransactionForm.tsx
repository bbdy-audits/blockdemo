import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface TransactionFormProps {
  onSubmit: (from: string, to: string, candies: number) => void;
  players: string[];
  disabled?: boolean;
}

export const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit, players, disabled }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [candies, setCandies] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (from && to && candies > 0 && !disabled) {
      onSubmit(from, to, candies);
      setFrom('');
      setTo('');
      setCandies(1);
    }
  };

  const handleCandiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numValue = parseInt(value, 10);
    
    if (value === '') {
      setCandies(1);
    } else if (!isNaN(numValue) && numValue > 0) {
      setCandies(numValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">New Candy Trade</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">From</label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            disabled={disabled}
          >
            <option value="">Select sender</option>
            {players.map((player) => (
              <option key={player} value={player}>{player}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">To</label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            disabled={disabled}
          >
            <option value="">Select receiver</option>
            {players.filter(player => player !== from).map((player) => (
              <option key={player} value={player}>{player}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Candies</label>
          <input
            type="number"
            min="1"
            value={candies}
            onChange={handleCandiesChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            disabled={disabled}
          />
        </div>
        <button
          type="submit"
          disabled={!from || !to || candies < 1 || disabled}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4 mr-2" />
          {disabled ? 'Processing...' : 'Send Candies'}
        </button>
      </div>
    </form>
  );
};