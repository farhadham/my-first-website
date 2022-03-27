import { useState } from "react";
import {
  useSpring,
  animated,
  useChain,
  useSpringRef,
  useTransition,
  config,
} from "react-spring";
import classes from "./main.module.scss";

function Main() {
  const [isEntered, setIsEntered] = useState(false);

  const transition = useTransition(!isEntered, {
    enter: { opacity: 1, width: "50%", height: "25%" },
    leave: { opacity: 0, width: "100%", height: "100%" },
    config: config.stiff,
  });

  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        {transition(
          (styles, item) =>
            item && (
              <animated.div
                className={classes.enter}
                style={styles}
                onClick={() => {
                  setIsEntered(!isEntered);
                }}
              >
                Click to enter
              </animated.div>
            )
        )}

        <div className={classes.container}>
          <div className={`${classes.box} ${classes.contact}`}></div>
          <div className={`${classes.box} ${classes.about}`}></div>
          <div className={`${classes.box} ${classes.portfolio}`}>3</div>
        </div>
      </div>
    </main>
  );
}

export default Main;
