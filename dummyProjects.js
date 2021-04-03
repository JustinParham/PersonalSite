const dummyProjects = [
  {
    title: "CA Tide Data",
    description:
      "Simple project to retrieve data about California Coastal tides from NoAA API",
    imageURL: "/images/caTides.jpg",
    id: "1",
    projectURL: "http://Catidedata.herokuapp.com",
  },
  {
    title: "SampleProject2",
    description: "This is another sample project that does some function",
    imageURL: "/images/Spotted Bass.jpg",
    id: "14",
    projectURL: "",
  },
  {
    title: "SampleProject3",
    description: "This is third sample project that does some function",
    imageURL: "/images/landscape.jpg",
    id: "15",
    projectURL: "",
  },
];

export function findProject(projectID) {
  return dummyProjects.find((item) => item.id === projectID);
}

export default dummyProjects;
