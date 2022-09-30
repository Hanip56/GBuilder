import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import Type0 from "./Type0";

const Temp6Route = () => {
  const { type } = useStateContext();

  if (type === "type0") {
    return <Type0 />;
  }
  return;
};

export const temp6Layouts = [<Type0 />];

export default Temp6Route;
