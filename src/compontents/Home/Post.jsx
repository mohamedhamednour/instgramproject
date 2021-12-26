import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Container } from 'reactstrap';
import "./Home.css";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import Comment from "./comment";
import Likes from './Like';
import {useNavigate}  from "react-router-dom";
import AuthContext from '../Auth/Authcontext';
import { HashLink as Link } from 'react-router-hash-link';
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Post = (p) => {

  // document.title = 'Home Page';

  const {user} = useContext(AuthContext)
  const myuser = user.user_id;
  console.log(myuser)
  let navigate = useNavigate();


  const [image, setImage] = useState(null)
  const [image_name, setName] = useState(null)
  const [profile, setPhone] = useState(user.user_id)
  

  const addNewStudent = async () => {
  let formField = new FormData()
  formField.append('image_name',image_name)  
  formField.append('profile',profile)

  if(image !== null) {
    formField.append('image', image)
  }

  await axios({
    method: 'post',
    url:'http://127.0.0.1:8000/instgram/Posts/',
    data: formField
  }).then(response=>{
    console.log(response.data);
    navigate('/home')
  })
}


    const [mypost, setmypost] = useState([]);
     

    useEffect(() => {
        // IDuser()
        IDpost()
        IDlimit()
    }, []);

    const IDpost = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/instgram/viewfollowers/${myuser}`)
            console.log(data)
            setmypost(data)
    }

    const baseURL2 = "http://127.0.0.1:8000/instgram/get";
    const [customercomment, setCustomercomment] = useState({
        comment: '',
    });

    React.useEffect(() => {
        axios.get(`${baseURL2}`).then((response) => {
          setCustomercomment(response.data);
        });
      }, []);
    const handleChange2 = (event) => {
      setCustomercomment({
        ...customercomment,
        [event.target.name]: event.target.value
      })
    }
      function createcomment() {
        axios
          .post(baseURL2, customercomment)
          .then((response) => {
            setCustomercomment(response.data);
          });
      }

      // Add Limit Users
      const [limituser, setlimituser] = useState([]);

      const IDlimit = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/instgram/limitusers`)
  
        console.log(data)
        setlimituser(data)
    }
      

    return (
        <>
            <Container fluid>
                <Row className='post_div'>
                    <Col xs={1} > </Col>
                    <Col xs={6} >

                      {/* {post.length > 0 ? ( */}
                            {/* { mypost.map((p) =>    */}
       
                      <div className="post">
                      <div className="post_header">
                          <Avatar
                              className="post_avatar"
                              alt="userimage"
                              src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" />
                          <h2 className="post_user"> {p.profile}</h2>
                      </div>
                      <img className="post_image" src={`http://127.0.0.1:8000${p.image}`} alt="post" />

                      <div className="post_like" >
                       {/* <Likes/> */}
                       <Link to="/home"> <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: 'gray' }} className='icons2' /></Link> 

  <Link to={`/postid/${mypost.id}`}>
     <FontAwesomeIcon icon={faComment} size="lg" style={{ color: 'gray' }} className='icons_comment' />
     </Link>
                      </div>
                      <h5 className="post_text"> {p.image_caption}</h5>
                      {/* <Comment/> */}
                      <div className='comments'>
                        <h5 className='show_comments'>Show Comments</h5>
                  <div>

                   
                    { p.comment ? p.comment.map((c) => ([  
                        // Name Of User                      
                         <span> {c.profile}</span>,
                         <span> {c.comment}</span>,
                         <span>....</span>
                        ])): "no data"}
                  </div>
                      </div>                
                  </div>     
              
                    {/* //     )  ) : 
                    //  ( <div className="no__postError">No posts</div> )
                             ) } */}

                    </Col>

                {/* Follow Suggestions */}
                    <Col xs={4}>
                      <div className='followers'>
                        <p>Suggestions For You</p>

                        
                        {limituser.map(limituser=>
                           <Link to={`/profile/${limituser.id}`} className='link_follow'>
{ limituser.id === user.user_id ? <button className='hide_me'>Hello</button> :
                           <div className='follow_account'>
                              <div className='avatar'>
                                 <Avatar
                                    className="follow_avatar"
                                    alt="userphoto"
                                    src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" />
                              </div>
                          <h6>{limituser.username}</h6>                  
                        <span className='btn_follow'>View Profile</span>                    
                        </div>
}
                        </Link>
                        )}
                        
                      </div>

                    
                    </Col>
                    <Col xs={1} ></Col>
    
                </Row>
               
                    
            </Container>
        </>

    )
}



