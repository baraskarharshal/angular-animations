import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger
} from "@angular/animations";

// :enter is an alias for void => *
// :leave is an alias for * => void

export const slideInAnimation = trigger("routeAnimations", [
  // transition defined for two way
  transition("HomePage <=> AboutPage", [
    // set relative position of current element
    style({ position: "relative" }),
    // :enter and :leave represents HomePage or AboutPage
    // query finds these child html elements inside current html element and assign given styles to them. In this case, both demo1 and demo2 components.
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    // query finds component which is entering and sets it left position to -100.
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    // group runs all queries in parallel
    group([
      // leaving component is going out
      query(":leave", [animate("500ms ease-out", style({ left: "100%" }))]),
      // entering component is coming in
      query(":enter", [animate("500ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ]),
  transition("* <=> FilterPage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("500ms ease-out", style({ left: "100%" }))]),
      query(":enter", [animate("500ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ])
]);
