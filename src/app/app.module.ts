import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AppRoutingModule } from "./app.routing.module";
import { Demo1Component } from "./features/demo1/demo1.component";
import { Demo2Component } from "./features/demo2/demo2.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SidebarComponent,
    Demo1Component,
    Demo2Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
