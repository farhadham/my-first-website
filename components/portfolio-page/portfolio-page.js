import React from "react";
import classes from "./portfolio-page.module.scss";
import Videos from "./videos/videos";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import Datas from "./datas";

function PortfolioPage() {
  const slide = useSelector((st) => st.slide);
  return (
    <div className={classes.background}>
      <motion.div
        className={classes.wrapper}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={classes.texts}>
          <div className={classes.headline}>
            <motion.h1
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {Datas[slide].title}
              <br />
              <span>{Datas[slide].subTitile}</span>
            </motion.h1>
          </div>
          <motion.div
            className={classes.description}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p>{Datas[slide].description}</p>
          </motion.div>
        </div>

        <motion.div
          className={classes.videoPart}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Videos />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PortfolioPage;
