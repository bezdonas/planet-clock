import * as React from 'react';
import planetsData from './data/planets';
import { PlanetConfig } from './types/Planet';
import Planet from './Planet/Planet';
import Layout from './Layout/Layout';

class App extends React.Component {
  public render() {
    return (
      <Layout>
        {planetsData.map((planetData: PlanetConfig, index: number) => (
          <Planet key={index} {...planetData} />
        ))}
      </Layout>
    );
  }
}

export default App;
