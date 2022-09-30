import { BsInfoLg } from "react-icons/bs";
import { BsFillFileEarmarkFontFill } from "react-icons/bs";
import { AiOutlineBgColors } from "react-icons/ai";
import { FaIcons } from "react-icons/fa";
import { RiLayout6Fill } from "react-icons/ri";
import { temp1Layouts } from "../components/templateLogo/temp1/Temp1Route";
import { temp2Layouts } from "../components/templateLogo/temp2/Temp2Route";
import { default as Temp1Preview } from "../components/templateLogo/temp1/Type0";
import { default as Temp2Preview } from "../components/templateLogo/temp2/Type0";
import { default as Temp3Preview } from "../components/templateLogo/temp3/Type0";
import { default as Temp4Preview } from "../components/templateLogo/temp4/Type0";
import { default as Temp5Preview } from "../components/templateLogo/temp5/Type0";
import { default as Temp6Preview } from "../components/templateLogo/temp6/Type0";
import { temp3Layouts } from "../components/templateLogo/temp3/Temp3Route";
import { temp4Layouts } from "../components/templateLogo/temp4/Temp4Route";
import { temp5Layouts } from "../components/templateLogo/temp5/Temp5Route";
import { temp6Layouts } from "../components/templateLogo/temp6/Temp6Route";

export const listInfo = [
  {
    icon: <BsInfoLg />,
    title: "INFO",
  },
  {
    icon: <BsFillFileEarmarkFontFill />,
    title: "Fonts",
  },
  {
    icon: <AiOutlineBgColors />,
    title: "colors",
  },
  {
    icon: <FaIcons />,
    title: "ICONS",
  },
  {
    icon: <RiLayout6Fill />,
    title: "layouts",
  },
];

export const templatesArray = [
  {
    data: { name: "temp1", layouts: temp1Layouts, iconEdit: true },
    element: <Temp1Preview />,
  },
  {
    data: { name: "temp2", layouts: temp2Layouts },
    element: <Temp2Preview />,
  },
  {
    data: { name: "temp3", layouts: temp3Layouts },
    element: <Temp3Preview />,
  },
  {
    data: { name: "temp4", layouts: temp4Layouts },
    element: <Temp4Preview />,
  },
  {
    data: { name: "temp5", layouts: temp5Layouts },
    element: <Temp5Preview />,
  },
  {
    data: { name: "temp6", layouts: temp6Layouts },
    element: <Temp6Preview />,
  },
];

export const palletesArray = [
  {
    backgroundColor: "transparent",
    text: "#000000",
    fill: "transparent",
    stroke: "#000000",
  },
  {
    backgroundColor: "#FCDEC0",
    text: "#7D5A50",
    fill: "#E5B299",
    stroke: "#7D5A50",
  },
  {
    backgroundColor: "#2B2E4A",
    text: "#e3d5c4",
    fill: "#903749",
    stroke: "#e3d5c4",
  },
];
