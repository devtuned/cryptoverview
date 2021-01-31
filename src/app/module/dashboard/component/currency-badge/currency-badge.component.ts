import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { Currency } from 'src/app/common/model/class/currency'

@Component({
  selector: 'app-currency-badge',
  templateUrl: './currency-badge.component.html',
  styleUrls: ['./currency-badge.component.styl'],
})
export class CurrencyBadgeComponent implements OnInit {
  @Input() currency!: Currency

  @ViewChild('logo', { static: true })
  logo!: ElementRef<HTMLDivElement>

  constructor() {}

  ngOnInit(): void {
    this.logo.nativeElement.style.backgroundImage = `url(asset/crypto-icon/${this.currency.imgSrc})`
  }
}
