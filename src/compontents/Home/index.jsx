import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import Header from "../Header";
import "./Home.css";
import { Post }from "./Post";
import Footer from '../Footer';

function Home() {

    document.title = 'Home Page'

    // const [post, setpost] = useState([]);

    // useEffect(() => {

    //     // IDuser()
    //     IDpost()
    // }, []);

    // const IDpost = async () => {
    //     const { data } = await axios.get(`http://127.0.0.1:8000/instgram/Posts/`)

    //     console.log(data)
    //     setpost(data)
    // }
    
    return (
        <>
            <Container fluid>
                <Row>
                        <Header />
                </Row>
                <Row>
                    <Col xs={12} >
                    
                        
                   <Post />
                   
                   
                    </Col>
                </Row>
                {/* <Row className='footer'>
                    <Footer />
                </Row> */}
            </Container>
        </>

    )
}

export default Home

