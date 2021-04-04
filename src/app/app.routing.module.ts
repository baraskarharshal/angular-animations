import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Demo1Component } from "./features/routeAnimationSlideIn/demo1/demo1.component";
import { Demo2Component } from "./features/routeAnimationSlideIn/demo2/demo2.component";
import { StateChangeComponent } from "./features/state-change/state-change.component";

const routes: Routes = [
  {
    path: "demo1",
    component: Demo1Component,
    data: { animation: "HomePage" }
  },
  {
    path: "demo2",
    component: Demo2Component,
    data: { animation: "AboutPage" }
  },
  {
    path: "basicStateChangeAnimation",
    component: StateChangeComponent,
    data: { animation: "AboutPage" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
