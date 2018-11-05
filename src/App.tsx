import * as React from 'react';
import planetsData from './data/planets';
import Planet from './Planet/Planet';
import Layout from './Layout/Layout';

class App extends React.Component {
  public render() {
    return (
      <Layout>
        {planetsData.map((planetData, index) => (
          <Planet key={index} {...planetData} />
        ))}
      </Layout>
    );
  }
}

export default App;
