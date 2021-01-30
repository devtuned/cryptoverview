import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { DashboardOverviewComponent } from 'src/app/module/dashboard/page/overview/overview.component'

const routes: Routes = [{ path: '', component: DashboardOverviewComponent }]

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
