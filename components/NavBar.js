import React from "react";
import Image from "next/image";
import classes from "./NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <Image src="/images/new-Jlogo.png" height={100} width={100} />
      </div>
      <h1 className={classes.mainTitle}>Justin Parham</h1>
      <div className={classes.navArea}>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About Me</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
