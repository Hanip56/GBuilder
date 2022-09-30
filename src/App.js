import LogoEditor from "./pages/LogoEditor";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PickGraphic from "./pages/PickGraphic";
import PickTemplate from "./pages/PickTemplate";
import Naming from "./pages/Naming";
import PickPallete from "./pages/PictPallete";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pick-graphic" element={<PickGraphic />} />
      <Route path="/logo-maker/pick-template" element={<PickTemplate />} />
      <Route path="/logo-maker/pick-pallete" element={<PickPallete />} />
      <Route path="/logo-maker/naming" element={<Naming />} />
      <Route path="/logo-maker/editor" element={<LogoEditor />} />
    </Routes>
  );
}

export default App;
