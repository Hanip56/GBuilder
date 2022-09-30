import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import { iconsArray } from "../../templateLogo/svgicons/IconsRoute";

const EditorIcons = () => {
  const { setIcon } = useStateContext();
  return (
    <div className="flex flex-wrap p-4 gap-2">
      {iconsArray.map((el, idx) => (
        <div
          key={idx}
          className="w-[7.55rem] hover:bg-black/5 cursor-pointer"
          onClick={() => setIcon(el.name)}
        >
          <svg
            x="0px"
            y="0px"
            width="100%"
            height="100%"
            viewBox="0 0 500 500"
            enableBackground="new 0 0 500 500"
          >
            {el.el}
          </svg>
        </div>
      ))}
    </div>
  );
};

export default EditorIcons;
