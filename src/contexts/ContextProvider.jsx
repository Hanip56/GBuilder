import { useEffect } from "react";
import { useState, useContext, createContext } from "react";

const initialState = {
  businessName: "",
  slogan: "",
  color: "",
  icon: null,
};

const stateContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [businessName, setBusinessName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [color, setColor] = useState({
    bg: "transparent",
    stroke: "#000000",
    text: "#000000",
    fill: "transparent",
  });
  const [font, setFont] = useState({ text: "Roboto", subtext: "Roboto" });
  const [icon, setIcon] = useState("");
  const [templateId, setTemplateId] = useState({ name: "", layouts: [] });
  const [type, setType] = useState("type0");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  useEffect(() => {
    if (localStorage.getItem("@gbuilder_businessName")) {
      setBusinessName(localStorage.getItem("@gbuilder_businessName"));
    }
    if (localStorage.getItem("@gbuilder_slogan")) {
      setSlogan(localStorage.getItem("@gbuilder_slogan"));
    }
    if (localStorage.getItem("@gbuilder_color")) {
      setColor(JSON.parse(localStorage.getItem("@gbuilder_color")));
    }
  }, []);

  return (
    <stateContext.Provider
      value={{
        businessName,
        setBusinessName,
        slogan,
        setSlogan,
        color,
        setColor,
        icon,
        setIcon,
        templateId,
        setTemplateId,
        type,
        setType,
        backgroundColor,
        setBackgroundColor,
        font,
        setFont,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
