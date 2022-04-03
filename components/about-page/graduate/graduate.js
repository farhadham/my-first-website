import classes from "./graduate.module.scss";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function Graduate() {
  const { scrollYProgress } = useViewportScroll();
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.4, 0.5],
    [0, 0, 1, 1, 0]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.25, 0.4, 0.5],
    [0, 0, 1, 1, 0]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.425, 0.5],
    [0, 0, 1, 1, 0]
  );
  const x1 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.5, 0.55],
    [-2000, -1000, 0, 0, 0, -2000]
  );
  const opacityImg = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.45, 0.55],
    [0, 0.1, 0.1, 0.1, 0]
  );
  const x2 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 0, 0, 0]);

  return (
    <div className={classes.wrapper}>
      <motion.div className={classes.container1}>
        <motion.h1 style={{ opacity: opacity1, x: x1 }}>
          I graduated from university
        </motion.h1>

        <motion.h2 style={{ opacity: opacity2, x: x1 }}>
          In 2017 with BSc in Civil Engineering
        </motion.h2>
        <motion.p style={{ opacity: opacity3, x: x1 }}>
          I scored in the top 2% on my university exam and graduated with "A"
          and then I started exploring the non-existent job opportunities in my
          country
        </motion.p>
      </motion.div>
      <motion.div
        className={classes.image}
        style={{ opacity: opacityImg }}
      ></motion.div>
    </div>
  );
}

export default Graduate;
