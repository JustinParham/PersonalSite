import React from "react";
import classes from "./intro.module.css";

export default function IntroArea() {
  return (
    <div className={classes.introArea}>
      <img src="/images/Spotted Bass.jpg" />
      <div className={classes.imageAreaText}>
        <p>
          I am a new web dev with a passion for learning and problem solving. I
          utlilized my time stuck indoors during Covid Quarantine to learn web
          development skills in an attempt to make a career change. I am
          searching for a employment in the fields of front-end or full stack
          web development.
        </p>
        <p>
          I am a former College and High School Track and Field Coach who excels
          in communication and technical explanations. I can 
        </p>
      </div>
    </div>
  );
}
