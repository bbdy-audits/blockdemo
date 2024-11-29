import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { Header } from './components/Header';
import { BlockchainDemo } from './components/BlockchainDemo';
import { HashingDemo } from './components/HashingDemo';
import { MiningDemo } from './components/MiningDemo';
import { BlockDemo } from './components/BlockDemo';

function App() {
  const [started, setStarted] = useState(false);
  const [currentView, setCurrentView] = useState<'blockchain' | 'hashing' | 'mining' | 'block'>('blockchain');

  if (!started) {
    return <WelcomeScreen onStart={() => setStarted(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        onHome={() => setStarted(false)} 
        currentView={currentView}
        onViewChange={setCurrentView}
      />
      
      <div className="max-w-7xl mx-auto py-6 px-4">
        {currentView === 'blockchain' && <BlockchainDemo />}
        {currentView === 'hashing' && <HashingDemo />}
        {currentView === 'mining' && <MiningDemo />}
        {currentView === 'block' && <BlockDemo />}
      </div>
    </div>
  );
}