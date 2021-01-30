import { Component, Input, OnInit } from '@angular/core'
import { Currency } from 'src/app/common/model/class/currency'

@Component({
  selector: 'app-currency-badge',
  templateUrl: './currency-badge.component.html',
  styleUrls: ['./currency-badge.component.styl'],
})
export class CurrencyBadgeComponent implements OnInit {
  @Input() currency!: Currency

  constructor() {}

  ngOnInit(): void {}
}
