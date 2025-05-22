// War game implementation
export type WarResult = {
    player: string;
    bot: string;
    outcome: 'win' | 'lose' | 'draw';
};
const warSuits = ['♠', '♥', '♦', '♣'];
const warRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
function warCardValue(card: string): number {
    const rank = card.slice(0, -1);
    return warRanks.indexOf(rank);
}
export function playWar(): WarResult {
    const player = warRanks[Math.floor(Math.random() * 13)] + warSuits[Math.floor(Math.random() * 4)];
    const bot = warRanks[Math.floor(Math.random() * 13)] + warSuits[Math.floor(Math.random() * 4)];
    let outcome: 'win' | 'lose' | 'draw' = 'draw';
    if (warCardValue(player) > warCardValue(bot)) outcome = 'win';
    else if (warCardValue(player) < warCardValue(bot)) outcome = 'lose';
    return { player, bot, outcome };
} 