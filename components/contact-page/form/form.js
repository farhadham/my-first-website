import React from "react";
import classes from "./form.module.scss";
import { motion } from "framer-motion";

function Form() {
  return (
    <div className={classes.container}>
      <form>
        <motion.input
          className={classes.name}
          type="text"
          id="name"
          placeholder="Your Name"
          required
          //   whileFocus={{ scale: 1.1 }}
        />
        <input
          className={classes.email}
          type="email"
          id="email"
          placeholder="Your Email"
          required
        />

        <textarea id="message" rows="4" placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
