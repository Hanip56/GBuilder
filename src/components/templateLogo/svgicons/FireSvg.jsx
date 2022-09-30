import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

const FireSvg = () => {
  const { color } = useStateContext();
  const fill = color.fill;
  const stroke = color.stroke;
  return (
    <path
      fill={fill}
      stroke={stroke}
      strokeWidth="5"
      strokeMiterlimit="10"
      d="M231.9,214c0,0-21.6-20.8-1.9-42.4
	s16.3-31.2,16.3-31.2s18.8,8.9,12.2,31.6c-6.5,22.7,15.3,13.1,15.3,4.6s16.2,27.7-13.5,41.6c0,0-20.4-11.2-19.3-28.5
	C241.1,189.7,231.9,190.1,231.9,214z"
    />
  );
};

export default FireSvg;
