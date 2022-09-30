import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import Type0 from "./Type0";
import Type1 from "./Type1";

const Temp1Route = () => {
  const { type } = useStateContext();

  if (type === "type0") {
    return <Type0 />;
  }
  if (type === "type1") {
    return <Type1 />;
  }
  return;
};

export const temp1Layouts = [<Type0 />, <Type1 />];

export default Temp1Route;
