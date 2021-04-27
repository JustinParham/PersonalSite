import React, { Fragment } from "react";
import Intro from "../components/intro/Intro";
import About from "../components/about/About";

export default function Home() {
  return (
    <Fragment>
      <Intro />
      <About />
    </Fragment>
  );
}
