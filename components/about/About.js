import React, { Fragment } from "react";
import classes from "./About.module.css";

export default function About() {
  return (
    <Fragment>
      <div className={classes.aboutArea}>
        <div className={classes.skillArea}>
          <h2>Skills</h2>
          <ul>
            <li>Javscript & ES6+</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Node.JS</li>
            <li>Next.js</li>
          </ul>
        </div>
        <img src="/images/Computer.jpg" />
      </div>
      <div className={classes.extraDiv}>
        <h4>
          <a href="https://github.com/JustinParham">Github</a>
        </h4>
        <h4>See Project page for some work examples</h4>
      </div>
    </Fragment>
  );
}
