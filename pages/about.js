import { Fragment } from "react";
import Navigation from "../components/navigation/navigation";
import Head from "next/head";
import AboutPage from "../components/about-page/about-page";

function About() {
  return (
    <Fragment>
      <Head>
        <title>About</title>
        <link rel="icon" type="image/x-icon" href="/images/myicon.ico"></link>
      </Head>
      <div>
        <Navigation />
        <AboutPage />
      </div>
    </Fragment>
  );
}

export default About;
