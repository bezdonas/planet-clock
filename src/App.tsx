import * as React from 'react';
import Clock from './Clock/Clock';
import Layout from './Layout/Layout';

class App extends React.Component {
  public render() {
    return (
      <Layout>
        <Clock />
      </Layout>
    );
  }
}

export default App;
