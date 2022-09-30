import React from "react";
import EditorFonts from "./editorbar/EditorFonts";
import EditorInfo from "./editorbar/EditorInfo";
import EditorColors from "./editorbar/EditorColors";
import EditorIcons from "./editorbar/EditorIcons";
import EditorLayouts from "./editorbar/EditorLayouts";

const EditorRoute = ({ route }) => {
  if (route === "INFO") {
    return <EditorInfo />;
  }
  if (route === "FONTS") {
    return <EditorFonts />;
  }
  if (route === "COLORS") {
    return <EditorColors />;
  }
  if (route === "ICONS") {
    return <EditorIcons />;
  }
  if (route === "LAYOUTS") {
    return <EditorLayouts />;
  }

  return;
};

export default EditorRoute;
