import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

const Type0 = () => {
  const { businessName, slogan, font, color } = useStateContext();

  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 500 500"
      enableBackground="new 0 0 500 500"
    >
      <polygon
        fill={color.fill}
        stroke={color.stroke}
        strokeWidth="5"
        strokeMiterlimit="10"
        points="250,119 262.3,156.8 302,156.8 269.9,180.1 
	282.1,217.9 250,194.5 217.9,217.9 230.1,180.1 198,156.8 237.7,156.8 "
      />
      <rect y="257.2" fill="none" width="500" height="56.4" />
      <text
        transform="matrix(1 0 0 1 228.4688 304.0928)"
        fontFamily={font.text}
        fontSize="66.048"
        textAnchor="middle"
        x="4%"
        fill={color.text}
      >
        {businessName}
      </text>
      <rect y="324.6" fill="none" width="500" height="18.4" />
      <text
        transform="matrix(1 0 0 1 244.6172 336.3467)"
        fontFamily={font.subtext}
        fontSize="16.512"
        textAnchor="middle"
        x=".7%"
        fill={color.text}
      >
        {slogan}
      </text>
    </svg>
  );
};

export default Type0;
