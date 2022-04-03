import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./main.module.scss";
import Cards from "../cards/cards";

function Main() {
  const [isEntered, setIsEntered] = useState(true);

  return (
    <div className={classes.main}>
      <motion.div
        className={classes.container}
        animate={
          isEntered
            ? {
                width: "100%",
                height: "100%",
                borderRadius: "0%",
                x: 0,
                y: 0,

                background: "#231F20",
                cursor: "default",
              }
            : { y: [20, -20, -20, 20], opacity: 1 }
        }
        transition={
          isEntered
            ? { duration: 0 }
            : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }
        onClick={
          isEntered
            ? () => {}
            : () => {
                setIsEntered(!isEntered);
              }
        }
      >
        <AnimatePresence>
          {isEntered ? (
            ""
          ) : (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              CLICK
            </motion.h1>
          )}
        </AnimatePresence>
        {isEntered ? <Cards /> : ""}
      </motion.div>
      {/* {isEntered ? <div className={classes.overlay}></div> : ""} */}
    </div>
  );
}

export default Main;
