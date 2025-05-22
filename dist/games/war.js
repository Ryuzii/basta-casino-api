"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playWar = playWar;
const warSuits = ['♠', '♥', '♦', '♣'];
const warRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
function warCardValue(card) {
    const rank = card.slice(0, -1);
    return warRanks.indexOf(rank);
}
function playWar() {
    const player = warRanks[Math.floor(Math.random() * 13)] + warSuits[Math.floor(Math.random() * 4)];
    const bot = warRanks[Math.floor(Math.random() * 13)] + warSuits[Math.floor(Math.random() * 4)];
    let outcome = 'draw';
    if (warCardValue(player) > warCardValue(bot))
        outcome = 'win';
    else if (warCardValue(player) < warCardValue(bot))
        outcome = 'lose';
    return { player, bot, outcome };
}
