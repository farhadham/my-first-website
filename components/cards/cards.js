import React, { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./cards.module.scss";
import Link from "next/link";

function Cards() {
  return (
    <Fragment>
      <div className={classes.container}>
        <Link href="./contact">
          <motion.div
            className={classes.cardContainer}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0, duration: 1 }}
          >
            <motion.h1
              animate={{
                opacity: 1,
                transition: { duration: 0.7, delay: 0.3 },
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
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <motion.h1
              animate={{
                opacity: 1,
                transition: { duration: 0.7, delay: 0.6 },
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
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <motion.h1
              animate={{
                opacity: 1,
                transition: { duration: 0.7, delay: 0.9 },
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
