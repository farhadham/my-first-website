import React from "react";
import classes from "./scroll.module.scss";
import { motion } from "framer-motion";

function Scroll() {
  return (
    <motion.div
      className={classes.wrapper}
      animate={{ y: [5, -5, -5, 5], opacity: 1 }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className={classes.text}>SCROLL DOWN</div>
    </motion.div>
  );
}

export default Scroll;
