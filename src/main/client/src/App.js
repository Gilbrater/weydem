import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import Nav from './components/NavComponent/Nav';
import Root from './components/Root';

//check for Token
if(localStorage.loggedData) {

const loggedData = localStorage.getItem("loggedData");
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(loggedData));
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Nav/>
            <Root/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
