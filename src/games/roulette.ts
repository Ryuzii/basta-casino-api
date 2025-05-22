// Roulette game implementation
export type RouletteBet = { type: 'number' | 'color' | 'even' | 'odd', value: number | 'red' | 'black' };
export type RouletteResult = {
    number: number;
    color: 'red' | 'black';
    outcome: 'win' | 'lose';
    bet: RouletteBet;
};
const redNumbers = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];

export function playRoulette(bet: RouletteBet): RouletteResult {
    const number = Math.floor(Math.random() * 37); // 0-36
    const color = number === 0 ? 'green' : redNumbers.includes(number) ? 'red' : 'black';
    let outcome: 'win' | 'lose' = 'lose';
    if (bet.type === 'number' && bet.value === number) outcome = 'win';
    if (bet.type === 'color' && bet.value === color) outcome = 'win';
    if (bet.type === 'even' && number !== 0 && number % 2 === 0) outcome = 'win';
    if (bet.type === 'odd' && number % 2 === 1) outcome = 'win';
    return { number, color: color as 'red' | 'black', outcome, bet };
} 