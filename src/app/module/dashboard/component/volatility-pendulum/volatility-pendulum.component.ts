import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Currency } from 'src/app/common/model/class/currency'
import { Volatility } from 'src/app/common/model/interface/volatility'
import { DataService } from 'src/app/common/service/data.service'

@Component({
  selector: 'app-volatility-pendulum',
  templateUrl: './volatility-pendulum.component.html',
  styleUrls: ['./volatility-pendulum.component.styl'],
})
export class VolatilityPendulumComponent implements OnInit {
  @Input() currency!: Currency

  volatility$!: Observable<Volatility>

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.volatility$ = this.dataService.volatility(this.currency)
  }
}
