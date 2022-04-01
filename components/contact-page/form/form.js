import React from "react";
import classes from "./form.module.scss";
import { motion } from "framer-motion";

function Form() {
  return (
    <motion.div
      className={classes.container}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <form action="https://formsubmit.co/farhadham2@gmail.com" method="POST">
        <div className={classes.nameEmail}>
          <motion.input
            className={classes.name}
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            whileFocus={{ backgroundColor: "#5A5758", color: "#ffffff" }}
          />
          <motion.input
            className={classes.email}
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
            whileFocus={{ backgroundColor: "#5A5758", color: "#ffffff" }}
          />
        </div>

        <motion.textarea
          id="message"
          rows="4"
          placeholder="Your Message"
          name="text"
          required
          whileFocus={{ backgroundColor: "#5A5758", color: "#ffffff" }}
        ></motion.textarea>
        <motion.button
          type="submit"
          whileHover={{ y: -3, backgroundColor: "#E5143C" }}
          whileTap={{ y: 3, backgroundColor: "#E5143C" }}
          transition={{ duration: 0.1 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
}

export default Form;
