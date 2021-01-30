import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import * as pipe from 'rxjs/operators'
import { Currency } from '../model/class/currency'
import { Elasticity } from '../model/interface/elasticity'
import { WarnMocked } from '../util/dev'
import { randFraction } from '../util/random'

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

  @WarnMocked
  elasticity(currency: Currency): Observable<Elasticity[]> {
    return of([
      { positive: randFraction(), negative: randFraction() },
      { positive: randFraction(), negative: randFraction() },
      { positive: randFraction(), negative: randFraction() },
      { positive: randFraction(), negative: randFraction() },
      { positive: randFraction(), negative: randFraction() },
    ]).pipe(pipe.delay(300))
  }
}
