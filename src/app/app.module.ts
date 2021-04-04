import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AppRoutingModule } from "./app.routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Demo1Component } from "./features/routeAnimationSlideIn/demo1/demo1.component";
import { Demo2Component } from "./features/routeAnimationSlideIn/demo2/demo2.component";
import { StateChangeComponent } from "./features/state-change/state-change.component";
import { ButtonAnimationsComponent } from "./features/button-animations/button-animations.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    SidebarComponent,
    Demo1Component,
    Demo2Component,
    StateChangeComponent,
    ButtonAnimationsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
