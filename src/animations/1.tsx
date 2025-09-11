import { motion } from "framer-motion";

export default function EaseIn() {
  return (
    <motion.h1
      className="animation1"
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      Yes?
    </motion.h1>
  );
}
