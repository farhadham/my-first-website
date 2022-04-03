import { Fragment } from "react";
import Navigation from "../components/navigation/navigation";
import Head from "next/head";
import store from "../store/index.js";
import PortfolioPage from "../components/portfolio-page/portfolio-page";
import { Provider } from "react-redux";

function Portfolio() {
  return (
    <Provider store={store}>
      <Fragment>
        <Head>
          <title>About</title>
          <link rel="icon" type="image/x-icon" href="/images/myicon.ico"></link>
        </Head>
        <div>
          <Navigation />
          <PortfolioPage />
        </div>
      </Fragment>
    </Provider>
  );
}

export default Portfolio;
