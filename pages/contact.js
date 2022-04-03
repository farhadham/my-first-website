import { Fragment } from "react";
import Navigation from "../components/navigation/navigation";
import Head from "next/head";

import ContactPage from "../components/contact-page/contact-page.js";

function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
        <link rel="icon" type="image/x-icon" href="/images/myicon.ico"></link>
      </Head>
      <div>
        <Navigation />
        <ContactPage />
      </div>
    </Fragment>
  );
}

export default Contact;
