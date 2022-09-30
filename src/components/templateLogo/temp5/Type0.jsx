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
        <polyline
          fill={color.fill}
          stroke={color.stroke}
          strokeWidth="3"
          strokeMiterlimit="10"
          points="160,228 250,138 340,228"
          className="-translate-y-2"
        />
        <polyline
          fill={color.fill}
          stroke={color.stroke}
          strokeWidth="3"
          strokeMiterlimit="10"
          points="340,272 250,362 160,272"
          className="translate-y-2"
        />
        <rect x="120.5" y="228" fill="none" width="259.5" height="32.5" />
        <text
          transform="matrix(1 0 0 1 239.8184 250.7197)"
          fontFamily={font.text}
          fontSize="32"
          textAnchor="middle"
          fill={color.text}
          x="2.5%"
        >
          {businessName}
        </text>
        <rect x="120.5" y="259.5" fill="none" width="259.5" height="32.5" />
        <text
          transform="matrix(1 0 0 1 244.3818 272.2798)"
          fontFamily={font.subtext}
          fontSize="18"
          textAnchor="middle"
          fill={color.text}
          x="1%"
        >
          {slogan}
        </text>
        {/* <g>
          <g>
            <rect
              x="231.8"
              y="193"
              transform="matrix(0.7071 0.7071 -0.7071 0.7071 211.4627 -119.5161)"
              width="36.5"
              height="5"
              stroke={color.stroke}
              strokeMiterlimit="10"
              fill={color.stroke}
            />
            <rect
              x="231.8"
              y="193"
              transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 565.0161 156.9627)"
              width="36.5"
              height="5"
              stroke={color.stroke}
              strokeMiterlimit="10"
              fill={color.stroke}
            />
          </g>
          <polygon
            points="257.8,180.8 266.8,189.9 261.8,195 252.6,185.9"
            stroke={color.stroke}
            strokeMiterlimit="10"
            fill={color.stroke}
          />
          <polygon
            points="248.1,185.5 239,194.6 234,189.5 243.1,180.4"
            stroke={color.stroke}
            strokeMiterlimit="10"
            fill={color.stroke}
          />
        </g> */}
      </g>
    </svg>
  );
};

export default Type0;
