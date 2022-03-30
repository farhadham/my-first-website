import { Fragment } from "react";
import Navigation from "../components/navigation/navigation";
import { motion } from "framer-motion";
import AboutPage from "../components/about-page/about-page";

function About() {
  return (
    <Fragment>
      <div>
        <Navigation />
        <AboutPage />
      </div>
    </Fragment>
  );
}

export default About;
