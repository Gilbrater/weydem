import React, { Component } from 'react';

import './css/landing.css';

class Landing extends Component {
  render() {
    return(
      <div>
        <header>

          <div className="hero-text">
          <h1 className="header-hero">Learn something new today, and <br></br> be awesome while at it!</h1>

          <div className="btn-start-playing">Start Playing Now</div>
        </div>
        </header>
      </div>
    );
  }
}

export default Landing;
