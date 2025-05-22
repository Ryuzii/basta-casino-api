"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playDice = playDice;
function playDice(options = {}) {
    var _a;
    const dice = (_a = options.dice) !== null && _a !== void 0 ? _a : 1;
    const rolls = Array.from({ length: dice }, () => Math.floor(Math.random() * 6) + 1);
    let win = null;
    if (options.guess !== undefined) {
        win = rolls.includes(options.guess);
    }
    return { rolls, win, guess: options.guess };
}
