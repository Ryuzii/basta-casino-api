"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playSlots = playSlots;
const symbols = ['🍒', '🍋', '🔔', '⭐', '7️⃣'];
function playSlots() {
    // 3x3 grid
    const grid = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => symbols[Math.floor(Math.random() * symbols.length)]));
    // Check for win (any horizontal line with all same symbol)
    let outcome = 'lose';
    let line = null;
    for (let i = 0; i < 3; i++) {
        if (grid[i].every(s => s === grid[i][0])) {
            outcome = 'win';
            line = i;
            break;
        }
    }
    return { grid, outcome, line };
}
