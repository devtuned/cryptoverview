/**
 * Volatility
 * (i just named it like this, it's nothing official)
 *
 * Describes how much the market goes up and down in a short period of time
 */

export interface Volatility {
  buyFrequency: number // Hz
  sellFrequency: number // Hz
  buyStrength: number // TBD: how high they buy into the order book
  sellStrength: number // TBD: how low(high?) they sell in the order book
}

export function mockVolatility(): Volatility {
  return {
    buyFrequency: Math.random() * 15,
    sellFrequency: Math.random() * 15,
    buyStrength: Math.random() * 3,
    sellStrength: Math.random() * 3,
  }
}
