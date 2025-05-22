"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playBlackjack = playBlackjack;
const suits = ['♠', '♥', '♦', '♣'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
function drawCard(deck) {
    const idx = Math.floor(Math.random() * deck.length);
    return deck.splice(idx, 1)[0];
}
function getValue(hand) {
    let value = 0;
    let aces = 0;
    for (const card of hand) {
        const rank = card.slice(0, -1);
        if (rank === 'A') {
            aces++;
            value += 11;
        }
        else if (['K', 'Q', 'J'].includes(rank)) {
            value += 10;
        }
        else {
            value += parseInt(rank);
        }
    }
    while (value > 21 && aces) {
        value -= 10;
        aces--;
    }
    return value;
}
function playBlackjack() {
    // Create and shuffle deck
    const deck = [];
    for (const suit of suits)
        for (const rank of ranks)
            deck.push(rank + suit);
    // Initial deal
    const playerHand = [drawCard(deck), drawCard(deck)];
    const dealerHand = [drawCard(deck), drawCard(deck)];
    // Player auto-stands at 17+
    while (getValue(playerHand) < 17)
        playerHand.push(drawCard(deck));
    // Dealer stands at 17+
    while (getValue(dealerHand) < 17)
        dealerHand.push(drawCard(deck));
    const playerValue = getValue(playerHand);
    const dealerValue = getValue(dealerHand);
    let outcome;
    let reason = '';
    if (playerValue > 21) {
        outcome = 'lose';
        reason = 'Player busts';
    }
    else if (dealerValue > 21) {
        outcome = 'win';
        reason = 'Dealer busts';
    }
    else if (playerValue > dealerValue) {
        outcome = 'win';
        reason = 'Player has higher hand';
    }
    else if (playerValue < dealerValue) {
        outcome = 'lose';
        reason = 'Dealer has higher hand';
    }
    else {
        outcome = 'push';
        reason = 'Tie';
    }
    return { playerHand, dealerHand, outcome, reason };
}
