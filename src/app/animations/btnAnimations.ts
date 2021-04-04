import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

export const btnAnimation = trigger("btnAnimation", [
  // ...
  state(
    "0",
    style({
      backgroundColor: "blue"
    })
  ),
  state(
    "1",
    style({
      backgroundColor: "green"
    })
  ),
  transition("0 <=> 1", [animate("300ms")])
  // transition("void => 1", [
  //   style({ position: "relative" }),
  //   query(":enter", [
  //     style({
  //       position: "absolute",
  //       top: 0,
  //       left: 0
  //     })
  //   ]),
  //   // query finds component which is entering and sets it left position to -100.
  //   query(":enter", [style({ left: "-100%" })]),
  //   // query(":leave", animateChild()),
  //   query(":enter", [animate("500ms ease-out", style({ left: "0%" }))])
  // ])
]);
