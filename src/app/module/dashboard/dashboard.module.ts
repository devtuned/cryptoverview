import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CurrencyBadgeComponent } from './component/currency-badge/currency-badge.component'
import { ElasticityChartComponent } from './component/elasticity-chart/viability-chart.component'
import { DashboardOverviewComponent } from './page/overview/overview.component'

@NgModule({
  declarations: [
    // Pages
    DashboardOverviewComponent,
    // Components
    CurrencyBadgeComponent,
    ElasticityChartComponent,
  ],
  imports: [CommonModule],
  exports: [],
})
export class DashboardModule {}
