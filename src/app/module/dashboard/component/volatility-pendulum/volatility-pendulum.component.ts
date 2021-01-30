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
  animationState = {
    x: 0, // position (CSS: left)
    a: 0, // acceleration (CSS: transition)
    ω: 0, // spinfrequency (CSS: animation duration)
  }
  animationConfig = {
    buySaturation: 0.5,
    sellSaturation: 0.5,
    buyLimit: 0,
    sellLimit: 0,
  }

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
    this.animationConfig = {
      ...this.animationConfig,
      buyLimit: 0.5 + relMargin * relBuyStrength, // too low
      sellLimit: 0.5 - relMargin * relBuyStrength, // num too small
      buySaturation: volatility.buyStrength, // TODO
      sellSaturation: volatility.sellStrength, // TODO
    }
  }

  animate(): void {
    if (!this.componentIsInitialized) {
      return
    }

    const el = this.pendulumRef.nativeElement
    // TODO: create CSS keyframe rules
  }
}
