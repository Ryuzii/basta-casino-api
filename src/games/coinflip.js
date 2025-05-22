"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playCoinflip = playCoinflip;
function playCoinflip(guess) {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    return { result, win: result === guess, guess };
}
