import React from "react";
import classes from "./portfolio-page.module.scss";
import Videos from "./videos/videos";

import Datas from "./datas";

function PortfolioPage() {
  return (
    <div className={classes.background}>
      <div className={classes.wrapper}>
        <div className={classes.texts}>
          <div className={classes.headline}>
            <h1>
              {Datas[0].title}
              <br />
              <span>{Datas[0].subTitile}</span>
            </h1>
          </div>
          <div className={classes.description}>
            <p>{Datas[0].description}</p>
          </div>
        </div>
        <div className={classes.videoPart}>
          <Videos />
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
