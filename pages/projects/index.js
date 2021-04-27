import React from "react";
import ProjectList from "../../components/projects/ProjectList";

export default function ProjectIndexPage(props) {
  return (
    <div>
      <ProjectList imageArray={props.imageArray} />
    </div>
  );
}
