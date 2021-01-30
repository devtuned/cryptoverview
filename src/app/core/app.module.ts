import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DashboardModule } from '../module/dashboard/dashboard.module'
import { AppComponent } from './page/app.component'
import { AppRoutingModule } from './routing/app-routing.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,

    // App modules
    AppRoutingModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
