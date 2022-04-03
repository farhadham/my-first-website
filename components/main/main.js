import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./main.module.scss";
import Cards from "../cards/cards";

function Main() {
  const [isEntered, setIsEntered] = useState(true);

  return (
    <motion.div className={classes.container}>
      <Cards />
    </motion.div>
  );
}

export default Main;
