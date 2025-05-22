// Lottery game implementation
export type LotteryResult = {
    draw: number[];
    picks: number[];
    matches: number;
    win: boolean;
};
export function playLottery(picks: number[], pool = 49, drawCount = 6): LotteryResult {
    // Draw unique numbers
    const draw: number[] = [];
    while (draw.length < drawCount) {
        const n = Math.floor(Math.random() * pool) + 1;
        if (!draw.includes(n)) draw.push(n);
    }
    const matches = picks.filter(n => draw.includes(n)).length;
    const win = matches === drawCount;
    return { draw, picks, matches, win };
} 