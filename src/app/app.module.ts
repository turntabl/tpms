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

// Material Stuff
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from "@angular/material/chips";
import { DevelopersComponent } from "./screens/admin/components/developers/developers.component";
import { AssignedprojectsComponent } from "./screens/developer/components/assignedprojects/assignedprojects.component";
import { MatTableModule } from "@angular/material/table";
// import {MatFormFieldModule} from '@angular/material/form-field';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NavigationComponent } from "./screens/admin/navigation/navigation.component";
import { VerifyComponent } from "./screens/verify/verify.component";
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Dev,
    CardComponent,
    HoursComponent,
    HourComponent,
    ProjectsComponent,
    DevelopersComponent,
    AssignedprojectsComponent,
    NavigationComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTableModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
