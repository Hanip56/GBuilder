import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

const HomeSvg = () => {
  const { color } = useStateContext();
  const fill = color.fill;
  const stroke = color.stroke;
  return (
    <g>
      <path
        fill={fill}
        stroke={stroke}
        strokeWidth="5"
        strokeMiterlimit="10"
        d="M218.9,186.3v24.4c0,4.4,3.5,7.9,7.9,7.9h46.5
	c4.4,0,7.9-3.5,7.9-7.9v-24.5c0-2.1-0.8-4.1-2.3-5.6l-22.9-22.9c-3.1-3.1-8-3.1-11.1-0.1l-23.6,23
	C219.7,182.2,218.9,184.2,218.9,186.3z"
      />
      <path
        fill={fill}
        stroke={stroke}
        strokeWidth="5"
        strokeMiterlimit="10"
        d="M254.4,194h-8.8c-3.2,0-5.8,2.6-5.8,5.8v18.9
	h20.3v-18.9C260.2,196.6,257.6,194,254.4,194z"
      />
    </g>
  );
};

export default HomeSvg;
