import React, { Component } from 'react';

import './css/landing.css';
import './css/background.css';

import img_play from './img/play.png';
import img_watch from './img/watch.png';
import img_learn from './img/learn.png';
import img_leaderboard from './img/leaderboard-icon.png';
import img_avatar1 from './img/av1.png';
import img_avatar2 from './img/av2.png';
import img_avatar3 from './img/av3.png';
import img_avatar4 from './img/av4.png';
import img_pro1 from './img/pro1.png';
import img_pro2 from './img/pro2.png';

class Landing extends Component {
  render() {
    return(
      <div>
        <header className="">
          <div className="hero-text">
          <h1 className="header-hero">Learn something new today, and <br></br> be awesome while at it!</h1>

          <div className="btn-start-playing wow fadeInUp animated">Start Playing Now</div>
        </div>
        </header>
        <section className="leaderboard-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 leaderboard">
                <div className="leader">
                  <span><img src={img_leaderboard} alt="Leaderboard"/></span><span className="leader-title"><h4>Leaderboard</h4></span>
                  <hr></hr>
                  <div className="row leader-row">
                    <div className="col-sm-1"><img src={img_avatar4} alt="av" height="40" width="40"/></div>
                    <div className="col-sm-5"><h5 className="leader-name">SamRex</h5></div>
                    <div className="col-sm-3"><h5 className="leader-category">Physics</h5></div>
                    <div className="col-sm-3 score-rating"><span >3100</span><span className="leader-rating"><img src={img_pro1} alt=""/></span></div>
                  </div>
                  <hr></hr>
                  <div className="row leader-row">
                    <div className="col-sm-1"><img src={img_avatar3} alt="av" height="40" width="40"/></div>
                    <div className="col-sm-5"><h5 className="leader-name">kapro23</h5></div>
                    <div className="col-sm-3"><h5 className="leader-category">Javascript</h5></div>
                    <div className="col-sm-3 score-rating"><span >3099</span><span className="leader-rating"><img src={img_pro1} alt=""/></span></div>
                  </div>
                  <hr></hr>
                  <div className="row leader-row">
                    <div className="col-sm-1"><img src={img_avatar2} alt="av" height="40" width="40"/></div>
                    <div className="col-sm-5"><h5 className="leader-name">Joycee</h5></div>
                    <div className="col-sm-3"><h5 className="leader-category">Law</h5></div>
                    <div className="col-sm-3 score-rating"><span >3007</span><span className="leader-rating"><img src={img_pro1} alt=""/></span></div>
                  </div>
                  <hr></hr>
                  <div className="row leader-row">
                    <div className="col-sm-1"><img src={img_avatar1} alt="av" height="40" width="40"/></div>
                    <div className="col-sm-5"><h5 className="leader-name">avolaz2</h5></div>
                    <div className="col-sm-3"><h5 className="leader-category">Physics</h5></div>
                    <div className="col-sm-3 score-rating"><span >2950</span><span className="leader-rating"><img src={img_pro1} alt=""/></span></div>
                  </div>
                  <hr></hr>
                  <div className="row leader-row">
                    <div className="col-sm-1"><img src={img_avatar4} alt="av" height="40" width="40"/></div>
                    <div className="col-sm-5"><h5 className="leader-name">SamRex</h5></div>
                    <div className="col-sm-3"><h5 className="leader-category">Physics</h5></div>
                    <div className="col-sm-3 score-rating"><span >3100</span><span className="leader-rating"><img src={img_pro1} alt=""/></span></div>
                  </div>
                  <hr></hr>
                </div>
              </div>
              <div className="col-sm-6 livegames">
                <div className="">

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <div className="about">
              <h4>Join millions of folks</h4>
              <br></br>
              <div className="row">
                <div className="col-sm-4">
                  <img src={img_play} alt="Play" className="wow fadeInDown animated"/>
                  <h5>Play</h5>
                  <p>Play watch and learn something from everything you and you can play always and learn</p>
                </div>
                <div className="col-sm-4">
                  <img src={img_watch} alt="Play"/>
                  <h5>Watch</h5>
                  <p>Play watch and learn something from everything you and you can play always and learn</p>
                </div>
                <div className="col-sm-4">
                  <img src={img_learn} alt="Play"/>
                  <h5>Learn</h5>
                  <p>Play watch and learn something from everything you and you can play always and learn</p>
                </div>
              </div>
              <div className="btn-start-playing wow fadeInUp animated">Start Playing Now</div>
            </div>
          </div>
        </section>

        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Landing;
