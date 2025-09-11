import { motion } from "framer-motion";

export function EaseIn() {
  return (
    <motion.h1
      className="animation1"
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "backInOut" }}
    >
      Yes?
    </motion.h1>
  );
}

export function EaseIn2() {
  return (
    <motion.h1
      className="animation1"
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "anticipate" }}
    >
      But Of Course?
    </motion.h1>
  );
}
