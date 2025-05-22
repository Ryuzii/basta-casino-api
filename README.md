# basta-casino-api

A fast, easy-to-use, and stable casino games API for Discord bots and Node.js apps. Includes classic and modern games like blackjack, roulette, slots, coinflip, dice, and more!

---

## Installation
```sh
npm install basta-casino-api
```

---

## Features
- 12+ casino games: Blackjack, Roulette, Slots, Coinflip, Dice, Hi-Lo, Wheel of Fortune, Rock Paper Scissors, Crash, Minesweeper, War, Lottery
- Simple, stateless function calls
- TypeScript support
- Well-tested and extensible
- Perfect for Discord bots and chat games

---

## Usage Example
```js
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
} = require('basta-casino-api');

console.log(playBlackjack()); // { playerHand, dealerHand, outcome, reason }
console.log(playRoulette({ type: 'color', value: 'red' })); // { number, color, outcome, bet }
console.log(playSlots()); // { grid, outcome, line }
console.log(playCoinflip('heads')); // { result, win, guess }
console.log(playDice({ dice: 2, guess: 4 })); // { rolls, win, guess }
console.log(playHilo('higher')); // { current, next, guess, win }
console.log(playWheel()); // { segments, result }
console.log(playRPS('rock')); // { player, bot, outcome }
console.log(playCrash(2.5)); // { crashAt, cashout, win }
console.log(playMinesweeper(5, 5, [[0,0],[1,1]])); // { grid, picks, hitMine }
console.log(playWar()); // { player, bot, outcome }
console.log(playLottery([1,2,3,4,5,6])); // { draw, picks, matches, win }
```

---

## API Reference

### Blackjack
- `playBlackjack()`
  - Returns: `{ playerHand, dealerHand, outcome, reason }`

### Roulette
- `playRoulette({ type, value })`
  - `type`: 'number' | 'color' | 'even' | 'odd'
  - `value`: number | 'red' | 'black'
  - Returns: `{ number, color, outcome, bet }`

### Slots
- `playSlots()`
  - Returns: `{ grid, outcome, line }`

### Coinflip
- `playCoinflip(guess)`
  - `guess`: 'heads' | 'tails'
  - Returns: `{ result, win, guess }`

### Dice
- `playDice({ dice, guess })`
  - `dice`: number (default 1)
  - `guess`: number (optional)
  - Returns: `{ rolls, win, guess }`

### Hi-Lo
- `playHilo(guess)`
  - `guess`: 'higher' | 'lower'
  - Returns: `{ current, next, guess, win }`

### Wheel of Fortune
- `playWheel([segments])`
  - `segments`: string[] (optional)
  - Returns: `{ segments, result }`

### Rock Paper Scissors
- `playRPS(player)`
  - `player`: 'rock' | 'paper' | 'scissors'
  - Returns: `{ player, bot, outcome }`

### Crash
- `playCrash(cashout)`
  - `cashout`: number
  - Returns: `{ crashAt, cashout, win }`

### Minesweeper
- `playMinesweeper(size, mines, picks)`
  - `size`: number (default 5)
  - `mines`: number (default 5)
  - `picks`: [number, number][] (optional)
  - Returns: `{ grid, picks, hitMine }`

### War
- `playWar()`
  - Returns: `{ player, bot, outcome }`

### Lottery
- `playLottery(picks, pool, drawCount)`
  - `picks`: number[]
  - `pool`: number (default 49)
  - `drawCount`: number (default 6)
  - Returns: `{ draw, picks, matches, win }`

---

## Discord.js Bot Example
```js
const { playCoinflip } = require('basta-casino-api');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', message => {
  if (message.content.startsWith('!coinflip')) {
    const guess = message.content.split(' ')[1] === 'tails' ? 'tails' : 'heads';
    const result = playCoinflip(guess);
    message.reply(`You guessed ${guess}. The coin landed on ${result.result}. ${result.win ? 'You win!' : 'You lose!'}`);
  }
});

client.login('YOUR_BOT_TOKEN');
```

---

## Included Games
- Blackjack
- Roulette
- Slots
- Coinflip
- Dice
- Hi-Lo
- Wheel of Fortune
- Rock Paper Scissors
- Crash
- Minesweeper
- War
- Lottery

---

## License
MIT

> **Note:** All games are implemented and ready for use in your Discord bot or Node.js app! 