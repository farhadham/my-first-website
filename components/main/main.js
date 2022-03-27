import { useState } from "react";
import { useSpring, useTransition, animated, config } from "react-spring";

import classes from "./main.module.scss";

function Main() {
  const [isEntered, setIsEntered] = useState(false);
  const [nowEnter, setNowEnter] = useState([]);
  console.log(isEntered);

  const transitions1 = useTransition(isEntered, {
    from: { opacity: 0, width: "100%", height: "100%" },
    enter: { opacity: 1, width: "50%", height: "25%" },
    leave: { opacity: 0, width: "100%", height: "100%" },
    config: config.slow,
  });

  const transitions2 = useTransition(nowEnter, {
    from: { opacity: 0, y: -1000 },
    enter: { opacity: 1, y: 0 },
    config: config.gentle,
    delay: 600,
  });

  const transitions3 = useTransition(nowEnter, {
    from: { opacity: 0, y: -1000 },
    enter: { opacity: 1, y: 0 },
    config: config.gentle,
    delay: 1200,
  });

  const transitions4 = useTransition(nowEnter, {
    from: { opacity: 0, y: -1000 },
    enter: { opacity: 1, y: 0 },
    config: config.gentle,
    delay: 1800,
  });

  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        {transitions1((styles, item) =>
          !item ? (
            <animated.div
              className={classes.enter}
              style={styles}
              onClick={() => {
                setIsEntered(!isEntered);
                setNowEnter((v) => (v.length ? [] : [{}]));
              }}
            >
              Click to enter
            </animated.div>
          ) : (
            ""
          )
        )}
        <div className={classes.container}>
          {transitions2((styles, item) =>
            item ? (
              <animated.div
                className={`${classes.box} ${classes.contact}`}
                style={styles}
              >
                1
              </animated.div>
            ) : (
              ""
            )
          )}
          {transitions3((styles, item) =>
            item ? (
              <animated.div
                style={styles}
                className={`${classes.box} ${classes.about}`}
              >
                2
              </animated.div>
            ) : (
              ""
            )
          )}
          {transitions4((styles, item) =>
            item ? (
              <animated.div
                className={`${classes.box} ${classes.portfolio}`}
                style={styles}
              >
                3
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
