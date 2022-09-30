import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

const EditorFonts = () => {
  const { font, setFont } = useStateContext();

  console.log(font);

  const fontsArray = [
    "Roboto",
    "Inter",
    "Open Sans",
    "Bebas Neue",
    "Amatic Sc",
  ];

  return (
    <div className="p-4 py-8 flex flex-col gap-y-4">
      <h3 className="text-2xl font-semibold">Font Family</h3>
      <div className="flex gap-x-4">
        <label htmlFor="fftext">logo name :</label>
        <select
          id="fftext"
          className="bg-gray-100"
          value={font.text}
          onChange={(e) =>
            setFont((prev) => ({ ...prev, text: e.target.value }))
          }
        >
          {fontsArray.map((el, idx) => (
            <option key={idx} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-x-4">
        <label htmlFor="ffsubtext">slogan :</label>
        <select
          id="ffsubtext"
          className="bg-gray-100"
          value={font.subtext}
          onChange={(e) =>
            setFont((prev) => ({ ...prev, subtext: e.target.value }))
          }
        >
          {fontsArray.map((el, idx) => (
            <option key={idx} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default EditorFonts;
