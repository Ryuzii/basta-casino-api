"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playRPS = playRPS;
const rpsChoices = ['rock', 'paper', 'scissors'];
function playRPS(player) {
    const bot = rpsChoices[Math.floor(Math.random() * 3)];
    let outcome = 'draw';
    if ((player === 'rock' && bot === 'scissors') ||
        (player === 'paper' && bot === 'rock') ||
        (player === 'scissors' && bot === 'paper'))
        outcome = 'win';
    else if (player !== bot)
        outcome = 'lose';
    return { player, bot, outcome };
}
