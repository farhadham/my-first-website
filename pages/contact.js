import { Fragment } from "react";
import Navigation from "../components/navigation/navigation";
import { motion } from "framer-motion";

import ContactPage from "../components/contact-page/contact-page.js";

function Contact() {
  return (
    <Fragment>
      <div>
        <Navigation />
        <ContactPage />
      </div>
    </Fragment>
  );
}

export default Contact;
