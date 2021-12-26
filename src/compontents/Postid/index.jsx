import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Container } from 'reactstrap';
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import { useParams } from "react-router-dom";
import AuthContext from '../Auth/Authcontext';
import Header from '../Header/index';
import { useNavigate } from 'react-router-dom';
import "../Postid/Postid.css";
import { HashLink as Link } from 'react-router-hash-link';


function Postid() {
    document.title = 'Add Comment';

    const {user} = useContext(AuthContext)
    const [postid, setpostid] = useState([]);
    const [comment, setcomment] = useState(null)
    const [getcomment, setgetcomment] = useState('');
    const { id } = useParams();
    
  const navigate = useNavigate()

    const Profile= user.user_id
       const image= postid.id
       console.log(image)

    useEffect(() => {
        
        IDpostid()
        IDgetcomment()
    }, []);

    const IDpostid = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/instgram/postid/${id}`)

        console.log(data)
        setpostid(data)
    }

    const addNewcomment = async () => {
        let formField = new FormData()
        formField.append('comment',comment)
        formField.append('image',image)
        formField.append('profile',Profile)
    
    
      
        await axios({
          method: 'post',
          url:'http://127.0.0.1:8000/instgram/addcomment/',
          data: formField
        }).then(response=>{
          console.log(response.data);
          navigate ('/home')
        })
    }

    const IDgetcomment = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/instgram/getcomment/${id}`)
  
        console.log(data)
        setgetcomment(data)
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Header/>
                    </Col>
                </Row>
                <Row  className='pro_div'>
                    <Col xs={1} > </Col>
                    <Col xs={6} >
                      <div className="comment_post">
                            <div className="post_header">
                                <Avatar
                                    className="post_avatar"
                                    alt="userimage"
                                    src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" />
                                <h2 className="post_user"> {postid.profile}</h2>
                            </div>
                            <img className="post_image" src={postid.image} alt="post" />

                            <div className="post_line" >
                             {/* <Likes/> */}
                             
                            </div>
                            <h5 className="post_text"> {postid.image_caption}</h5>
                            {/* <Comment/> */}
                            {/* <h5 className='add'>Add Comment</h5> */}
                           
                            <div>
                                <input
                                    className="form-control text_add"
                                    type="text"
                                    placeholder="Add Comment"
                                    name="comment"
                                    onChange={(e) => setcomment(e.target.value)}
                                    // onChange={handleChange2} value={customercomment.comment}
                                />

<button type="submit" className="post_button add"  onClick={addNewcomment}> Add Comment</button> 

                                {/* <button
                                    className="post_button"
                                    type="submit"
                                    onClick={addNewcomment}
                                >
                                    post
              </button> */}
                            </div>
                        

                        </div>
                        
                    
                      
                    </Col>

                    <Col xs={4} >
                <Link to='/home'>  <h5 className='show_btn'>Back to Home</h5></Link>  
                <h5 className='show_btn'>Show Comments</h5>
                    <div className='comments'>
                    { getcomment ? getcomment.map((p) => ([
                                 <h4> {p.profile} : {p.comment} </h4>,
                                 <p> {p.created_at}</p>,
                                 <hr></hr>
                                  ])): "no data"}
                                  
                                  </div>
                    </Col>
                    </Row>
               
                
                    
               </Container>
           </>
                    )

}

export default Postid