import * as React from 'react';
import ClockContainer from './Clock/ClockContainer';
import Layout from './Layout/Layout';

class App extends React.Component {
  public render() {
    return (
      <Layout>
        <ClockContainer />
      </Layout>
    );
  }
}

export default App;
