import { motion } from "framer-motion";
import ContentBox from "../components/LogoEditor/ContentBox";
import SideEditor from "../components/LogoEditor/SideEditor";
import { swipeVariants } from "../utils/variants";

const LogoEditor = () => {
  return (
    <motion.div
      variants={swipeVariants}
      initial="offscreen"
      animate="onscreen"
      className="flex"
    >
      <SideEditor />
      <ContentBox />
    </motion.div>
  );
};

export default LogoEditor;
