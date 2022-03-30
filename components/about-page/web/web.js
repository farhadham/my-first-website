import classes from "./web.module.scss";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function Web() {
  const { scrollYProgress } = useViewportScroll();
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.5, 0.6, 0.9, 0.95],
    [0, 0, 0, 0, 0, 0, 0, 1]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.5, 0.6, 0.9, 0.95],
    [0, 0, 0, 0, 0, 0, 0, 1]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.5, 0.6, 0.9, 0.95],
    [0, 0, 0, 0, 0, 0, 0, 1]
  );
  const x1 = useTransform(
    scrollYProgress,
    [0, 0.55, 0.6, 0.85, 0.9],
    [-2000, -2000, -2000, -2000, 0]
  );
  const opacityImg = useTransform(
    scrollYProgress,
    [0, 0.45, 0.55, 0.7, 0.85, 0.9],
    [0, 0, 0, 0, 0, 0.1]
  );
  const x2 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 0, 0, 0]);

  return (
    <div className={classes.wrapper}>
      <motion.div className={classes.container1}>
        <motion.h1 style={{ opacity: opacity1, x: x1 }}>
          My web development Journey...
        </motion.h1>

        <motion.h2 style={{ opacity: opacity2, x: x1 }}>
          In January 2022, I started cording
        </motion.h2>
        <motion.p style={{ opacity: opacity3, x: x1 }}>
          I started learning HTML, CSS, and JS and then transitioned to React.
          This is my first personal website which I've designed from scratch.
          Coding is my favorite hobby and primary goal in my career
        </motion.p>
      </motion.div>
      <motion.div
        className={classes.image}
        style={{ opacity: opacityImg }}
      ></motion.div>
    </div>
  );
}

export default Web;
