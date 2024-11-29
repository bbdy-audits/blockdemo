export const calculateHash = (data: string): string => {
  // Simple hash function for demonstration
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(16, '0');
};

export const mineBlock = (
  previousHash: string,
  transactions: string,
  difficulty: number = 4
): { hash: string; nonce: number } => {
  let nonce = 0;
  let hash = '';
  
  while (!hash.startsWith('0'.repeat(difficulty))) {
    nonce++;
    hash = calculateHash(`${previousHash}${transactions}${nonce}`);
  }
  
  return { hash, nonce };
};