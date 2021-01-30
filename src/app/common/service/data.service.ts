import { Injectable } from '@angular/core'
import { interval, Observable, of } from 'rxjs'
import * as pipe from 'rxjs/operators'
import { Currency } from '../model/class/currency'
import { Elasticity, mockElasticity } from '../model/interface/elasticity'
import { mockVolatility, Volatility } from '../model/interface/volatility'
import { WarnMocked } from '../util/dev'

function mockNetworkDelay(): (...args: any[]) => any {
  return pipe.delay(30 + Math.random() * 250)
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  currencies(): Observable<Currency[]> {
    return of([
      new Currency('BTC', 'Bitcoin'),
      new Currency('LTC', 'Litecoin'),
      new Currency('ETH', 'Ethereum'),
    ])
  }

  // TODO: params for time ranges array?
  @WarnMocked
  elasticity(currency: Currency): Observable<Elasticity[]> {
    return interval(1000).pipe(
      mockNetworkDelay(),
      pipe.map(() => [
        mockElasticity(),
        mockElasticity(),
        mockElasticity(),
        mockElasticity(),
        mockElasticity(),
      ])
    )
  }

  @WarnMocked
  volatility(currency: Currency): Observable<Volatility> {
    return interval(2000).pipe(
      mockNetworkDelay(),
      pipe.map(() => mockVolatility())
    )
  }
}
