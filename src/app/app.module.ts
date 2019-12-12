import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './screens/admin/components/dashboard/dashboard.component';
import { DashboardComponent as Dev } from "./screens/developer/components/dashboard/dashboard.component";
import { CardComponent } from './screens/admin/components/card/card.component';
import { HoursComponent } from './screens/developer/components/hours/hours.component';
import { HourComponent } from './screens/admin/components/hour/hour.component';
import { ProjectsComponent } from './screens/admin/components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Dev,
    CardComponent,
    HoursComponent,
    HourComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
