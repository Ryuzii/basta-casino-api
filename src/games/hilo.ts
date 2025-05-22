// Hi-Lo game implementation
export type HiloResult = {
    current: string;
    next: string;
    guess: 'higher' | 'lower';
    win: boolean;
};
const hiloSuits = ['♠', '♥', '♦', '♣'];
const hiloRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
function hiloCardValue(card: string): number {
    const rank = card.slice(0, -1);
    return hiloRanks.indexOf(rank);
}
export function playHilo(guess: 'higher' | 'lower'): HiloResult {
    const current = hiloRanks[Math.floor(Math.random() * 13)] + hiloSuits[Math.floor(Math.random() * 4)];
    let next;
    do {
        next = hiloRanks[Math.floor(Math.random() * 13)] + hiloSuits[Math.floor(Math.random() * 4)];
    } while (next === current);
    const win = guess === 'higher'
        ? hiloCardValue(next) > hiloCardValue(current)
        : hiloCardValue(next) < hiloCardValue(current);
    return { current, next, guess, win };
} 