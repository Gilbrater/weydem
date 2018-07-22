import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';
import { PulseLoader } from 'react-spinners';
import TextFieldGroup from '../common/TextFieldGroup';

import {Link} from 'react-router-dom';

import './css/auth.css';
import img_signin from './img/signin-img.png';


class Signin extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
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
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    if(nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        loading:false
      })
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
    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(userData);
  }


  render() {

    const { errors } = this.state;

    return(

        <section className="signin">
          <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img className="signin-img" src={img_signin} alt="Signin"/>
            </div>
            <div className="col-md-4">
              <div className="signin-form">
                <form noValidate onSubmit={this.onSubmit}>
                  <h3>Welcome back,</h3>
                  <h5 className="google-login">Login with Google</h5>
                  <h5 className="facebook-login">Login with Facebook</h5>
                  <hr></hr>
                  <p className="signin-form-or">OR</p>
                  <hr></hr>
                  <br></br>
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

                      <p className="extra-note"><Link to='/signin'>forgot password?</Link></p>
                      <br></br>
                      <div>
                        <PulseLoader
                          color={'#7757A8;'}
                          loading={this.state.loading}
                          width={180}
                        />
                      </div>
                      <input type="submit" value="Sign In"/>
                      <br></br>
                      <p>New to weydem? <Link to='/signup'>Sign Up</Link></p>
                    </form>
                  </div>
                </div>
          </div>
          </div>
        </section>
    );
  }
}


Signin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})


export default connect(mapStateToProps, { loginUser })(Signin);
