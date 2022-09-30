import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { swipeVariants } from "../utils/variants";

const Naming = () => {
  const { setBusinessName, businessName, slogan, setSlogan } =
    useStateContext();
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("@gbuilder_businessName", businessName);
    localStorage.setItem("@gbuilder_slogan", slogan);
    navigate("/logo-maker/pick-pallete");
  };

  return (
    <motion.div
      variants={swipeVariants}
      initial={"offscreen"}
      animate={"onscreen"}
      className="w-screen h-screen flex justify-center items-center"
    >
      <div className="flex flex-col w-[30rem] h-[25rem] relative">
        <h1 className="text-3xl font-bold mb-12">Set your Info</h1>
        <div className="space-y-12">
          <div className="space-y-2">
            <label className="text-xl">Logo name</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full py-4 px-6 border border-black bg-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xl">Slogan</label>
            <input
              type="text"
              value={slogan}
              onChange={(e) => setSlogan(e.target.value)}
              className="w-full py-4 px-6 border border-black bg-transparent"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="absolute bottom-0 right-0 border border-black py-1 px-3 text-sm bg-black/90 text-white hover:bg-black/70"
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default Naming;
