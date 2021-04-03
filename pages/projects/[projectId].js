import React from "react";
import { useRouter } from "next/router";
import { findProject } from "../../dummyProjects";

export default function ProjectPage() {
  const router = useRouter();
  console.log(findProject(router.query.projectId));
  return <h1>hi</h1>;
}
