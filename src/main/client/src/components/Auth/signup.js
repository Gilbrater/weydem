import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import { PulseLoader } from 'react-spinners';
import TextFieldGroup from '../common/TextFieldGroup';

import './css/auth.css';
import img_signup from './img/signup-img.png';

class Signup extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
      loading: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        loading:false
      });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    this.props.registerUser(newUser, this.props.history);
  }

  render () {
    const { errors } = this.state;

    return (
      <section className="signin">
       <div className="container">
          <div className="row">
            <div className="col-md-8">
                <img src={img_signup} className="signup-img" alt="Crafters Connect" />
            </div>
            <div className="col-md-4">
              <div className="signin-form">
                <form noValidate onSubmit={this.onSubmit}>
                  <h3>Join millions of ready players</h3>
                  <h5 className="google-login">Sign up with Google</h5>
                  <h5 className="facebook-login">Sign Up with Facebook</h5>
                  <hr></hr>
                  <p className="signin-form-or">OR</p>
                  <hr></hr>
                  <p>Username</p>
                  <TextFieldGroup
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}/>

                    <p>Email</p>
                    <TextFieldGroup
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}/>

                      <p>Password</p>
                      <TextFieldGroup
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={errors.password}/>

                        <p>Confirm Password</p>
                        <TextFieldGroup
                          name="password2"
                          type="password"
                          value={this.state.password2}
                          onChange={this.onChange}
                          error={errors.password2}/>
                          <br></br>
                          <div>
                            <PulseLoader
                              color={'#7757A8;'}
                              loading={this.state.loading}
                              width={180}
                            />
                          </div>
                          <input type="submit" value="Sign Up"/>
                          <br></br>
                          <p>Already Signed Up? <Link to='/signin'>Login</Link></p>
                        </form>
                      </div>
            </div>
          </div>
      </div>
   </section>
    );
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Signup));
