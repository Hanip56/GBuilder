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
      <g id="Layer_2" display="none">
        <rect
          x="120"
          y="118.9"
          display="inline"
          fill={color.fill}
          stroke={color.stroke}
          strokeMiterlimit="10"
          width="260"
          height="260"
        />
      </g>
      <g id="Layer_3">
        <rect
          x="120"
          y="215.3"
          fill={color.fill}
          stroke={color.stroke}
          strokeWidth="3"
          strokeMiterlimit="10"
          width="260"
          height="34.7"
        />
        <rect
          x="120"
          y="250"
          fill={color.fill}
          stroke={color.stroke}
          strokeWidth="3"
          strokeMiterlimit="10"
          width="260"
          height="34.7"
        />
        <rect
          x="120"
          y="215.3"
          fill={color.fill}
          stroke={color.stroke}
          strokeWidth="3"
          strokeMiterlimit="10"
          width="34.5"
          height="34.5"
        />
        <text
          transform="matrix(1 0 0 1 130.3335 241.0002)"
          fontFamily={font.text}
          fontSize="24"
          textAnchor="middle"
          x="1.5%"
          fill={color.text}
        >
          {businessName.slice(0, 1)}
        </text>
        <rect x="154.8" y="223" fill="none" width="224.2" height="20.3" />
        <text
          transform="matrix(1 0 0 1 259.0929 240.0394)"
          fontFamily={font.text}
          fontSize="24"
          textAnchor="middle"
          x="1.5%"
          fill={color.text}
        >
          {businessName}
        </text>
        <rect x="120.6" y="258.2" fill="none" width="259.5" height="20.3" />
        <text
          transform="matrix(1 0 0 1 242.5096 275.2061)"
          fontFamily={font.subtext}
          fontSize="24"
          textAnchor="middle"
          x="1.5%"
          fill={color.text}
        >
          {slogan}
        </text>
      </g>
    </svg>
  );
};

export default Type0;
