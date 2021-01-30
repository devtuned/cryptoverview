import { Component, OnInit } from '@angular/core'
import { Currency } from 'src/app/common/model/class/currency'

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.styl'],
})
export class DashboardOverviewComponent implements OnInit {
  demoCurrency = new Currency('BTC')

  constructor() {}

  ngOnInit(): void {}
}
