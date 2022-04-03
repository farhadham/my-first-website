import classes from "./music.module.scss";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function Music() {
  const { scrollYProgress } = useViewportScroll();
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.5, 0.6, 0.75, 0.8],
    [0, 0, 0, 0, 0, 1, 1, 0]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.25, 0.3, 0.55, 0.65, 0.75, 0.8],
    [0, 0, 0, 0, 0, 1, 1, 0]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.425, 0.6, 0.7, 0.75, 0.85],
    [0, 0, 0, 0, 0, 1, 1, 0]
  );
  const x1 = useTransform(
    scrollYProgress,
    [0, 0.55, 0.6, 0.85, 0.9],
    [-2000, -2000, 0, 0, -2000]
  );
  const opacityImg = useTransform(
    scrollYProgress,
    [0, 0.45, 0.55, 0.7, 0.85],
    [0, 0, 0.1, 0.1, 0]
  );
  const x2 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 0, 0, 0]);

  return (
    <div className={classes.wrapper}>
      <motion.div className={classes.container1}>
        <motion.h1 style={{ opacity: opacity1, x: x1 }}>
          I started composing music
        </motion.h1>

        <motion.h2 style={{ opacity: opacity2, x: x1 }}>
          And started my career as a freelance producer
        </motion.h2>
        <motion.p style={{ opacity: opacity3, x: x1 }}>
          With my brief knowledge of music theory and piano, I started learning
          my first DAW and created a couple of tracks. then, after a few months,
          I started my journey as a freelancer and produced music for various
          projects
        </motion.p>
      </motion.div>
      <motion.div
        className={classes.image}
        style={{ opacity: opacityImg }}
      ></motion.div>
    </div>
  );
}

export default Music;
