import { NgModule } from "@angular/core";
import { Routes, RouterModule, ROUTER_CONFIGURATION } from "@angular/router";
import { ProjectsComponent } from "./screens/admin/components/projects/projects.component";
import { DevelopersComponent } from "./screens/admin/components/developers/developers.component";
import { VerifyComponent } from "./screens/verify/verify.component";
import { NavigationComponent } from "./screens/admin/navigation/navigation.component";
import { NavComponent } from "./screens/developer/nav/nav.component";
import { AreaComponent } from './screens/admin/components/area/area.component';
import { TimeentryComponent } from './screens/developer/components/timeentry/timeentry.component';

const routes: Routes = [
  { path: '', component: VerifyComponent },
  {
    path: "admin",
    component: NavigationComponent,
    children: [
      { path: "projects", component: ProjectsComponent },
      { path: "developer", component: DevelopersComponent },
      {path:"reports", component:AreaComponent}
    ]
  },
  {
    path: "developer",
    component: NavComponent,
    children: [
      { path: "projects", component: TimeentryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
