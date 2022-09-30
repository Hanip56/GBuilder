import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import Type0 from "./Type0";

const Temp5Route = () => {
  const { type } = useStateContext();

  if (type === "type0") {
    return <Type0 />;
  }
  return;
};

export const temp5Layouts = [<Type0 />];

export default Temp5Route;
