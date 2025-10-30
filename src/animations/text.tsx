import { motion } from "framer-motion";
import { useRouteCSS } from "./util";

export function TextEaseIn() {
  useRouteCSS("/css/homepage.css");

  return (
    <motion.h1
      className="animation1"
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "backInOut" }}
    >
      Yes!?
    </motion.h1>
  );
}
