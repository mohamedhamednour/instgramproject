import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Row, Col, Container } from 'reactstrap';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SignUp.css";
import axios from "axios";


const SignUp = () => {
  document.title = 'Sign Page'

  const baseURL = "http://127.0.0.1:8000/instgram/userall/";
  const [customerSignUp, setCustomerSignUp] = useState({

    password: '',
    username: '',
    first_name: '',
    last_name: '',
    email: ''


  });
  const handleChange = (event) => {
    setCustomerSignUp({
      ...customerSignUp,
      [event.target.name]: event.target.value
    })
  }
  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setCustomerSignUp(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, customerSignUp)
      .then((response) => {
        setCustomerSignUp(response.data);
      });
  }





  return (
    <>
      <Container>
        <Row>
          <Col xs={4}></Col>
          <Col xs={4}>
            <div className="form_data2">
              <form action="">
                <img className="img1" src={require('././static/images/instlogo.png').default} alt="logo" />
                <p>Sign up to see photos and videos <br></br> from your friends.</p>
                <button className="form-btn" type="submit">
                  <FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: 'white' }} /> &nbsp; Log In with Facebook
                </button>
                <div className='orclass'>
                  <hr></hr>
                  <span className="has-separator">Or</span>
                  <hr></hr>
                </div>
                <input type="email" placeholder="Enter your Email" onChange={handleChange} value={customerSignUp.email} name="email" required/>
                <input type="text" placeholder="Enter your First Name" onChange={handleChange} value={customerSignUp.first_name} name="first_name" required/>
                <input type="text" placeholder="Enter your Last Name" onChange={handleChange} value={customerSignUp.last_name} name="last_name" />
                <input type="text" placeholder="Enter your User Name" onChange={handleChange} value={customerSignUp.username} name="username" required/>
                <input type="password" placeholder="Enter your Password" onChange={handleChange} value={customerSignUp.password} name="password" required/>
            
                  <button className="form-btn" type="submit" onClick={createPost}>
                    Sign up
                </button>
              </form>
            </div>
            <div className="log_in">
              Have an account?
             &nbsp; <Link to="/">Log in</Link>
            </div>
            <div className="get-the-app2">
              <span>Get the app</span>
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
          <Col xs={4}></Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;