// Coinflip game implementation
export type CoinflipResult = {
    result: 'heads' | 'tails';
    win: boolean;
    guess: 'heads' | 'tails';
};

export function playCoinflip(guess: 'heads' | 'tails'): CoinflipResult {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    return { result, win: result === guess, guess };
} 