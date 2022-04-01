import React from "react";
import Form from "./form/form";
import classes from "./contact-page.module.scss";
import { motion } from "framer-motion";
import Icons from "./icons/icons";

function ContactPage() {
  return (
    <div className={classes.background}>
      <motion.div
        className={classes.wrapper}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          You can use this form below to contact me
        </motion.h2>
        <Form />
        <Icons />
      </motion.div>
    </div>
  );
}

export default ContactPage;
