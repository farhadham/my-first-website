import React, { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./cards.module.scss";
import Link from "next/link";

const variants = {
  contact: { scale: [0.2, 0.2, 0.2, 1], x: [-1000, 0, 0, 0] },
  about: { scale: [0.2, 0.2, 0.2, 1], x: [-1500, 0, 0, 0] },
  portfolio: { scale: [0.2, 0.2, 0.2, 1], x: [-2000, 0, 0, 0] },
};

function Cards() {
  return (
    <Fragment>
      <div className={classes.container}>
        <Link href="./contact">
          <motion.div
            className={classes.cardContainer}
            variants={variants}
            animate={"contact"}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.h1
              animate={{
                opacity: 1,
                transition: { duration: 0.7, delay: 1.5 },
              }}
              initial={{ opacity: 0 }}
            >
              CONTACT
            </motion.h1>

            <motion.div
              className={`${classes.contact}`}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={`${classes.contactColor}`}
                whileHover={{ backgroundColor: "#55051080" }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </Link>
        <Link href="./about">
          <motion.div
            className={classes.cardContainer}
            variants={variants}
            animate={"about"}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <motion.h1
              animate={{
                opacity: 1,
                transition: { duration: 0.7, delay: 1.7 },
              }}
              initial={{ opacity: 0 }}
            >
              ABOUT ME
            </motion.h1>

            <motion.div
              className={`${classes.about}`}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={`${classes.aboutColor}`}
                whileHover={{ backgroundColor: "#55051080" }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </Link>
        <Link href="./portfolio">
          <motion.div
            className={classes.cardContainer}
            variants={variants}
            animate={"portfolio"}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <motion.h1
              animate={{
                opacity: 1,
                transition: { duration: 0.7, delay: 1.9 },
              }}
              initial={{ opacity: 0 }}
            >
              PORTFOLIO
            </motion.h1>

            <motion.div
              className={`${classes.portfolio}`}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={`${classes.portfolioColor}`}
                whileHover={{ backgroundColor: "#55051080" }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </Fragment>
  );
}

export default Cards;
