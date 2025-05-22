"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playCrash = playCrash;
function playCrash(cashout) {
    // Simulate crash multiplier (exponential random)
    const crashAt = Math.floor((Math.random() ** 2) * 100) / 10 + 1; // 1.0 - 11.0
    const win = cashout <= crashAt;
    return { crashAt: Math.round(crashAt * 100) / 100, cashout, win };
}
