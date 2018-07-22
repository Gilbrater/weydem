import React, { Component } from 'react';
//import Particles from 'react-particles-js';
import './css/landing.css';
// import particlesJS from 'particles.js';
import 'particles.js/particles';

import ParticlesConfig from './particlesjs-config.json';



import img_play from './img/play.png';
import img_watch from './img/watch.png';
import img_learn from './img/learn.png';
import img_leaderboard from './img/leaderboard-icon.png';
import img_avatar1 from './img/av1.png';
import img_avatar2 from './img/av2.png';
import img_avatar3 from './img/av3.png';
import img_avatar4 from './img/av4.png';
import img_avatar5 from './img/av5.png';
import img_pro1 from './img/pro1.png';
import img_pro2 from './img/pro2.png';
import img_footer from './img/footer-logo.png';
import img_social from './img/socials.png';
import img_livegames from './img/livegames.png'
import img_views from './img/views.png'
import img_watchnow from './img/watchnow.png'

import logo from './img/banner.png';


const particlesJS = window.particlesJS;

class Landing extends Component {

  componentDidMount() {

    //particlesJS.load('particles-js', './../../../public/particlesjs-config.json');
  }

  render() {

    return(
      <div>
        <header id="particles-js">
          <div className="hero-text">
          <h1 className="header-hero wow fadeInDown animated">Learn something new today, and <br></br> be awesome while at it!</h1>
          <div className="btn-start-playing animated infinite pulse delay-100s">Start Playing Now</div>
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
                    <div className="col-sm-1"><img src={img_avatar5} alt="av" height="40" width="40"/></div>
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
                    <div className="col-sm-5"><h5 className="leader-name">Jimmy</h5></div>
                    <div className="col-sm-3"><h5 className="leader-category">Dynamics</h5></div>
                    <div className="col-sm-3 score-rating"><span >3100</span><span className="leader-rating"><img src={img_pro1} alt=""/></span></div>
                  </div>
                  <hr></hr>
                </div>
              </div>
              <div className="col-sm-6 livegames">
                <div className="live">
                    <span><img src={img_livegames} alt="LiveGames"/></span><span className="leader-title"><h4>Live Games</h4></span>
                    <hr></hr>
                    <div className="live-row">
                      <div className="row top-live">
                        <div className="col-sm-6">Pure Maths</div>
                        <div className="col-sm-6">04:35</div>
                      </div>
                      <div className="row mid-live">
                        <div className="col-sm-6"><img src={img_avatar2} alt="av" height="20" width="20"/><span className="live-name">xavi04</span><span className="score-rating"><span >3100</span><span className="leader-rating"><img src={img_pro1} alt=""/></span></span></div>
                        <div className="col-sm-6"><span className="score-rating"><span >3100</span><span className="leader-rating"><img src={img_pro1} alt=""/></span></span><span className="live-name">drBlik</span><img src={img_avatar5} alt="av" height="20" width="20"/></div>
                      </div>
                      <div className="row bottom-live">
                        <div className="col-sm-6"><span><img src={img_watchnow} alt="av" /></span>Watch</div>
                        <div className="col-sm-6">3.5k<span><img src={img_views} alt="av" /></span></div>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="live-row">
                      <div className="row top-live">
                        <div className="col-sm-6">Pure Maths</div>
                        <div className="col-sm-6">04:35</div>
                      </div>
                      <div className="row mid-live">
                        <div className="col-sm-6"><img src={img_avatar2} alt="av" height="20" width="20"/><span className="live-name">xavi04</span><span className="score-rating"><span >3100</span><span className="leader-rating"><img src={img_pro1} alt=""/></span></span></div>
                        <div className="col-sm-6"><span className="score-rating"><span >3100</span><span className="leader-rating"><img src={img_pro1} alt=""/></span></span><span className="live-name">drBlik</span><img src={img_avatar5} alt="av" height="20" width="20"/></div>
                      </div>
                      <div className="row bottom-live">
                        <div className="col-sm-6"><span><img src={img_watchnow} alt="av" /></span>Watch</div>
                        <div className="col-sm-6">3.5k<span><img src={img_views} alt="av" /></span></div>
                      </div>
                    </div>
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
        <section className="footer-section">
          <div className="container">
            <div className="footer">
              <div className="row">
                <div className="col-md-6 footer-left">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={img_footer} alt="weydem"/>
                      <img src={img_social} alt="social"/>
                      <br></br>
                      <p>&copy; 2018</p>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Join Us</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Press</li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="col-md-6 footer-right">
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Top Categories</h4>
                      <ul>
                        <li>JavaScript</li>
                        <li>History</li>
                        <li>Biology</li>
                        <li>Drilling</li>
                        <li>Mathematics</li>
                        <li>Anatomy</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h4>Top Categories</h4>
                      <ul>
                        <li>JavaScript</li>
                        <li>History</li>
                        <li>Biology</li>
                        <li>Drilling</li>
                        <li>Mathematics</li>
                        <li>Anatomy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
