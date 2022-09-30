import React from "react";
import DomToImage from "dom-to-image";
import FileSaver from "file-saver";
import TemplateRoute from "./TemplateRoute";
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect } from "react";

const ContentBox = () => {
  const { color, setType, setIcon } = useStateContext();
  const handleClick = () => {
    var node = document.getElementById("my-node");

    DomToImage.toBlob(node, { quality: 100 }).then(function (blob) {
      FileSaver.saveAs(blob, "my-node.png");
    });
  };

  useEffect(() => {
    return () => {
      setType("type0");
      setIcon("");
    };
  }, []);

  return (
    <div className="flex-1 flex justify-center items-center relative">
      <div className={`w-[500px] h-[500px]`}>
        <div
          id="my-node"
          className="w-full h-full"
          style={{ backgroundColor: color.bg }}
        >
          <TemplateRoute />
        </div>
      </div>
      <button
        type="button"
        className="absolute top-5 right-5 border border-black hover:bg-black/80 py-2 px-4 hover:text-white text-sm font-semibold"
        onClick={handleClick}
      >
        Download
      </button>
      {/* <button type="button" onClick={handleType}>
        change
      </button> */}
    </div>
  );
};

export default ContentBox;
