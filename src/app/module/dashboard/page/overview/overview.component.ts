import { Component, OnInit } from '@angular/core'
import { DataService } from 'src/app/common/service/data.service'

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.styl'],
})
export class DashboardOverviewComponent implements OnInit {
  constructor(private readonly dataService: DataService) {}

  currencies$ = this.dataService.currencies()

  ngOnInit(): void {}
}
