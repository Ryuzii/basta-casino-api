// Dice game implementation
export type DiceResult = {
    rolls: number[];
    win: boolean | null;
    guess?: number;
};

export function playDice(options: { dice?: number, guess?: number } = {}): DiceResult {
    const dice = options.dice ?? 1;
    const rolls = Array.from({ length: dice }, () => Math.floor(Math.random() * 6) + 1);
    let win: boolean | null = null;
    if (options.guess !== undefined) {
        win = rolls.includes(options.guess);
    }
    return { rolls, win, guess: options.guess };
} 