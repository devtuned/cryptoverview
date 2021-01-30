import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DashboardModule } from '../module/dashboard/dashboard.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './page/app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}