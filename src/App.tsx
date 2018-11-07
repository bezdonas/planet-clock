import * as React from 'react';
import PlanetsAPI from './data/PlanetsAPI';
import { PlanetConfig } from './types/Planet';
import Planet from './Planet/Planet';
import Layout from './Layout/Layout';

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
      <Layout>
        {this.state.planets.map((planetData: PlanetConfig, index: number) => (
          <Planet key={index} {...planetData} />
        ))}
      </Layout>
    );
  }
}

export default App;
