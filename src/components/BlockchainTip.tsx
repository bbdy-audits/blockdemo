import React, { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';

const tips = [
  {
    title: "What's a Block?",
    content: "Think of a block like a candy jar! It stores multiple candy trades and keeps them safe. 🍬"
  },
  {
    title: "Why Mining?",
    content: "Miners are like candy trade validators - they make sure nobody's cheating with their candies! ⛏️"
  },
  {
    title: "What's a Hash?",
    content: "A hash is like a unique fingerprint for each candy jar (block). If someone tampers with the trades, the fingerprint changes! 👆"
  },
  {
    title: "Why Chain?",
    content: "Blocks are linked like a chain of candy jars. If someone tries to change an old trade, the whole chain breaks! 🔗"
  },
  {
    title: "What's Consensus?",
    content: "It's like all your friends agreeing on who has which candies - everyone has to agree! 🤝"
  }
];

export const BlockchainTip: React.FC = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTip((prev) => (prev + 1) % tips.length);
        setIsVisible(true);
      }, 500);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`
      fixed bottom-4 right-4 max-w-sm bg-white rounded-lg shadow-lg p-4
      transform transition-all duration-500
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
    `}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Lightbulb className="h-6 w-6 text-yellow-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-gray-900">{tips[currentTip].title}</h3>
          <p className="mt-1 text-sm text-gray-500">{tips[currentTip].content}</p>
        </div>
      </div>
    </div>
  );
};