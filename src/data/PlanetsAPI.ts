import { PlanetConfig } from '../types/Planet';
import moment from 'moment';

interface PlanetsAPIInterface {
  getPlanets: () => PlanetConfig[];
}

const randomSecond = (): number => Math.floor(Math.random() * 60);
const randomMinute = (): number => Math.floor(Math.random() * 60);
const randomHour = (): number => Math.floor(Math.random() * 12);

const PlanetsAPI: PlanetsAPIInterface = {
  getPlanets: () => [
    {
      title: 'Mercury',
      description: "It's not broken. Just veeeery slow ;)",
      secondDuration: 58666,
      second: randomSecond(),
      minute: randomMinute(),
      hour: randomHour(),
    },
    {
      title: 'Venus',
      description: "It's not broken. Just veeeery slow ;)",
      secondDuration: 243000,
      second: randomSecond(),
      minute: randomMinute(),
      hour: randomHour(),
    },
    {
      title: 'Earth',
      secondDuration: 1000,
      second: moment().second(),
      minute: moment().minute(),
      hour: moment().hour(),
    },
    {
      title: 'Mars',
      secondDuration: 1042,
      second: randomSecond(),
      minute: randomMinute(),
      hour: randomHour(),
    },
    {
      title: 'Jupiter',
      secondDuration: 417,
      second: randomSecond(),
      minute: randomMinute(),
      hour: randomHour(),
    },
    {
      title: 'Saturn',
      secondDuration: 458,
      second: randomSecond(),
      minute: randomMinute(),
      hour: randomHour(),
    },
    {
      title: 'Uranus',
      secondDuration: 708,
      second: randomSecond(),
      minute: randomMinute(),
      hour: randomHour(),
    },
    {
      title: 'Neptune',
      secondDuration: 667,
      second: randomSecond(),
      minute: randomMinute(),
      hour: randomHour(),
    },
  ],
};

export default PlanetsAPI;
