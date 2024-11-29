import React from 'react';
import { Candy, Hash } from 'lucide-react';

interface HeaderProps {
  onHome: () => void;
  currentView: 'blockchain' | 'hashing';
  onViewChange: (view: 'blockchain' | 'hashing') => void;
}

export const Header: React.FC<HeaderProps> = ({ onHome, currentView, onViewChange }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onHome}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
          >
            <Candy className="w-8 h-8" />
            <span className="text-xl font-bold">BlockDemo</span>
          </button>

          <nav className="flex space-x-4">
            <button
              onClick={() => onViewChange('blockchain')}
              className={`px-4 py-2 rounded-md transition-colors ${
                currentView === 'blockchain'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Candy className="w-4 h-4" />
                <span>Blockchain</span>
              </div>
            </button>
            <button
              onClick={() => onViewChange('hashing')}
              className={`px-4 py-2 rounded-md transition-colors ${
                currentView === 'hashing'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Hash className="w-4 h-4" />
                <span>Hashing</span>
              </div>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};