import React from 'react';
import {Navbar, Nav, Dropdown, Grid, Row, Col, Button, Divider} from 'rsuite';
import Footer from "../components/dashboard/home/footer";
import { useRouter } from "next/router";

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
    const router = useRouter();
    return (
        <Navbar {...props}>
            <Navbar.Brand href="#" style={{fontSize:"20px"}}>Graphine East Efrica Limited</Navbar.Brand>
            <Nav pullRight>
                <Button onClick={() => router.push('user/login')} style={{marginTop: "10px", marginRight:"10px"}}>Login</Button>
            </Nav>
        </Navbar>
    );
};

const Index = () => {
    const [activeKey, setActiveKey] = React.useState(null);
    return (
        <div>
            <NavBarInstance appearance="inverse" activeKey={activeKey} onSelect={setActiveKey} />
            <Grid fluid>
                <Row style={{marginLeft:"30px", marginRight:"30px", marginTop:'10px'}}>
                    <Col xs={12}>
                        <h1>M&R  is a mobile application with a web service in order to get Maintenance or Repair  services. </h1>
                           <p style={{fontSize: '20px', marginTop: "5px", lineHeight: 2.5}}> The mobile application will work on mobile Android devices and also IoS devices..
                            It will have functions as data managing, web based searching, M&R request (requesting a service
                            man for repair and maintenance services ), messaging with users through email.
                           </p><br/><br/>
                       <Button style={{background: "#3498ff", color: "white"}}>Get Started</Button>
                    </Col>
                    <Col xs={12}>
                        <center>
                            <img src="https://bodaorda.toprated.co.ke/static/media/pic1.52c27ba0.png" alt="homepage" width="300" height="500"/>
                        </center>
                    </Col>
                </Row>
            </Grid><Divider/>
            <div style={{marginLeft:"30px", marginRight:"30px"}}>
                <center><h3 style={{color:"#3498ff" }}>Product Functions</h3></center><br/>
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <div style={{marginLeft:"70px", marginRight:"30px"}}>
                                <img src="https://bodaorda.toprated.co.ke/static/media/pic1.52c27ba0.png" alt="homepage" width="300" height="500"/>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <h4>M&R  consists of these main tasks:</h4>
                            <p style={{fontSize:"2em", lineHeight: 2.5}}>
                                • Data Managing<br/>
                                • Web based search<br/>
                                • Messaging<br/>
                                • Payments<br/>
                                • Application documents receiving from service men
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <br/>
            <Footer/>
        </div>
    );
};

export default Index;