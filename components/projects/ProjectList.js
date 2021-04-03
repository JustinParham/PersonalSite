import React from "react";
import classes from "./ProjectList.module.css";
import dummyProjects from "../../dummyProjects";
import ProjectItem from "./ProjectItem";

export default function ProjectList() {
  return (
    <ol className={classes.listArea}>
      {dummyProjects.map((item) => {
        return <ProjectItem key={item.id} {...item} />;
      })}
    </ol>
  );
}
