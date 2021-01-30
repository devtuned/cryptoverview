import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CurrencyBadgeComponent } from './component/currency-badge/currency-badge.component'
import { DashboardOverviewComponent } from './page/overview/overview.component'

@NgModule({
  declarations: [DashboardOverviewComponent, CurrencyBadgeComponent],
  imports: [CommonModule],
  exports: [],
})
export class DashboardModule {}
