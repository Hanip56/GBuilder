import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { templatesArray } from "../constants/infos";
import { swipeVariants } from "../utils/variants";

const PickTemplate = () => {
  const { setTemplateId, color } = useStateContext();

  return (
    <motion.div
      variants={swipeVariants}
      initial="offscreen"
      animate="onscreen"
      className="w-screen h-screen flex justify-center items-center"
    >
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-12">PICK Template</h1>
        <div className="flex flex-wrap gap-2 max-w-3xl">
          {templatesArray.map((el, idx) => (
            <Link to="/logo-maker/editor" key={idx}>
              <div
                onClick={() => setTemplateId(el.data)}
                className="w-56 h-56 flex justify-center items-center border border-black/20 p-1"
                style={{ backgroundColor: color.bg }}
              >
                {el.element}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PickTemplate;
