"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playHilo = playHilo;
const hiloSuits = ['♠', '♥', '♦', '♣'];
const hiloRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
function hiloCardValue(card) {
    const rank = card.slice(0, -1);
    return hiloRanks.indexOf(rank);
}
function playHilo(guess) {
    const current = hiloRanks[Math.floor(Math.random() * 13)] + hiloSuits[Math.floor(Math.random() * 4)];
    let next;
    do {
        next = hiloRanks[Math.floor(Math.random() * 13)] + hiloSuits[Math.floor(Math.random() * 4)];
    } while (next === current);
    const win = guess === 'higher'
        ? hiloCardValue(next) > hiloCardValue(current)
        : hiloCardValue(next) < hiloCardValue(current);
    return { current, next, guess, win };
}
