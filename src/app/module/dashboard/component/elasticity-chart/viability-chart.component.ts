import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Currency } from 'src/app/common/model/class/currency'
import { Elasticity } from 'src/app/common/model/interface/elasticity'
import { DataService } from 'src/app/common/service/data.service'

@Component({
  selector: 'app-elasticity-chart',
  templateUrl: './elasticity-chart.component.html',
  styleUrls: ['./elasticity-chart.component.styl'],
})
export class ElasticityChartComponent implements OnInit {
  @Input() currency!: Currency
  elasticity$!: Observable<Elasticity[]>

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.elasticity$ = this.dataService.elasticity(this.currency)
  }
}
