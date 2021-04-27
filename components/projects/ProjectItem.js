import React from "react";
import classes from "./ProjectItem.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProjectItem(props) {
  return (
    <Link href={props.projectURL}>
      <li className={classes.projectItem}>
        <div className={classes.image}>
          <Image
            src={props.imageURL}
            alt={props.title}
            height={200}
            width={200}
          />
        </div>
        <div className={classes.contentArea}>
          <div className={classes.title}>{props.title}</div>
          <div className={classes.description}>{props.description}</div>
        </div>
      </li>
    </Link>
  );
}
