import { NgModule } from "@angular/core";
import { Routes, RouterModule, ROUTER_CONFIGURATION } from "@angular/router";
<<<<<<< HEAD
import { AppComponent } from "./app.component";
import { HourComponent } from "./screens/admin/components/hour/hour.component";
import { HoursComponent } from "./screens/developer/components/hours/hours.component";
=======
>>>>>>> a3b533f395b7209706dde3d243d8c80421f7c50b
import { ProjectsComponent } from "./screens/admin/components/projects/projects.component";
import { DevelopersComponent } from "./screens/admin/components/developers/developers.component";
import { AssignedprojectsComponent } from "./screens/developer/components/assignedprojects/assignedprojects.component";
import { VerifyComponent } from "./screens/verify/verify.component";
import { NavigationComponent } from "./screens/admin/navigation/navigation.component";
import { NavComponent } from "./screens/developer/nav/nav.component";
import { AreaComponent } from './screens/admin/components/area/area.component';
  

const routes: Routes = [
  { path: '', component: VerifyComponent },
  {
    path: "admin",
    component: NavigationComponent,
    children: [
      { path: "projects", component: ProjectsComponent },
      { path: "developer", component: DevelopersComponent },
<<<<<<< HEAD
      { path:"reports", component:AreaComponent}
=======
      {path:"reports", component:AreaComponent}
>>>>>>> a3b533f395b7209706dde3d243d8c80421f7c50b
    ]
  },
  {
    path: "developer",
    component: NavComponent,
    children: [
      { path: "projects", component: AssignedprojectsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
