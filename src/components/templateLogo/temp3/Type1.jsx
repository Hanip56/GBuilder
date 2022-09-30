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
      <polygon
        fill={color.fill}
        stroke={color.stroke}
        strokeWidth="5"
        strokeMiterlimit="10"
        points="132,204.6 141.8,234.6 173.3,234.6 
	147.8,253.2 157.6,283.2 132,264.6 106.4,283.2 116.2,253.2 90.7,234.6 122.2,234.6 "
      />
      <rect x="208.8" y="215.7" fill="none" width="289.7" height="56.4" />
      <text
        transform="matrix(1 0 0 1 208.8333 262.566)"
        fontFamily="'MyriadPro-Regular'"
        fontSize="66.048"
        fill={color.text}
      >
        {businessName}
      </text>
      <rect x="212.2" y="277.1" fill="none" width="288" height="18.4" />
      <text
        transform="matrix(1 0 0 1 212.1507 288.7913)"
        fontFamily="'MyriadPro-Regular'"
        fontSize="16.512"
        fill={color.text}
      >
        {slogan}
      </text>
    </svg>
  );
};

export default Type1;
