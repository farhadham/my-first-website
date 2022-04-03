import { motion } from "framer-motion";
import classes from "./icons.module.scss";

function Icons() {
  return (
    <motion.div
      className={classes.wrapper}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <div className={classes.line1}>
        <a
          href="https://www.linkedin.com/in/farhadfaraji/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className={classes.linkedin}
            whileHover={{ scale: 1.05 }}
          ></motion.div>
        </a>
        <a
          href="https://www.youtube.com/channel/UCfTFk8QJDq3lCCg4ztlm_Eg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className={classes.youtube}
            whileHover={{ scale: 1.05 }}
          ></motion.div>
        </a>
        <a
          href="https://www.instagram.com/farsounds/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className={classes.instagram}
            whileHover={{ scale: 1.05 }}
          ></motion.div>
        </a>
        <a
          href="https://soundcloud.com/farhadham/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className={classes.soundcloud}
            whileHover={{ scale: 1.05 }}
          ></motion.div>
        </a>
      </div>
    </motion.div>
  );
}

export default Icons;
