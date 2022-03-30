import classes from "./about-page.module.scss";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import IAM from "./i-am/i-am";
import Graduate from "./graduate/graduate.js";
import Music from "./music/music";
import Web from "./web/web";
import Scroll from "./scroll";

function AboutPage() {
  return (
    <div className={classes.father}>
      <div className={classes.semiFather}>
        <div className={classes.wrapper}>
          <IAM />
          <Graduate />
          <Music />
          <Web />
          <Scroll />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
