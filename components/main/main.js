import { useRef, useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import classes from "./main.module.scss";

function Main() {
  const [open, setOpen] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "hotpink" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "hotpink",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={`${classes.box} ${classes.contact}`}></div>
          <div className={`${classes.box} ${classes.about}`}>
            {/* <img src="./images/about.jpg" alt="about me" /> */}
          </div>
          <div className={`${classes.box} ${classes.portfolio}`}>3</div>
        </div>
      </div>
    </main>
  );
}

export default Main;
