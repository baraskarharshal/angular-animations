import { Component, OnInit } from "@angular/core";
import { basicStateChangeAnimation } from "../../animations/basicStateChangeAnimation";

@Component({
  selector: "app-state-change",
  templateUrl: "./state-change.component.html",
  styleUrls: ["./state-change.component.css"],
  animations: [
    basicStateChangeAnimation
    // animation triggers go here
  ]
})
export class StateChangeComponent implements OnInit {
  isOpen = true;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
