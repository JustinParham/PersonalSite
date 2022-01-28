const dummyProjects = [
  {
    title: 'Faux-Store',
    description: 'E-store example project',
    imageURL: '/images/projectImages/faux-store.jpg',
    id: '3',
    projectURL: 'https://faux-store.herokuapp.com',
  },
  {
    title: 'Pokemon Data Site',
    description:
      'Small site that uses data pulled from PokeAPI to lookup pokemon by number, as well as contains a pokemon matching game',
    imageURL: '/images/projectImages/pokeAPI.jpg',
    id: '2',
    projectURL: 'https://poke-site.herokuapp.com/',
  },
  {
    title: 'CA Tide Data',
    description:
      'Simple project to retrieve data about California Coastal tides from NoAA API',
    imageURL: '/images/caTides.jpg',
    id: '1',
    projectURL: 'http://Catidedata.herokuapp.com',
  },
];

export function findProject(projectID) {
  return dummyProjects.find(item => item.id === projectID);
}

export default dummyProjects;
