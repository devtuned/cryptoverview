/**
 * Volatility
 * (i just named it like this, it's nothing official)
 *
 * Describes how much the market goes up and down in a short period of time
 */

export interface Volatility {
  /** Hz */
  buyFrequency: number
  /** Hz */
  sellFrequency: number
  /** volume as ratio to market cap */
  buyStrength: number
  /** volume as ratio to market cap */
  sellStrength: number
  /** sell to buy gap as ratio of price */
  margin: number
}

export function mockVolatility(): Volatility {
  return {
    buyFrequency: Math.random() * 15,
    sellFrequency: Math.random() * 15,
    buyStrength: Math.random() * 3,
    sellStrength: Math.random() * 3,
    margin: Math.random() / 33, // simulating up to 3%
  }
}
