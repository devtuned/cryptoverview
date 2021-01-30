import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { of } from 'rxjs'
import { Currency } from 'src/app/common/model/class/currency'
import { Elasticity } from 'src/app/common/model/interface/elasticity'
import { DataService } from 'src/app/common/service/data.service'

@Component({
  selector: 'app-elasticity-chart',
  templateUrl: './elasticity-chart.component.html',
  styleUrls: ['./elasticity-chart.component.styl'],
})
export class ElasticityChartComponent implements OnInit, OnChanges {
  @Input() currency!: Currency
  elasticity$ = of([] as Elasticity[])

  constructor(private readonly dataService: DataService) {}

  ngOnChanges(): void {
    this.elasticity$ = this.dataService.elasticity(this.currency)
  }

  ngOnInit(): void {}
}
