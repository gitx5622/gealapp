import React from 'react';
import { Navbar, Nav, Grid, Row, Col, Button, Panel, Avatar, Message, Divider } from 'rsuite';
import Footer from "../components/dashboard/home/footer";
import { useRouter } from "next/router";
import Repair from "../assets/repair.png";
import HomeRepair from "../assets/green-energy.jpg";
import Maintenance from "../assets/maintenance.png";
import Image from "next/image";
import ShapeLeft from '../assets/shapeleft.png';
import Electrical from '../assets/electrical.png';
import Civil from '../assets/civil.png';
import ShapeRight from '../assets/shaperight.png';
import Carousel from 'react-multi-carousel';
import "../styles/home.module.css";

const NavBarInstance = () => {
    const router = useRouter();
    return (
        <Navbar style={{ padding: "10px" }}>
            <Navbar.Brand href="#" style={{ marginTop: "-20px", fontSize: "25px", color: "orange", fontWeight: 700 }}>QUICKFIX-SI</Navbar.Brand>
            <Nav pullRight>
                <Button color="cyan" appearance="primary" onClick={() => router.push('user/login')} style={{ marginRight: "10px", borderRadius: "50px" }}>Login to Dashboard</Button>
            </Nav>
        </Navbar>
    );
};
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Index = () => {
    const [activeKey, setActiveKey] = React.useState(null);
    return (
        <div>
            <NavBarInstance activeKey={activeKey} onSelect={setActiveKey} />
            <div style={{ padding: '0px', background: "linear-gradient(to bottom, rgba(0, 109, 126, 1) 0%, rgba(1, 103, 119, 1) 21%, rgba(5, 79, 90, 1) 57%, rgba(36, 30, 32, 1) 93%, rgba(36, 30, 32, 1) 100%)" }}>
                <Grid fluid>
                    <Row style={{ paddingLeft: "20px", marginTop: '10px', }}>
                        <Col xs={24} sm={24} md={12}>
                            <h1 style={{ color: "white" }}>Residential Appliances Maintenance</h1>
                            <p style={{ color: "white", fontSize: '24px', marginTop: "5px", lineHeight: 2.5 }}>
                                Reliable service when
                                you need it the most
                            </p><br /><br />
                            <Button color="orange" appearance="primary" style={{ padding: "12px", color: "white", borderRadius: "50px" }}>Get Started</Button>
                        </Col>
                        <Col xs={24} sm={24} md={12}>
                            <Grid fluid>
                                <Row>
                                    <Col xs={12} sm={12} md={18}>
                                        <h3 style={{ color: "orange" }}>Our Services:</h3>
                                        <ul style={{ listStyle: "none", fontSize: "30px", color: "white" }}>
                                            <li style={{ marginBottom: "10px" }}><Avatar size="md" circle style={{ background: "orange" }}>QS</Avatar> Kitchen</li>
                                            <li><Avatar size="md" circle style={{ background: "orange" }}>QS</Avatar> Laundry </li>
                                            <li><Avatar size="md" circle style={{ background: "orange" }}>QS</Avatar> Appliances</li>
                                            <li><Avatar size="md" circle style={{ background: "orange" }}>QS</Avatar> Power GeneratoQS </li>
                                            <li><Avatar size="md" circle style={{ background: "orange" }}>QS</Avatar> Security Systems </li>
                                            <li><Avatar size="md" circle style={{ background: "orange" }}>QS</Avatar> Audi visuals equipment  </li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <Image src={Repair} alt="homepage" width="300" height="800" />
                                    </Col>
                                </Row>
                            </Grid>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <Message style={{ background: "#00BCD4", paddingLeft: "5em" }}>
                <h3 style={{ color: "white" }}>Coronavirus - You are in safe hands</h3>
                <p style={{ color: "white" }}>All Services still available with measures in place to protect both customers and employees, keeping everyone safe.</p>
            </Message>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ float: "left" }}>
                    <Image src={ShapeLeft} alt="shape right" width="200" height="320" />
                </div>
                <div style={{ marginRight: "-50px", marginLeft: "-50px" }}>
                    <div id="works" style={{ display: "flex", justifyContent: 'space-between', gap: '2em' }}>
                        <div><Panel shaded><Image src={Electrical} alt="shape right" width="200" height="200" /><h5>Electrical works</h5></Panel></div>
                        <div><Panel shaded><Image src={Civil} alt="shape right" width="200" height="200" /><h5>Civil works</h5></Panel></div>
                        <div><Panel shaded><Image src={Electrical} alt="shape right" width="200" height="200" /><h5>Water System & drainage </h5></Panel></div>
                        <div><Panel shaded><Image src={Civil} alt="shape right" width="200" height="200" /><h5>Interior works </h5></Panel></div>
                    </div><br />
                    <div style={{ display: "flex", justifyContent: "center", gap: "2em" }}>
                        <Button color="orange" appearance="primary">Commercial Appliances  Maintenance </Button>
                        <Button color="cyan" appearance="primary">Hotels & Institutions Appliances Maintenance</Button>
                    </div><br />
                </div>
                <div style={{ float: "right" }}>
                    <Image src={ShapeRight} alt="shape right" width="200" height="320" />
                </div>
            </div>
            <Grid>
                <Row>
                    <center><h2>Quickfix Repairs and Maintenance</h2></center>
                    <Col xs={24} sm={24} md={12}>
                        <center><h3 style={{ color: "orange" }}>Green Energy Services</h3>
                            <Image src={HomeRepair} alt="homepage" width="400" height="300" /></center>
                        <ul style={{ listStyle: "none", fontSize: "30px" }}>
                            <li><Avatar style={{ background: "green" }} size="sm" circle>QS</Avatar> Maintenance</li>
                            <li><Avatar style={{ background: "green" }} size="sm" circle>QS</Avatar> Installation</li>
                            <li><Avatar style={{ background: "green" }} size="sm" circle>QS</Avatar> Energy Audit </li>
                            <li><Avatar style={{ background: "green" }} size="sm" circle>QS</Avatar> Energy saving consultation</li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <center><h3 style={{ color: "orange" }}>Entertainment Maintenance & Repairs</h3>
                            <Image src={Maintenance} alt="homepage" width="400" height="300" /></center>
                        <Grid fluid>
                            <Row>
                                <Col xs={24} sm={24} md={12}>
                                    <ul style={{ listStyle: "none", fontSize: "25px" }}>
                                        <li> <Avatar style={{ background: "#FA8900" }} size="sm" circle>QS</Avatar> Betting Machines </li>
                                        <li> <Avatar style={{ background: "#FA8900" }} size="sm" circle>QS</Avatar> Kinds Fun Machines </li>
                                        <li> <Avatar style={{ background: "#FA8900" }} size="sm" circle>QS</Avatar> Bouncing Castle </li>
                                        <li> <Avatar style={{ background: "#FA8900" }} size="sm" circle>QS</Avatar> Audi visuals equipment </li>
                                    </ul>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <ul style={{ listStyle: "none", fontSize: "25px" }}>
                                        <li> <Avatar style={{ background: "#FA8900" }} size="sm" circle>QS</Avatar> Maintenance</li>
                                        <li> <Avatar style={{ background: "#FA8900" }} size="sm" circle>QS</Avatar> Installation</li>
                                        <li> <Avatar style={{ background: "#FA8900" }} size="sm" circle>QS</Avatar> Energy Audit </li>
                                        <li> <Avatar style={{ background: "#FA8900" }} size="sm" circle>QS</Avatar> Energy saving consultation</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                </Row>
            </Grid>
            <div style={{ background: "whitesmoke", paddingTop: "20px", marginBottom: "-30px" }}>
                <center><h3>Other Repairs and maintenance offered</h3></center><br />
                <Carousel
                    swipeable={false}
                    arrows={false}
                    draggable={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div><center><Button style={{ padding: "20px", background: "#006E7D", color: "white" }}>Kids Trains </Button></center></div>
                    <div><center><Button style={{ padding: "20px" }} color="cyan" appearance="ghost">Roll caster </Button></center></div>
                    <div><center><Button style={{ padding: "20px" }} color="red" appearance="primary">Speed  Boats </Button></center></div>
                    <div><center><Button style={{ padding: "20px" }} color="orange" appearance="ghost">Kids Swings </Button></center></div>
                    <div><center><Button style={{ padding: "20px", background: "#006E7D", color: "white" }}>Power Generators </Button></center></div>
                    <div><center><Button style={{  padding: "20px" }} color="green" appearance="primary">Security Systems</Button></center></div>
                    <div style={{ marginBottom: "50px" }}><center><Button style={{ padding: "20px" }} color="red" appearance="ghost">Betting Machines </Button></center></div>
                    <div><center><Button style={{ padding: "20px" }} color="blue" appearance="primary">Energy Audit </Button></center></div>
                </Carousel>
            </div>
            <br />
            <Footer />
        </div>
    );
};

export default Index;