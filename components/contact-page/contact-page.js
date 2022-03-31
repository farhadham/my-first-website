import React from "react";
import Form from "./form/form";
import classes from "./contact-page.module.scss";
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <div className={classes.background}>
      <div className={classes.wrapper}>
        <h2>You can use this form below to contact me</h2>
        <Form />
      </div>
    </div>
  );
}

export default ContactPage;
