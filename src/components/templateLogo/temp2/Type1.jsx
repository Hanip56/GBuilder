import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

const Type1 = () => {
  const { businessName, slogan, font, color } = useStateContext();

  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 500 500"
      enableBackground="new 0 0 500 500"
    >
      <circle
        fill={color.fill}
        stroke={color.stroke}
        strokeWidth="5"
        strokeMiterlimit="10"
        cx="250"
        cy="250"
        r="126.2"
      />
      <circle
        fill={color.fill}
        stroke={color.stroke}
        strokeWidth="17"
        strokeMiterlimit="10"
        cx="250"
        cy="250"
        r="89.3"
      />
      <rect x="-17.1" y="220.8" fill="none" width="534.2" height="34.9" />
      <text
        transform="matrix(1 0 0 1 239.5468 248.8906)"
        fontFamily={font.text}
        fontSize="40.5957"
        textAnchor="middle"
        x="2%"
        fill={color.text}
      >
        {businessName}
      </text>
      <rect x="-17.1" y="263.2" fill="none" width="534.2" height="34.9" />
      <text
        transform="matrix(1 0 0 1 244.4277 275.3105)"
        fontFamily={font.subtext}
        fontSize="17.0929"
        textAnchor="middle"
        x="1%"
        fill={color.text}
      >
        {slogan}
      </text>
    </svg>
  );
};

export default Type1;
