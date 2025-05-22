// Crash game implementation
export type CrashResult = {
    crashAt: number;
    cashout: number;
    win: boolean;
};
export function playCrash(cashout: number): CrashResult {
    // Simulate crash multiplier (exponential random)
    const crashAt = Math.floor((Math.random() ** 2) * 100) / 10 + 1; // 1.0 - 11.0
    const win = cashout <= crashAt;
    return { crashAt: Math.round(crashAt * 100) / 100, cashout, win };
} 