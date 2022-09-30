import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Temp1, Temp2, Temp3, Temp4, Temp5, Temp6 } from "../templateLogo";

const TemplateRoute = () => {
  const { templateId } = useStateContext();

  if (templateId.name === "temp1") {
    return <Temp1 />;
  }
  if (templateId.name === "temp2") {
    return <Temp2 />;
  }
  if (templateId.name === "temp3") {
    return <Temp3 />;
  }
  if (templateId.name === "temp4") {
    return <Temp4 />;
  }
  if (templateId.name === "temp5") {
    return <Temp5 />;
  }
  if (templateId.name === "temp6") {
    return <Temp6 />;
  }

  return;
};

export default TemplateRoute;
