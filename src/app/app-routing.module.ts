import { NgModule } from "@angular/core";
import { Routes, RouterModule, ROUTER_CONFIGURATION } from "@angular/router";
import { ProjectsComponent } from "./screens/admin/components/projects/projects.component";
import { DevelopersComponent } from "./screens/admin/components/developers/developers.component";
import { VerifyComponent } from "./screens/verify/verify.component";
import { NavigationComponent as adminNavigation } from "./screens/admin/navigation/navigation.component";
import { NavComponent as developerNavigation} from "./screens/developer/nav/nav.component";
import { TimeentryComponent } from './screens/developer/components/timeentry/timeentry.component';
import { ReportComponent } from './screens/admin/components/report/report.component';

const routes: Routes = [
  { path: '', component: VerifyComponent },
  {
    path: "admin",
    component: adminNavigation ,
    children: [
      { path: "projects", component: ProjectsComponent },
      { path: "developer", component: DevelopersComponent },
      {path:"reports", component:ReportComponent}
    ]
  },
  {
    path: "developer",
    component: developerNavigation,
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
