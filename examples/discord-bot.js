// Example Discord.js v14 bot using basta-casino-api
const { Client, GatewayIntentBits } = require('discord.js');
const {
  playCoinflip,
  playDice,
  playBlackjack
} = require('../dist/index');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  // Coinflip: !coinflip heads
  if (message.content.startsWith('!coinflip')) {
    const guess = message.content.split(' ')[1] === 'tails' ? 'tails' : 'heads';
    const result = playCoinflip(guess);
    message.reply(`You guessed **${guess}**. The coin landed on **${result.result}**. ${result.win ? 'You win!' : 'You lose!'}`);
  }

  // Dice: !dice 2 4
  if (message.content.startsWith('!dice')) {
    const args = message.content.split(' ');
    const dice = parseInt(args[1]) || 1;
    const guess = args[2] ? parseInt(args[2]) : undefined;
    const result = playDice({ dice, guess });
    message.reply(`You rolled: [${result.rolls.join(', ')}]${guess ? ` | Your guess: ${guess} | Win: ${result.win}` : ''}`);
  }

  // Blackjack: !blackjack
  if (message.content.startsWith('!blackjack')) {
    const result = playBlackjack();
    message.reply(`Your hand: ${result.playerHand.join(', ')} (${result.outcome.toUpperCase()})\nDealer: ${result.dealerHand.join(', ')}\nReason: ${result.reason}`);
  }
});

client.login('YOUR_DISCORD_BOT_TOKEN'); // Replace with your bot token 