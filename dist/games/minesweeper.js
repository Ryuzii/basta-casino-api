"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playMinesweeper = playMinesweeper;
function playMinesweeper(size = 5, mines = 5, picks = []) {
    // Generate grid
    const grid = Array.from({ length: size }, () => Array(size).fill('safe'));
    let placed = 0;
    while (placed < mines) {
        const x = Math.floor(Math.random() * size);
        const y = Math.floor(Math.random() * size);
        if (grid[x][y] === 'safe') {
            grid[x][y] = 'mine';
            placed++;
        }
    }
    let hitMine = false;
    for (const [x, y] of picks) {
        if (grid[x][y] === 'mine') {
            hitMine = true;
            break;
        }
    }
    return { grid, picks, hitMine };
}
