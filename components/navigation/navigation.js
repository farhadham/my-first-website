import React, { useState } from "react";
import Link from "next/link";
import classes from "./navigation.module.scss";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  const [navIsToggled, setNavIsToggled] = useState(false);

  return (
    <motion.div
      className={classes.navContainer}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
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
        {navIsToggled && (
          <ul className={classes.list}>
            <Link href="./contact">
              <motion.li
                className={classes.listItem}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Contact
              </motion.li>
            </Link>
            <Link href="./about">
              <motion.li
                className={classes.listItem}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                About
              </motion.li>
            </Link>
            <Link href="./portfolio">
              <motion.li
                className={classes.listItem}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                Portfolio
              </motion.li>
            </Link>
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default Navigation;
