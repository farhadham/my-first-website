import { Fragment } from "react";
import Navigation from "../components/navigation/navigation";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <Fragment>
      <div
        style={{ backgroundColor: "#000000", width: "100%", height: "100vh" }}
      >
        <Navigation />
      </div>
    </Fragment>
  );
}

export default Portfolio;
