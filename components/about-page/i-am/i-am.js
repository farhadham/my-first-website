import classes from "./i-am.module.scss";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const h1Variant = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const h2Variant = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.7,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const h3Variant = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.7,
    },
  },
  hidden: {
    opacity: 0,
  },
};

function IAM() {
  const { scrollYProgress } = useViewportScroll();
  const opacity1 = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const x1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 0, -2000]);
  const opacityImg = useTransform(scrollYProgress, [0, 0.1], [0.1, 0]);
  return (
    <div className={classes.wrapper}>
      <motion.div
        className={classes.container1}
        style={{ opacity: opacity1, x: x1 }}
      >
        <motion.h1 initial="hidden" animate="visible" variants={h1Variant}>
          MY NAME IS FARHAD FARAJI
        </motion.h1>
        <motion.div
          className={classes.myImage}
          initial="hidden"
          animate="visible"
          variants={h3Variant}
        ></motion.div>
        <motion.h2 initial="hidden" animate="visible" variants={h2Variant}>
          I'm a self-educated Music Producer & Web Developer
        </motion.h2>
      </motion.div>
      <motion.div
        className={classes.image}
        style={{ opacity: opacityImg }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
      ></motion.div>
    </div>
  );
}

export default IAM;
