import { Fragment } from "react";
import Navigation from "../components/navigation/navigation";
import { motion } from "framer-motion";

function About() {
  return (
    <Fragment>
      <motion.div
        animate={{ backgroundColor: "#A7A5A6", height: "100vh", width: "100%" }}
        initial={{ backgroundColor: "#231F20", height: "100vh", width: "100%" }}
        transition={{ duration: 0.7 }}
      >
        <Navigation />
      </motion.div>
    </Fragment>
  );
}

export default About;
