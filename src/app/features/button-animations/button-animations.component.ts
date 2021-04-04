import { Component, OnInit } from "@angular/core";
import { btnAnimation } from "../../animations/btnAnimations";

@Component({
  selector: "app-button-animations",
  templateUrl: "./button-animations.component.html",
  styleUrls: ["./button-animations.component.css"],
  animations: [
    btnAnimation
    // animation triggers go here
  ]
})
export class ButtonAnimationsComponent implements OnInit {
  btn1State = 0;

  constructor() {}

  ngOnInit() {}

  onClickBtn1() {
    if (this.btn1State === 1) {
      return;
    }
    this.btn1State = 1;
    setTimeout(() => {
      this.btn1State = 0;
    }, 3000);
  }
}
