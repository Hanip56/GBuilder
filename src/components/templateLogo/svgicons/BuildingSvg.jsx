import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

const BuildingSvg = () => {
  const { color } = useStateContext();
  const fill = color.fill;
  const stroke = color.stroke;

  return (
    <>
      <rect
        x="225.2"
        y="154.5"
        fill={fill}
        stroke={stroke}
        strokeWidth="5"
        strokeMiterlimit="10"
        width="49.6"
        height="64.4"
      />
      <g>
        <line
          stroke={stroke}
          fill={fill}
          x1="218.5"
          y1="218.9"
          x2="281.5"
          y2="218.9"
        />
        <g>
          <path
            fill={stroke}
            d="M218.5,221.4c21,0,42,0,63.1,0c3.2,0,3.2-5,0-5c-21,0-42,0-63.1,0C215.3,216.4,215.2,221.4,218.5,221.4L218.5,221.4z"
          />
        </g>
      </g>
      <rect
        x="243.3"
        y="198.2"
        fill={fill}
        stroke={stroke}
        strokeWidth="5"
        strokeMiterlimit="10"
        width="13.5"
        height="20.7"
      />
      <g>
        <g>
          <line fill={fill} x1="239" y1="167.8" x2="243.5" y2="167.8" />
          <g>
            <path
              fill={stroke}
              d="M239,170.3c1.5,0,3,0,4.5,0c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.5,0-3,0-4.5,0c-1.4,0-2.5,1.1-2.5,2.5
				C236.5,169.1,237.6,170.3,239,170.3L239,170.3z"
            />
          </g>
        </g>
        <g>
          <line
            fill={fill}
            stroke={stroke}
            x1="256.4"
            y1="167.8"
            x2="261"
            y2="167.8"
          />
          <g>
            <path
              fill={stroke}
              d="M256.4,170.3c1.5,0,3,0,4.5,0c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.5,0-3,0-4.5,0c-1.4,0-2.5,1.1-2.5,2.5
				C253.9,169.1,255.1,170.3,256.4,170.3L256.4,170.3z"
            />
          </g>
        </g>
        <g>
          <line fill={fill} x1="239" y1="182" x2="243.6" y2="182" />
          <g>
            <path
              fill={stroke}
              d="M239,184.5c1.5,0,3,0,4.5,0c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.5,0-3,0-4.5,0c-1.4,0-2.5,1.1-2.5,2.5
				C236.5,183.4,237.7,184.5,239,184.5L239,184.5z"
            />
          </g>
        </g>
        <g>
          <line fill={fill} x1="256.5" y1="182" x2="261" y2="182" />
          <g>
            <path
              stroke={stroke}
              fill={stroke}
              d="M256.5,184.5c1.5,0,3,0,4.5,0c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.5,0-3,0-4.5,0c-1.4,0-2.5,1.1-2.5,2.5
				C254,183.4,255.1,184.5,256.5,184.5L256.5,184.5z"
            />
          </g>
        </g>
      </g>
    </>
  );
};

export default BuildingSvg;
