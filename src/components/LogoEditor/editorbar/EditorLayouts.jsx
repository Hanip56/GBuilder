import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

const EditorLayouts = () => {
  const { templateId, setType, color } = useStateContext();
  return (
    <div className="flex flex-wrap p-4 gap-2">
      {templateId.layouts.map((el, idx) => (
        <div
          key={idx}
          className="w-[7.55rem]"
          style={{ backgroundColor: color.bg }}
          onClick={() => setType(`type${idx}`)}
        >
          {el}
        </div>
      ))}
    </div>
  );
};

export default EditorLayouts;
