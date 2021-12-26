import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext} from 'react'
import AuthContext from '../Auth/Authcontext';
import WOW from 'wowjs';

import "./Login.css";

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    new WOW.WOW({
      live: false
    }).init();
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} id='leftside'>
          <img className="img wow bounceInDown " data-wow-delay="2s" src={require('././static/images/ins.jpeg').default} alt="logo" />
            <img className="img wow bounceInUp " data-wow-delay="6s" src={require('././static/images/inst1.jpg').default} alt="logo" />
          </Col>
          <Col xs={6}>
            <div className="form_data">
              <form action="" onSubmit={loginUser}>
                <img className="img1" src={require('././static/images/instlogo.png').default} alt="logo" />

                <input
                  type="text"
                  placeholder="Enter your User Name" name="username"
                />
                <input type="password" placeholder="Enter your Password" name='password' />
               <input type="submit" className="form-btn" value='Log In' />
                {/* <Link to="/home">
                  <button className="form-btn" type="submit">
                    Log In
                </button>
                </Link> */}
                <br></br>
                <div className='orclass'>
                  <hr></hr> <span className="has-separator">Or</span> <hr></hr>
                </div>
                <a href="https://www.facebook.com" className="facebook-login">
                  <FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: 'slateblue' }} /> &nbsp; Log in with Facebook
              </a> <br></br>
                {/* <a className="password-reset" href="/some/valid/uri">
                  Forgot password?
            </a> */}
              </form>
            </div>
            <div className="sign-up">
              Don't an account?
               <Link to="/sign">Sign up</Link>
            </div>
            <div className="get-the-app">
              <span>Get the app</span> <br></br>
              <div className="badge">
              <a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=BBEC2E51-D398-4D2D-AC68-4FBE14134B36&utm_content=lo&utm_medium=badge' target='_blank'>
                <img
                  className="img2" src={require('././static/images/google_play.png').default}
                  alt="android App"
                />
                </a>
                <a href='https://apps.apple.com/app/instagram/id389801252?vt=lo' target='_blank'>
                <img
                  className="img3" src={require('././static/images/app_store.png').default}
                  alt="ios app"
                />
                </a>

              </div>
            </div>

          </Col>
        </Row>
      </Container>


    </>
  );
};

export default Login;