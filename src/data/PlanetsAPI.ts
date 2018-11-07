import { PlanetConfig } from '../types/Planet';

interface PlanetsAPIInterface {
  getPlanets: () => PlanetConfig[];
}

const PlanetsAPI: PlanetsAPIInterface = {
  getPlanets: () => [
    {
      title: 'Mercury',
      secondDuration: 58666,
    },
    {
      title: 'Venus',
      secondDuration: 243000,
    },
    {
      title: 'Earth',
      secondDuration: 1000,
    },
    {
      title: 'Mars',
      secondDuration: 1042,
    },
    {
      title: 'Jupiter',
      secondDuration: 417,
    },
    {
      title: 'Saturn',
      secondDuration: 458,
    },
    {
      title: 'Uranus',
      secondDuration: 708,
    },
    {
      title: 'Neptune',
      secondDuration: 667,
    },
  ],
};

export default PlanetsAPI;
