import React, { useState } from "react";
import classes from "./navigation.module.scss";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  const [navIsToggled, setNavIsToggled] = useState(false);

  return (
    <div className={classes.navContainer}>
      <div
        className={classes.toggle}
        onClick={() => {
          setNavIsToggled(!navIsToggled);
        }}
      >
        <div className={classes.lines}>
          <motion.div
            className={classes.line}
            animate={
              navIsToggled ? { rotate: -45, y: 11.5 } : { rotate: 0, y: 0 }
            }
          ></motion.div>
          <motion.div
            className={classes.line}
            animate={navIsToggled ? { scale: 0 } : { scale: 1 }}
          ></motion.div>
          <motion.div
            className={classes.line}
            animate={
              navIsToggled ? { rotate: 45, y: -11.5 } : { rotate: 0, y: 0 }
            }
          ></motion.div>
        </div>
      </div>
      <AnimatePresence>
        {navIsToggled && (
          <motion.div
            className={classes.fakeBackground}
            animate={{
              scale: 30,
            }}
            transition={{ duration: 0.4 }}
            exit={{ scale: 1 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <div className={classes.listContainer}>
        <ul className={classes.list}>
          <motion.li className={classes.listItem}>Contact</motion.li>
          <motion.li className={classes.listItem}>About</motion.li>
          <motion.li className={classes.listItem}>Portfolio</motion.li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
