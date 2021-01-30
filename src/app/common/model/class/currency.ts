export class Currency {
  imgSrc: string

  constructor(
    public readonly symbol: string,
    public readonly name: string,
    { imgSrc }: { imgSrc?: string } = {}
  ) {
    this.imgSrc = imgSrc ?? `${symbol.toUpperCase()}.svg` // TODO: not safe
  }
}
