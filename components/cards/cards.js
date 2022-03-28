import React, { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./cards.module.scss";

function Cards() {
  return (
    <Fragment>
      <div className={classes.container}>
        <motion.div
          className={`${classes.card} ${classes.contact}`}
          animate={{ scale: 1, y: 0 }}
          initial={{ scale: 0.2, y: -1000 }}
          transition={{ delay: 1 }}
        >
          1
        </motion.div>
        <motion.div
          className={`${classes.card} ${classes.about}`}
          animate={{ scale: 1, y: 0 }}
          initial={{ scale: 0.2, y: -1000 }}
          transition={{ delay: 1 }}
        >
          2
        </motion.div>
        <motion.div
          className={`${classes.card} ${classes.portfolio}`}
          animate={{ scale: 1, y: 0 }}
          initial={{ scale: 0.2, y: -1000 }}
          transition={{ delay: 1 }}
        >
          3
        </motion.div>
      </div>
    </Fragment>
  );
}

export default Cards;
