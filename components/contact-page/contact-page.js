import React from "react";
import classes from "./contact-page.module.scss";
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.line1}>
        <motion.div
          className={classes.container}
          whileHover={{ scale: 1.1, opacity: 1, borderRadius: "25%" }}
          whileTap={{ scale: 1 }}
        >
          <div className={classes.whatsapp}></div>
        </motion.div>
        <motion.div
          className={classes.container}
          whileHover={{ scale: 1.1, opacity: 1, borderRadius: "25%" }}
          whileTap={{ scale: 1 }}
        >
          <div className={classes.linkedin}></div>
        </motion.div>
        <motion.div
          className={classes.container}
          whileHover={{ scale: 1.1, opacity: 1, borderRadius: "25%" }}
          whileTap={{ scale: 1 }}
        >
          <div className={classes.youtube}></div>
        </motion.div>
      </div>
      <div className={classes.line2}>
        <motion.div
          className={classes.container}
          whileHover={{ scale: 1.1, opacity: 1, borderRadius: "25%" }}
          whileTap={{ scale: 1 }}
        >
          <div className={classes.instagram}></div>
        </motion.div>
        <motion.div
          className={classes.container}
          whileHover={{ scale: 1.1, opacity: 1, borderRadius: "25%" }}
          whileTap={{ scale: 1 }}
        >
          <div className={classes.soundcloud}></div>
        </motion.div>
        <motion.div
          className={classes.container}
          whileHover={{ scale: 1.1, opacity: 1, borderRadius: "25%" }}
          whileTap={{ scale: 1 }}
        >
          <div className={classes.spotify}></div>
        </motion.div>
      </div>
      <p>EMAIL : FARHADHAM2@GMAIL.COM</p>
    </div>
  );
}

export default ContactPage;
