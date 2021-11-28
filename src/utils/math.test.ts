import { clamp, randomIntFromInterval } from './math'

describe('math', () => {
  describe('clamp', () => {
    it('clamps value lower than min', () => {
      expect(clamp(4, 5, 10)).toBe(5)
      expect(clamp(4.48, 4.49, 4.5)).toBe(4.49)
      expect(clamp(-11, -10, -5)).toBe(-10)
    })

    it('clamps value higher than max', () => {
      expect(clamp(11, 5, 10)).toBe(10)
      expect(clamp(4.51, 4.49, 4.5)).toBe(4.5)
      expect(clamp(-4, -10, -5)).toBe(-5)
    })

    it('does not clamp value inside min max range', () => {
      expect(clamp(7, 5, 10)).toBe(7)
      expect(clamp(4.49, 4.48, 4.5)).toBe(4.49)
      expect(clamp(-7, -10, -5)).toBe(-7)
    })

    it('does not clamp value equals to min', () => {
      expect(clamp(1, 1, 10)).toBe(1)
      expect(clamp(0, 0, 10)).toBe(0)
    })

    it('does not clamp value equals to max', () => {
      expect(clamp(10, 1, 10)).toBe(10)
      expect(clamp(10, 0, 10)).toBe(10)
    })

    it('does not clamp value equals to min and max', () => {
      expect(clamp(1, 1, 1)).toBe(1)
      expect(clamp(0, 0, 0)).toBe(0)
    })
  })

  describe('randomIntFromInterval', () => {
    it('generates random int between min and max', () => {
      for (let i = 0; i < 10; i++) {
        const result = randomIntFromInterval(4, 6)
        expect(result).toBeGreaterThanOrEqual(4)
        expect(result).toBeLessThanOrEqual(6)
      }
    })

    it('generates random negative int between min and max', () => {
      for (let i = 0; i < 10; i++) {
        const result = randomIntFromInterval(-6, -4)
        expect(result).toBeGreaterThanOrEqual(-6)
        expect(result).toBeLessThanOrEqual(-4)
      }
    })

    it('generates same int between same min and max', () => {
      for (let i = 0; i < 10; i++) {
        const result = randomIntFromInterval(5, 5)
        expect(result).toBe(5)
      }
    })
  })
})
