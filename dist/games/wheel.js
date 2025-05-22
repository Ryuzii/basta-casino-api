"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playWheel = playWheel;
const defaultSegments = ['100', '200', '300', '400', '500', 'Lose', 'Double', 'Jackpot'];
function playWheel(segments = defaultSegments) {
    const result = segments[Math.floor(Math.random() * segments.length)];
    return { segments, result };
}
