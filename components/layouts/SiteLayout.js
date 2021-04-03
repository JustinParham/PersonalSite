import React from "react";
import classes from "./SiteLayout.module.css";
import NavBar from "../NavBar.js";
import Head from "next/head";


export default function SiteLayout(props) {
  return (
    <>
      <Head>
        <title>Justin Parham</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={classes.wrapper}>
        <NavBar navBarClass={classes.navBar} />
        <div className={classes.content}>{props.children}</div>
        <footer className={classes.footer}>
          <div>Hi im the footer</div>
        </footer>
      </div>
    </>
  );
}
