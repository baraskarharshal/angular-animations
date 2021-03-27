import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Demo1Component } from "./features/demo1/demo1.component";
import { Demo2Component } from "./features/demo2/demo2.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
