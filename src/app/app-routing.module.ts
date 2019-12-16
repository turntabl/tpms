import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DashboardComponent as D } from "./screens/admin/components/dashboard/dashboard.component";
import { DashboardComponent } from "./screens/developer/components/dashboard/dashboard.component";
import { HourComponent } from "./screens/admin/components/hour/hour.component";
import { HoursComponent } from "./screens/developer/components/hours/hours.component";
import { ProjectsComponent } from "./screens/admin/components/projects/projects.component";
import { DevelopersComponent } from "./screens/admin/components/developers/developers.component";
import { AssignedprojectsComponent } from "./screens/developer/components/assignedprojects/assignedprojects.component";
import { VerifyComponent } from "./screens/verify/verify.component";
import { NavigationComponent } from "./screens/admin/navigation/navigation.component";

const routes: Routes = [
  // { path: 'home', component:AppComponent},
  // { path: 'admin/:name', component:D},
  {
    path: "admin",
    component: NavigationComponent,
    children: [{ path: "pro/:name", component: D }]
  },

  { path: "verify/:name", component: VerifyComponent },
  { path: "developer", component: DashboardComponent },
  // {path:'', redirectTo:'verify', pathMatch:'full'},
  { path: "admin/hour", component: HourComponent },
  { path: "developer/hour", component: HoursComponent },
  { path: "admin/projects", component: ProjectsComponent },
  { path: "admin/developer", component: DevelopersComponent },
  { path: "developer/projects", component: AssignedprojectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
