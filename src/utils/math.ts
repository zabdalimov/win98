/**
 * Cuts the value off if it's outside given bounds.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Generates random integer between [min, max].
 */
export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Tells whether given value is a number
 */
export function isNumber(numberCandidate: unknown) {
  return !isNaN(numberCandidate as number)
}
