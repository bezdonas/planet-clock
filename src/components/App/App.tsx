import * as React from 'react';
import PlanetsAPI from '../../data/PlanetsAPI';
import { PlanetConfig } from 'types';
import Planet from '../Planet/Planet';
import Grid from '../Grid/Grid';

interface AppProps {}

interface AppState {
  planets: PlanetConfig[];
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      planets: PlanetsAPI.getPlanets(),
    };
  }

  public render() {
    return (
      <Grid>
        {this.state.planets.map((planetData: PlanetConfig, index: number) => (
          <Planet key={index} {...planetData} />
        ))}
      </Grid>
    );
  }
}

export default App;
