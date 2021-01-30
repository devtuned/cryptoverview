// TODO: this code will later be used for generating components in
//       (?) Vue | React | Angular
//      - i'd like to try it out with MobX (mobx.js.org) to make
//        reactive components

export class Currency {
  imgSrc: string
  value?: number // may be loaded later

  constructor(
    public readonly symbol: string,
    { imgSrc }: { imgSrc?: string } = {}
  ) {
    this.imgSrc = imgSrc ?? `${symbol}.svg`
  }

  setDemoValues() {
    this.value = 34_429.1
  }
}
