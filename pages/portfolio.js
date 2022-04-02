import { Fragment } from "react";
import Navigation from "../components/navigation/navigation";
import { motion } from "framer-motion";
import PortfolioPage from "../components/portfolio-page/portfolio-page";

function Portfolio() {
  return (
    <Fragment>
      <div>
        <Navigation />
        <PortfolioPage />
      </div>
    </Fragment>
  );
}

export default Portfolio;
