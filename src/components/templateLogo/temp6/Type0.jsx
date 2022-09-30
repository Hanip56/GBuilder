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
          fill="#FFFFFF"
          stroke={color.stroke}
          strokeMiterlimit="10"
          width="260"
          height="260"
        />
      </g>
      <g id="Layer_3">
        <rect
          x="126.4"
          y="215.9"
          width="58.9"
          height="58.9"
          fill={color.fill}
          stroke={color.stroke}
          strokeMiterlimit="10"
        />
        <text
          fill={color.text}
          transform="matrix(1 0 0 1 205.3101 249.2115)"
          fontFamily={font.text}
          fontSize="43.7953"
        >
          {businessName}
        </text>
        <text
          fill={color.text}
          transform="matrix(1 0 0 1 207.1355 270.6533)"
          fontFamily={font.text}
          fontSize="16.4232"
        >
          {slogan}
        </text>
        <text
          transform="matrix(1 0 0 1 142.0122 259.0195)"
          fill={color.bg}
          fontFamily={font.text}
          fontSize="43.7953"
          fontWeight="500"
          x={businessName.slice(0, 1) === "M" ? "-.9%" : "-.28%"}
          y=".28%"
          stroke={color.stroke}
          strokeMiterlimit="10"
        >
          {businessName.slice(0, 1)}
        </text>
        <rect
          x="120"
          y="209.5"
          fill="none"
          stroke={color.stroke}
          strokeMiterlimit="10"
          width="71.6"
          height="71.6"
        />
      </g>
    </svg>
  );
};

export default Type0;
