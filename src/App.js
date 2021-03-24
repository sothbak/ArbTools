import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import RacingCalculator from './Containers/Calculator/RacingCalculator/RacingCalculator';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <div>
              Modal
            </div>
            {/* <RacingCalculator /> */}
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
