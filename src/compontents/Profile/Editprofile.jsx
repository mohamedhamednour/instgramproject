import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import "./Profile.css";
import Header from "../Header";
import AuthContext from '.././Auth/Authcontext';
import Footer from "../Footer";
import { HashLink as Link } from 'react-router-hash-link';



const Editprofile = () => {
    document.title = 'Update Profile'

    const {user} = useContext(AuthContext)
    const { ID, id } = useParams();
    const [posts, setCount] = useState([]);
    let navigate =  useNavigate();

    // Update Data Of User
    const baseURL = `http://127.0.0.1:8000/instgram/userid/${ID}`;
    const [UpdateUserData, setUpdateUserData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: ''
      
    });
    const handleChange = (event) => {
        setUpdateUserData({
          ...UpdateUserData,
          [event.target.name]: event.target.value
     })
  }
    React.useEffect(() => {
           axios.get(`${baseURL}`).then((response) => {
           setUpdateUserData(response.data);
    });
    }, []);

  function UpdateData() {
    axios({
        method: 'PUT',
        url: `http://127.0.0.1:8000/instgram/userid/${ID}`,
        data: UpdateUserData
    }).then(response => {
        console.log(response.data);
        setUpdateUserData(response.data);   
    })
  }

//   Update Data Of Profile Of User
const profileURL = `http://127.0.0.1:8000/instgram/update/${ID}`;
const [UpdateProfileData, setUpdateProfileData] = useState({
    bio: '',
    profile_pic: ''
});
const changeProfile = (event) => {
    setUpdateProfileData({
      ...UpdateProfileData,
      [event.target.name]: event.target.value
 })
}
React.useEffect(() => {
       axios.get(`${profileURL}`).then((response) => {
        setUpdateProfileData(response.data);
});
}, []);

function UpdateProfile() {
axios({
    method: 'PUT',
    url: `http://127.0.0.1:8000/instgram/update/${ID}`,
    data: UpdateProfileData
}).then(response => {
    console.log(response.data);
    setUpdateProfileData(response.data); 
    console.log()  
})

}





  useEffect(()=>{   
    appp()
 },[]);
      
  const appp = async() =>{
    const {data} =  await axios.get(`http://127.0.0.1:8000/instgram/profile/${ID}`) 
    console.log(data)
    setCount(data)
  }



    return (
        <>
            <Container fluid>
                <Row>
                    <Header />
                </Row>
                <Row className="profile_div">
                    <Col xs={2} ></Col>
                    <Col xs={8} >
                        <div className="my_data_edit">
                            <div className='left_div'>
                            <div className='sub_data'>
                                    <label htmlFor='profile_pic'>Update Your Photo</label>
                                    <input  className="form-control" type='file' id="profile_pic" name="profile_pic"
                                    onChange={changeProfile}  value={UpdateProfileData.profile_pic} />                            
                                   
                                </div>
                            <div className='sub_data'>
                                    <label htmlFor='bio'>Bio</label>
                                    <textarea className="form-control" name='bio' cols='32' rows='4'
                                     onChange={changeProfile}  value={UpdateProfileData.bio}></textarea>
                                </div>
                                <Link to={`/profile/${user.user_id}`}> 
                                 <input type='submit' value='Change Your Profile' className="btn_change"
                                  onClick={UpdateProfile}  />
                             
                                 </Link>

                            </div>
                            <form action="" className="myform">
                                <div className='sub_data'>
                                    <label htmlFor='first_name'>First Name</label>
                                    <input className="form-control" type='text' name='first_name' onChange={handleChange}  value={UpdateUserData.first_name} />
                                </div>
                                <div className='sub_data'>
                                    <label htmlFor='last_name'>Last Name</label>
                                    <input className="form-control" type='text' name='last_name' onChange={handleChange}  value={UpdateUserData.last_name} />
                                </div>
                                <div className='sub_data'>
                                    <label htmlFor='email'>Email</label>
                                    <input className="form-control" type='email' name='email' onChange={handleChange}  value={UpdateUserData.email} />
                                </div>
                                <div className='sub_data'>
                                    <label htmlFor='username'>User Name</label>
                                    <input className="form-control" type='text' name='username' onChange={handleChange}  value={UpdateUserData.username} />
                                </div>
                              

                                <Link to={`/profile/${user.user_id}`}>   <input type='submit' value='Update Your Data' onClick={UpdateData} /></Link>

                            </form>

                        </div>

                    </Col>
                    <Col xs={2}></Col>
                </Row>
                {/* <Row className="footer">
                    <Footer />
                </Row> */}


            </Container>


        </>
    );
};

export default Editprofile;