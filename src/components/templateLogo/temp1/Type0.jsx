import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import IconsRoute from "../svgicons/IconsRoute";

const Type0 = () => {
  const { businessName, slogan, font, color, icon } = useStateContext();

  return (
    <>
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 500 500"
        enableBackground="new 0 0 500 500"
      >
        <g id="Layer_2" display="none">
          <rect
            x="105.6"
            y="105.6"
            display="inline"
            fill="none"
            stroke={color.stroke}
            strokeMiterlimit="10"
            width="288.8"
            height="288.8"
          />
        </g>
        <g id="Layer_1">
          <line
            fill="#FFFFFF"
            stroke={color.stroke}
            strokeWidth="3"
            strokeMiterlimit="10"
            x1="105.6"
            y1="240.4"
            x2="394.4"
            y2="240.4"
          />
          <line
            fill="#FFFFFF"
            stroke={color.stroke}
            strokeWidth="3"
            strokeMiterlimit="10"
            x1="167.1"
            y1="342.3"
            x2="332.9"
            y2="342.3"
          />
          <rect y="258.6" fill="none" width="500" height="49.7" />
          <text
            transform="matrix(1 0 0 1 178.2525 296.0108)"
            fill={color.text}
            fontFamily={font.text}
            fontSize="52.64"
            textAnchor="middle"
            x="14%"
          >
            {businessName}
          </text>
          <rect x="-2.3" y="315" fill="none" width="504.7" height="14.3" />
          <text
            transform="matrix(1 0 0 1 210.8032 324.3722)"
            fill={color.text}
            fontFamily={font.subtext}
            fontSize="13.16"
            letterSpacing="1"
            textAnchor="middle"
            x="7.5%"
          >
            {slogan}
          </text>

          {/* <rect
            x="230.1"
            y="166"
            transform="matrix(0.7071 0.7071 -0.7071 0.7071 204.6679 -122.3306)"
            fill={color.fill}
            stroke={color.stroke}
            strokeWidth="3"
            strokeMiterlimit="10"
            width="39.8"
            height="39.8"
          /> */}

          <IconsRoute name={icon ? icon : "Fire"} />
        </g>
      </svg>
    </>
  );
};

export default Type0;
