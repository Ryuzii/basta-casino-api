// Wheel of Fortune game implementation
export type WheelResult = {
    segments: string[];
    result: string;
};
const defaultSegments = ['100', '200', '300', '400', '500', 'Lose', 'Double', 'Jackpot'];
export function playWheel(segments: string[] = defaultSegments): WheelResult {
    const result = segments[Math.floor(Math.random() * segments.length)];
    return { segments, result };
} 