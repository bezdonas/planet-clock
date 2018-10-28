const secondsPerCircle: number = 60;
const minutesPerCircle: number = 60;
const hoursPerCircle: number = 12;

// How much degrees are there in one second/minute/hour
export const degPerCircle: number = 360;
export const degPerSecond: number = degPerCircle / secondsPerCircle;
export const degPerMinute: number = degPerCircle / minutesPerCircle;
export const degPerHour: number = degPerCircle / hoursPerCircle;
