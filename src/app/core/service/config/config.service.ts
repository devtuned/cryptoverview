import { Injectable } from '@angular/core'
import { environment as CFG } from 'src/environment/environment'

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly raw

  constructor() {
    this.raw = CFG
  }

  get isProduction(): Boolean {
    return this.raw.production
  }
}
