// Slots game implementation
export type SlotResult = {
    grid: string[][];
    outcome: 'win' | 'lose';
    line: number | null;
};
const symbols = ['🍒', '🍋', '🔔', '⭐', '7️⃣'];

export function playSlots(): SlotResult {
    // 3x3 grid
    const grid = Array.from({ length: 3 }, () =>
        Array.from({ length: 3 }, () => symbols[Math.floor(Math.random() * symbols.length)])
    );
    // Check for win (any horizontal line with all same symbol)
    let outcome: 'win' | 'lose' = 'lose';
    let line: number | null = null;
    for (let i = 0; i < 3; i++) {
        if (grid[i].every(s => s === grid[i][0])) {
            outcome = 'win';
            line = i;
            break;
        }
    }
    return { grid, outcome, line };
} 