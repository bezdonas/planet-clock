import { PlanetConfig } from '../types';
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
      description: 'It is not broken. Just veeeery slow ;)',
      secondDuration: 58666,
      second: randomSecond(),
      minute: randomMinute(),
      hour: randomHour(),
      theme: {
        background: '#BABABA',
        foreground: '#000',
      },
    },
    {
      title: 'Venus',
      description: 'It is not broken. Just veeeery slow ;)',
      secondDuration: 243000,
      second: randomSecond(),
      minute: randomMinute(),
      hour: randomHour(),
      theme: {
        background: '#E18146',
        foreground: '#000',
      },
    },
    {
      title: 'Earth',
      secondDuration: 1000,
      second: moment().second(),
      minute: moment().minute(),
      hour: moment().hour(),
      theme: {
        background: '#467EAF',
        foreground: '#000',
      },
    },
    {
      title: 'Mars',
      secondDuration: 1042,
      second: randomSecond(),
      minute: randomMinute(),
      hour: randomHour(),
      theme: {
        background: '#947147',
        foreground: '#000',
      },
    },
    {
      title: 'Jupiter',
      secondDuration: 417,
      second: randomSecond(),
      minute: randomMinute(),
      hour: randomHour(),
      theme: {
        background: '#9D935F',
        foreground: '#000',
      },
    },
    {
      title: 'Saturn',
      secondDuration: 458,
      second: randomSecond(),
      minute: randomMinute(),
      hour: randomHour(),
      theme: {
        background: '#ECD9A8',
        foreground: '#000',
      },
    },
    {
      title: 'Uranus',
      secondDuration: 708,
      second: randomSecond(),
      minute: randomMinute(),
      hour: randomHour(),
      theme: {
        background: '#B7D8DE',
        foreground: '#000',
      },
    },
    {
      title: 'Neptune',
      secondDuration: 667,
      second: randomSecond(),
      minute: randomMinute(),
      hour: randomHour(),
      theme: {
        background: '#9789FE',
        foreground: '#000',
      },
    },
  ],
};

export default PlanetsAPI;
