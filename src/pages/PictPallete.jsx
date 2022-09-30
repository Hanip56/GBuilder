import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { palletesArray } from "../constants/infos";
import { motion } from "framer-motion";
import { swipeVariants } from "../utils/variants";

const PickPallete = () => {
  const { setColor } = useStateContext();
  const navigate = useNavigate();

  const handleClick = (el) => {
    const colorData = {
      bg: el.backgroundColor,
      fill: el.fill,
      stroke: el.stroke,
      text: el.text,
    };
    setColor(colorData);
    localStorage.setItem("@gbuilder_color", JSON.stringify(colorData));
  };

  return (
    <motion.div
      variants={swipeVariants}
      initial="offscreen"
      animate="onscreen"
      className="w-screen h-screen flex justify-center items-center"
    >
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-12">Pick Pallete</h1>
        <div className="flex flex-wrap gap-2 max-w-3xl">
          {palletesArray.map((el, idx) => (
            <Link to="/logo-maker/pick-template" key={idx}>
              <div
                onClick={() => handleClick(el)}
                className="w-56 h-56 overflow-hidden shadow-lg bg-white hover:shadow-xl rounded-lg flex flex-col justify-center items-center"
              >
                <div
                  className="w-full h-24 flex-1"
                  style={{ backgroundColor: el.backgroundColor }}
                ></div>
                <div
                  className="w-full flex-1"
                  style={{ backgroundColor: el.fill }}
                ></div>
                <div
                  className="w-full flex-1"
                  style={{ backgroundColor: el.stroke }}
                ></div>
                <div
                  className="w-full flex-1"
                  style={{ backgroundColor: el.text }}
                ></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PickPallete;
