import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import { HexColorPicker } from "react-colorful";
import { useState } from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

const EditorFonts = () => {
  const { color, setColor } = useStateContext();
  const [showBgOption, setShowBgOption] = useState(true);
  const [showTextOption, setShowTextOption] = useState(false);
  const [showFillOption, setShowFillOption] = useState(false);
  const [showStrokeOption, setShowStrokeOption] = useState(false);

  const colorOptionsArray = [
    {
      title: "Background Color",
      show: showBgOption,
      setShow: () => setShowBgOption((prev) => !prev),
      color: color.bg,
      setColor: (e) => setColor((prev) => ({ ...prev, bg: e })),
    },
    {
      title: "Text",
      show: showTextOption,
      setShow: () => setShowTextOption((prev) => !prev),
      color: color.text,
      setColor: (e) => setColor((prev) => ({ ...prev, text: e })),
    },
    {
      title: "Fill",
      show: showFillOption,
      setShow: () => setShowFillOption((prev) => !prev),
      color: color.fill,
      setColor: (e) => setColor((prev) => ({ ...prev, fill: e })),
    },
    {
      title: "Stroke",
      show: showStrokeOption,
      setShow: () => setShowStrokeOption((prev) => !prev),
      color: color.stroke,
      setColor: (e) => setColor((prev) => ({ ...prev, stroke: e })),
    },
  ];

  return (
    <div className="p-4 py-8 flex flex-col gap-y-2 h-screen overflow-scroll">
      {colorOptionsArray.map((el, idx) => (
        <div
          key={idx + el.title}
          className={`flex flex-col gap-y-2 hover:bg-gray-200 rounded-md ${
            el.show ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          <p
            className="text-lg flex justify-between items-center cursor-pointer p-4"
            onClick={el.setShow}
          >
            {el.title}{" "}
            {el.show ? (
              <BsArrowUpShort className="text-xl" />
            ) : (
              <BsArrowDownShort className="text-xl" />
            )}
          </p>
          {el.show && (
            <div className="w-full p-4">
              <div className="w-full flex justify-center mb-4">
                <HexColorPicker color={el.color} onChange={el.setColor} />
              </div>
              <div className="flex gap-x-2">
                <input
                  value={el.color}
                  onChange={(e) => el.setColor(e.target.value)}
                  className="w-24 text-sm rounded-md p-2 border border-black outline-none text-center"
                ></input>
                <button
                  type="button"
                  onClick={() => el.setColor("transparent")}
                  className="flex-1 py-2 px-4 outline-none bg-sky-400 font-bold text-white text-xs"
                >
                  <p className="text-xs">click for</p>
                  Transparent
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EditorFonts;
