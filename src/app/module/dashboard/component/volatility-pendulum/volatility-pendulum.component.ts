import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { Observable } from 'rxjs'
import { Currency } from 'src/app/common/model/class/currency'
import { Volatility } from 'src/app/common/model/interface/volatility'
import { DataService } from 'src/app/common/service/data.service'
import { SelfCleaningComponent } from 'src/app/common/util/dev'

@Component({
  selector: 'app-volatility-pendulum',
  templateUrl: './volatility-pendulum.component.html',
  styleUrls: ['./volatility-pendulum.component.styl'],
})
export class VolatilityPendulumComponent
  extends SelfCleaningComponent
  implements OnInit {
  @Input() currency!: Currency

  @ViewChild('pendulum', { static: true })
  pendulumRef!: ElementRef<HTMLDivElement>

  volatility$!: Observable<Volatility>

  constructor(private readonly dataService: DataService) {
    super()
  }

  ngOnInit(): void {
    super.ngOnInit()
    this.subscribe(this.dataService.volatility(this.currency), volatility =>
      this.configureAnimation(volatility)
    )
  }

  configureAnimation(volatility: Volatility): void {
    const relBuyStrength =
      volatility.buyStrength /
      (volatility.buyStrength + volatility.sellStrength)
    const relSellStrength = 1 - relBuyStrength
    const relMargin = 1 / Math.abs(Math.log10(volatility.margin))

    const buyLimit = 0.5 + relMargin * relBuyStrength // too low
    const sellLimit = 0.5 - relMargin * relBuyStrength // num too small
    const buySaturation = volatility.buyStrength // TODO
    const sellSaturation = volatility.sellStrength // TODO
    const orderPeriod =
      1 / volatility.buyFrequency + 1 / volatility.sellFrequency

    const el = this.pendulumRef.nativeElement
    el.style.setProperty('--pos-a', `${sellLimit * 100}%`)
    el.style.setProperty('--pos-b', `${buyLimit * 100}%`)
    el.style.setProperty('--spin-period', `${orderPeriod}s`)
  }
}
