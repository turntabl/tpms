import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./screens/admin/components/dashboard/dashboard.component";
import { DashboardComponent as Dev } from "./screens/developer/components/dashboard/dashboard.component";
import { CardComponent } from "./screens/admin/components/card/card.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HoursComponent } from "./screens/developer/components/hours/hours.component";
import { HourComponent } from "./screens/admin/components/hour/hour.component";
import { ProjectsComponent } from "./screens/admin/components/projects/projects.component";
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// Material Stuff
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from "@angular/material/chips";
import { AddprojectComponent } from './screens/admin/components/addproject/addproject.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Dev,
    CardComponent,
    HoursComponent,
    HourComponent,
    ProjectsComponent,
    AddprojectComponent
    
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    HttpClientModule
   
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
