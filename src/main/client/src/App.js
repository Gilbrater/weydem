import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Nav from './components/NavComponent/Nav';
import Root from './components/Root';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Nav/>
        <Root/>
      </div>
      </Router>
    );
  }
}

export default App;
