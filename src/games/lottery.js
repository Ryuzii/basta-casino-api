"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playLottery = playLottery;
function playLottery(picks, pool = 49, drawCount = 6) {
    // Draw unique numbers
    const draw = [];
    while (draw.length < drawCount) {
        const n = Math.floor(Math.random() * pool) + 1;
        if (!draw.includes(n))
            draw.push(n);
    }
    const matches = picks.filter(n => draw.includes(n)).length;
    const win = matches === drawCount;
    return { draw, picks, matches, win };
}
