import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Block } from '../types';
import { BlockAnimation } from './BlockAnimation';

interface BlockchainVisualizerProps {
  blocks: Block[];
}

export const BlockchainVisualizer: React.FC<BlockchainVisualizerProps> = ({ blocks }) => {
  const [newBlockIndex, setNewBlockIndex] = useState<number | null>(null);

  useEffect(() => {
    if (blocks.length > 0) {
      setNewBlockIndex(blocks.length - 1);
      const timer = setTimeout(() => setNewBlockIndex(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [blocks.length]);

  return (
    <div className="p-4 overflow-x-auto">
      <div className="flex items-center space-x-4">
        {blocks.map((block, index) => (
          <React.Fragment key={block.id}>
            <BlockAnimation
              block={block}
              index={index}
              isNew={index === newBlockIndex}
            />
            {index < blocks.length - 1 && (
              <ArrowRight className="flex-shrink-0 w-6 h-6 text-purple-500 animate-pulse" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};