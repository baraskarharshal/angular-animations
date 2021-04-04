import { Component, VERSION } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slideInAnimation } from "./animations/routeAnimations/slideIn";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
