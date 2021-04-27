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
    title: "Pokemon Data Site",
    description:
      "Small site that uses data pulled from PokeAPI to lookup pokemon by number, as well as contains a pokemon matching game",
    imageURL: "/images/projectImages/pokeAPI.jpg",
    id: "2",
    projectURL: "https://poke-site.herokuapp.com/",
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
  return dummyProjects.find(item => item.id === projectID);
}

export default dummyProjects;
