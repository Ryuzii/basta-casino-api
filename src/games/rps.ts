// Rock Paper Scissors game implementation
export type RPSResult = {
    player: 'rock' | 'paper' | 'scissors';
    bot: 'rock' | 'paper' | 'scissors';
    outcome: 'win' | 'lose' | 'draw';
};
const rpsChoices = ['rock', 'paper', 'scissors'] as const;
export function playRPS(player: 'rock' | 'paper' | 'scissors'): RPSResult {
    const bot = rpsChoices[Math.floor(Math.random() * 3)];
    let outcome: 'win' | 'lose' | 'draw' = 'draw';
    if (
        (player === 'rock' && bot === 'scissors') ||
        (player === 'paper' && bot === 'rock') ||
        (player === 'scissors' && bot === 'paper')
    ) outcome = 'win';
    else if (player !== bot) outcome = 'lose';
    return { player, bot, outcome };
} 