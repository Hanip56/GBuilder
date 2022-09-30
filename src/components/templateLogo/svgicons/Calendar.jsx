import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

const Calendar = () => {
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
        d="M274.1,219.1h-48.2c-3.9,0-7-3.2-7-7v-36.2
			c0-3.9,3.2-7,7-7h48.2c3.9,0,7,3.2,7,7V212C281.1,215.9,278,219.1,274.1,219.1z"
      />
      <line
        fill={fill}
        stroke={stroke}
        strokeWidth="5"
        strokeMiterlimit="10"
        x1="218.9"
        y1="185.1"
        x2="281.1"
        y2="185.1"
      />
      <g>
        <g>
          <line fill={fill} x1="232" y1="163.7" x2="232" y2="173.7" />
          <g>
            <path
              fill={stroke}
              d="M229.5,163.7c0,3.3,0,6.7,0,10c0,3.2,5,3.2,5,0c0-3.3,0-6.7,0-10C234.5,160.5,229.5,160.5,229.5,163.7L229.5,163.7z"
            />
          </g>
        </g>
        <g>
          <line fill={fill} x1="268" y1="163.7" x2="268" y2="173.7" />
          <g>
            <path
              fill={stroke}
              d="M265.5,163.7c0,3.3,0,6.7,0,10c0,3.2,5,3.2,5,0c0-3.3,0-6.7,0-10C270.5,160.5,265.5,160.5,265.5,163.7L265.5,163.7z"
            />
          </g>
        </g>
      </g>
    </g>
  );
};

export default Calendar;
