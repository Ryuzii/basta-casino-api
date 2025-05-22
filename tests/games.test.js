const assert = require('assert');
const {
  playBlackjack,
  playRoulette,
  playSlots,
  playCoinflip,
  playDice,
  playHilo,
  playWheel,
  playRPS,
  playCrash,
  playMinesweeper,
  playWar,
  playLottery
} = require('../dist/index');

console.log('Testing basta-casino-api games...');

// Blackjack
const bj = playBlackjack();
assert(['win', 'lose', 'push'].includes(bj.outcome));

// Roulette
const r = playRoulette({ type: 'color', value: 'red' });
assert(['win', 'lose'].includes(r.outcome));

// Slots
const s = playSlots();
assert(s.grid.length === 3);

// Coinflip
const cf = playCoinflip('heads');
assert(['heads', 'tails'].includes(cf.result));

// Dice
const d = playDice({ dice: 2 });
assert(Array.isArray(d.rolls));

// Hi-Lo
const hi = playHilo('higher');
assert(typeof hi.win === 'boolean');

// Wheel
const w = playWheel();
assert(w.segments.includes(w.result));

// RPS
const rps = playRPS('rock');
assert(['win', 'lose', 'draw'].includes(rps.outcome));

// Crash
const cr = playCrash(2.5);
assert(typeof cr.crashAt === 'number');

// Minesweeper
const ms = playMinesweeper(5, 5, [[0,0]]);
assert(Array.isArray(ms.grid));

// War
const war = playWar();
assert(['win', 'lose', 'draw'].includes(war.outcome));

// Lottery
const lot = playLottery([1,2,3,4,5,6]);
assert(Array.isArray(lot.draw));

console.log('All tests passed!'); 