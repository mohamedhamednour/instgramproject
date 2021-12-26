import React from "react";
import { Row, Col, Container } from 'reactstrap';
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={1}>
                    </Col>

                    <Col xs={12} id='footer'>
                        {/* <Footer> */}
                        <span>Instgram Website &copy; All copyrights Reserved ... ITI Mansoura ❤❤❤</span>
                        {/* </Footer> */}
                     
                    </Col>
                    <Col xs={1}>
                    </Col>
                </Row>
            </Container>


        </>
    );
};

export default Footer;