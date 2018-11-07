import { Time } from './Clock';
export type PlanetConfig = {
  title: string;
  description?: string;
  secondDuration: number;
} & Time;
