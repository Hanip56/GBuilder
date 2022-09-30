import React from "react";
import BuildingSvg from "./BuildingSvg";
import Calendar from "./Calendar";
import FireSvg from "./FireSvg";
import HomeSvg from "./HomeSvg";

const IconsRoute = ({ name }) => {
  if (name === "Home") {
    return <HomeSvg />;
  }
  if (name === "Calendar") {
    return <Calendar />;
  }
  if (name === "Fire") {
    return <FireSvg />;
  }
  if (name === "Building") {
    return <BuildingSvg />;
  }

  return;
};

export const iconsArray = [
  { name: "Building", el: <BuildingSvg /> },
  { name: "Calendar", el: <Calendar /> },
  { name: "Fire", el: <FireSvg /> },
  { name: "Home", el: <HomeSvg /> },
];

export default IconsRoute;
