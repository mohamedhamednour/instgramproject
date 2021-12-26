import React, { useEffect, useState,useContext } from "react";
import { useParams , Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import "./Profile.css";
import Header from "../Header";
import { HashLink as Link } from 'react-router-hash-link';
import AuthContext from '../Auth/Authcontext';
import { faUpload, faCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//import Footer from "../Footer";


const Profile = () => {
    document.title = 'Profile Page'
    const {user, loginUser} = useContext(AuthContext);

    const [posts, setCount] = useState([]);
    const [postid, setpostid] = useState([]);
    const [profilee, setProfile] = useState([]);
    const { id } = useParams();
    const [following, setfollowing] = useState([]);
    const [follower, setfollowers] = useState([]);

    const [followers , serfollower] = useState([])
    const user_from= user.user_id
    const user_to= posts.id
     


    useEffect(() => {
        IDpost()
         IDuser()
         IDprofile()
         IDfollowing()
         IDfollowers()
    }, []);

    const IDuser = async() =>{
        const {data} =  await axios.get(`http://127.0.0.1:8000/instgram/userid/${id}`)
      
        console.log(data)
        setCount(data)
        console.log("********************")
        console.log(user.user_id)
          
      }
      const IDpost = async() =>{
        const {data} =  await axios.get(`http://127.0.0.1:8000/instgram/getp/${id}`)
      
        console.log(data)
        setpostid(data)
        
       
      }

    const IDprofile = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/instgram/getprofile/${id}`)
        console.log(data)
        setProfile(data)
    }

    const [profile_pic, setProfilepic] = useState(null)
    const [profile, setPhone] = useState(user.user_id)
    let navigate = useNavigate()

    // Add Profile
    const addmyphoto = async () => {
        let formField = new FormData()
        formField.append('user',profile)
      
        if(profile_pic !== null) {
          formField.append('profile_pic', profile_pic)
        }
      
        await axios({
          method: 'post',
          url:'http://127.0.0.1:8000/instgram/addphoto/',
          data: formField
        }).then(response=>{
          console.log(response.data);
          navigate(`/profile/${user.user_id}`)
        })
      }

      // Add Followers
      const IDfollowing = async() =>{
        const {data} =  await axios.get(`http://127.0.0.1:8000/instgram/getfollowing/${id}`)     
        console.log(data)
        setfollowing(data)
        
      }

      const IDfollowers = async() =>{
        const {data} =  await axios.get(`http://127.0.0.1:8000/instgram/getfollowers/${id}`)
      
        console.log(data)
        setfollowers(data)
        
       
      }

      // Button Follow
      const addNewfollow = async () => {

      let formField = new FormData()
      formField.append('user_from',user_from)
      formField.append('user_to',user_to)
    
      await axios({
      method: 'post',
      url:'http://localhost:8000/instgram/follow/',
      data: formField
    }).then(response=>{
      console.log(response.data);
    })
  
  }

    return (
        <>
            <Container fluid>
                <Row>
                    <Header />
                </Row>
                <Row className="profile_div">
                    <Col xs={1} ></Col>
                    <Col xs={3} >
                    
                        <div className='my_photo'>

                  <input type='hidden' />
                        { profilee ? profilee.map((pro) => ([ 
                        <img className="myimage" src={`http://127.0.0.1:8000${pro.profile_pic}`} alt="myphoto" />
                    ])): "no data"} 
                    
                        </div>
                    </Col>

                    <Col xs={2} >
                    <div className="d-center">
                    { posts.id === user.user_id ?
                        <label htmlFor="profile_pic">Please Choose Your Photo</label> 
                        :   <label className="btn_disabled">You Can't Choose any Photo</label>
                      }

                      { posts.id === user.user_id ?
                        <input type="file" id="profile_pic"  onChange={(e)=>setProfilepic(e.target.files[0])}/>
                        : 
                        <input type="file" id="btn_disabled"  onChange={(e)=>setProfilepic(e.target.files[0])} disabled/>
                      }

                     { posts.id === user.user_id ?
                          <input type="hidden"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Name"
                                name="user"
                                value={profile}
                                onChange={(e) => setPhone(e.target.value)}
                                /> :                       
                          <input type="hidden"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Name"
                                name="user"
                                value={profile}
                                onChange={(e) => setPhone(e.target.value)}
                                disabled/> 
                      }   

{ posts.id === user.user_id ?
  <button type="button" className="btn btn-primary btn-floating" onClick={addmyphoto}>
                      Upload &nbsp; <FontAwesomeIcon icon={faUpload} size="1x" style={{ color: '#fff' }} /> 
                      </button>
                   :  <button type="button" className="btn btn-primary btn-floating" onClick={addmyphoto} disabled>
                 Disabled  Upload &nbsp; 
                   </button>


}
                        </div>

                        </Col>
                    <Col xs={4} className='my_data'>
                       <div className='data_edit'>
                       <h2>{posts.first_name}</h2> &nbsp;
                        <h2>{posts.last_name}</h2>


                  { posts.id === user.user_id ?
                   <button className="btn_hidden">Ayaaa</button> :     
                                          <button className="btn btn-primary w-25" onClick={addNewfollow}
                                          >Follow
                         &nbsp; <FontAwesomeIcon icon={faCheck} size="sm" style={{ color: '#fff' }} /> </button>
}
                        <h4>{posts.username}</h4>
                        <h5>{posts.email}</h5>

                       
                    <div className='counts'> 
                             
                            <span>{postid.length} Posts</span>
                            <span>{follower.length} Followers</span>
                            <span>{following.length} Following</span>
                        </div>
                      
<div className="horizon progress-bar progress-bar-striped bg-dark" role="progressbar"></div>
{ profilee ? profilee.map((pro) => ([ 
                        <p className="bio_account">{pro.bio}</p>
                    ])): "no data"} 

                     {/* {this.state.value == 'user.user_id' ? <button>Edit Profile</button> : <button>Hello</button> } */}
                      
                      
                        {/* <Link to={`/edit/${user.user_id}`}> <button>Edit Profile</button></Link> */}
                            {/* <Link to='/'> <button onClick={logoutUser} className='bg-danger'>Logout</button></Link> */}
                            </div>
                      

                      
      
                   
                        
                    </Col>
                    <Col xs={2}></Col>
                </Row>
                 <Row className="horizontal">
                    <Col xs={1}></Col>
                    <Col xs={10}> <hr></hr></Col>
                    <Col xs={1}></Col>
                </Row>

                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>    
                      <div className='img_post'>
                        { postid ? postid.map((p) => ([
                      <img className="myimage"  key={p.id} src={`http://127.0.0.1:8000${p.image}`}/>,
                    //    <p> {p.image_caption}</p>
                       
                
                    ])): "no data"}
                             {/* <img className="myimage"  src={postid.image} alt="logo" /> */}
                            
                        

                          </div> 
                            {/* <img className="myimage" src={require('././static/images/inst1.jpg').default} alt="logo" /> 
                          <img className="myimage" src={require('././static/images/inst1.jpg').default} alt="logo" />  
                              */}
                        
              

                    </Col>
                    <Col xs={1}></Col>
                </Row> 
                {/* <Row>
                    <Footer />
                </Row> */}
            </Container>


        </>
    );
                      };

export default Profile;