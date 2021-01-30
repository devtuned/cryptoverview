/**
 ** Elasticity shows you how elastic currency A is compared to currency B
 **  in both positive and negative direction.
 **  (this is my own mind child, can't look it up)
 *
 * The value is logarithmic and capped at 1.0 because at that point
 *  it won't make a difference anymore; there's a higher chance this is
 *  caused by an outlier than by a coin rising >10x as fast as another one
 *  -- but it does happen 🚀️ --
 *
 * Example values:
 *  0.50 => if A rises 10%, B rises 10%
 *  1.00 => if A rises 10%, B rises 100% - any value higher than
 *  0.25 => ... (TODO: same logarithmic logic? is that useful?)
 *
 * The UI will show this in multiple time ranges so that you can see whether
 *  elasticity is increasing or decreasing
 */

export interface Elasticity {
  positive: number // [0, 1]
  negative: number // [0, 1]
}
