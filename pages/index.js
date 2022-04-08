import Main from "../components/main/main";
import Head from "next/head";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Farhad Faraji | Web Developer & Music Producer</title>
        <meta
          name="description"
          content="Personal website of Farhad Faraji. Web Developer, Music Composer and Audio Engineer"
        />
      </Head>
      <Main />
    </Fragment>
  );
}

export default HomePage;
