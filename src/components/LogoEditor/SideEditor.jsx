import React, { useState } from "react";
import { listInfo } from "../../constants/infos";
import { useStateContext } from "../../contexts/ContextProvider";
import EditorRoute from "./EditorRoute";

const SideEditor = () => {
  const [editorRoute, setEditorRoute] = useState("INFO");
  const { templateId } = useStateContext();

  return (
    <div className="flex">
      <div className="w-fit h-screen bg-black text-white">
        <ul className="flex flex-col items-center">
          {listInfo.map((info, idx) => {
            if (info.title === "ICONS" && templateId.iconEdit === undefined) {
              return null;
            }

            return (
              <li
                key={idx}
                className={`p-4 w-20 ${
                  editorRoute === info.title.toUpperCase() && "bg-white/20"
                } hover:bg-white/20 transition-all flex flex-col gap-2 justify-center items-center`}
                onClick={() => setEditorRoute(info.title.toUpperCase())}
              >
                <p className="text-xl">{info.icon}</p>
                <p className="uppercase text-xs font-semibold">{info.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-72 min-h-screen shadow-2xl">
        <EditorRoute route={editorRoute} />
      </div>
    </div>
  );
};

export default SideEditor;
