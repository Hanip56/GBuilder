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
      <path
        fill={color.fill}
        stroke={color?.stroke}
        strokeWidth="5"
        strokeMiterlimit="10"
        d="M368.7,293.1c-17.6,48.5-64.1,83.2-118.7,83.2
	s-101.1-34.6-118.7-83.2H368.7z"
      />
      <path
        fill={color.fill}
        stroke={color?.stroke}
        strokeWidth="5"
        strokeMiterlimit="10"
        d="M131.3,206.9c17.6-48.5,64.1-83.1,118.7-83.1
	s101.1,34.6,118.7,83.1H131.3z"
      />
      <g>
        <path
          fill={color?.stroke}
          d="M250,169.1c28.8,0,54,15.1,68.4,37.8h19.5c-16-32.4-49.3-54.8-87.8-54.8s-71.9,22.4-87.8,54.8h19.5
		C196,184.2,221.3,169.1,250,169.1z M250,330.8c-28.8,0-54-15.1-68.4-37.8h-19.5c16,32.4,49.3,54.8,87.8,54.8s71.9-22.3,87.8-54.8
		h-19.5C304,315.8,278.8,330.8,250,330.8z"
        />
      </g>
      <rect x="-17.1" y="220.8" fill="none" width="534.2" height="34.9" />
      <text
        transform="matrix(1 0 0 1 233.0917 248.8906)"
        fontFamily={font.text}
        fontSize="40.5957"
        textAnchor="middle"
        x="3.2%"
        fill={color.text}
      >
        {businessName}
      </text>
      <rect x="-17.1" y="263.2" fill="none" width="534.2" height="34.9" />
      <text
        transform="matrix(1 0 0 1 240.8041 275.3105)"
        fontFamily={font.subtext}
        fontSize="17.0929"
        textAnchor="middle"
        x="2%"
        fill={color.text}
      >
        {slogan}
      </text>
    </svg>
  );
};

export default Type0;
