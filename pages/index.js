import React from 'react';
import {Navbar, Nav, Button, Row, Col, Carousel, ButtonToolbar, Dropdown, Divider, Grid} from 'rsuite';
import Footer from "../components/dashboard/home/footer";
import { useRouter } from "next/router";
import CheckOutlineIcon from '@rsuite/icons/CheckOutline';
import Image from "next/image";
import Repair from '../assets/repair.png';
import BouncingSection from '../assets/bouncing.jpeg';
import CivilSection from '../assets/civil.jpg';
import ElectricalSection from '../assets/electrical.jpg';
import InterirorSection from '../assets/interior.jpg';
import BettingSection from '../assets/betting.jpg';
import KidSwingSection from '../assets/kid-swing.jpg';
import KidsfunSection from '../assets/kids-fun.jpg';
import KidstrainSection from '../assets/kids-train.png';
import RollcasterSection from '../assets/roll-caster.jpg';
import SecurityBuildingSection from '../assets/security-building.png';
import WaterSystemsSection from '../assets/water-systems.jpg';
import CookerSection from '../assets/cookersection.png';
import WashingSection from '../assets/washingsection.png';
import PowerSection from '../assets/power.png';
import SecuritySection from '../assets/security.jpeg';
import AudioSection from '../assets/audio-visual.jpg';
import LaundrySection from '../assets/laundy.jpg';
import KitchenSection from '../assets/kitchen.jpg';
import Electrical from '../assets/electrical.png';
import Washing from '../assets/washing.png';
import Cooker from '../assets/cooker.png';
import Dishwasher from '../assets/dishwasher.png';
import Boiler from '../assets/boiler.png';
import Cooler from '../assets/cooler.png';
import Oven from '../assets/oven.png';
import tumbDryer from '../assets/tumbldryr.png';
import { Box } from '@mui/material';
import "../styles/home.module.css";
import Head from 'next/head';

const NavBarInstance = () => {
    const router = useRouter();
    return (
        <Navbar style={{ padding: "10px", background: "linear-gradient(to bottom, rgba(0, 109, 126, 1) 0%, rgba(1, 103, 119, 1) 21%, rgba(5, 79, 90, 1) 57%, rgba(36, 30, 32, 1) 93%, rgba(36, 30, 32, 1) 100%)" }}>
            <Navbar.Brand href="#" style={{ marginTop: "-20px", fontSize: "30px", color: "orange", fontWeight: 700 }}>QUICKFIX-SI</Navbar.Brand>
            <Nav pullRight>
                <div style={{display:'flex', gap:"2em", color:'white'}}>
                    <h3>Email   Info@QuicKfix-Si.Com</h3>
                    <h3>CALL US: 0722779770</h3>
                    <Button color="cyan" appearance="primary" onClick={() => router.push('user/login')} style={{ marginRight: "10px", borderRadius: "50px" }}>Login to Dashboard</Button>
                </div>
                </Nav>
        </Navbar>
    );
};

const Index = () => {
    const [activeKey, setActiveKey] = React.useState(null);
    const [cooker, setCooker] = React.useState(true);
    const [washing, setWashing] = React.useState(false);
    const [betting, setBetting] = React.useState(false);
    const [kidsFun, setKidsFun] = React.useState(false);
    const [kidSwing, setKidSwing] = React.useState(false);
    const instance1  = (
        <ButtonToolbar >
            <Dropdown icon={<CheckOutlineIcon/>} title="Residential Appliances" trigger="hover" style={{background:"yellow"}}>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Refrigeration and air conditioning">
                    <Dropdown.Menu title="Cooker">
                        <Dropdown.Item onClick={() => {
                            setCooker(true);
                            setWashing(false);
                            window.scroll(500, 500);
                            setBetting(false);
                            setKidsFun(false);
                            setKidSwing(false);
                        }}
                        >
                            Cooker
                        </Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Menu title="Washing Machines">
                        <Dropdown.Item onClick={() => {
                            setWashing(true);
                            setCooker(false);
                            window.scroll(500, 500);
                            setBetting(false);
                            setKidsFun(false);
                            setKidSwing(false);
                        }}>
                            Washing Machine
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Power Generators ">
                    <Dropdown.Menu title="Power Generators Appliances" style={{padding:"10px"}}>
                        <Dropdown.Item>
                            <Image src={PowerSection} alt="power-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your power generator is well<br/> functional all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Kitchen ">
                    <Dropdown.Menu title="Kitchen Appliances">
                        <Dropdown.Item>
                            <Image src={KitchenSection} alt="kitchen-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your power generator is well<br/> functional all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Laundry ">
                    <Dropdown.Menu title="Laundry Appliances">
                        <Dropdown.Item>
                            <Image src={LaundrySection} alt="laundry-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your laundry is well<br/> functional and maintained all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Security Systems  ">
                    <Dropdown.Menu title="Security Systems">
                        <Dropdown.Item>
                            <Image src={SecuritySection} alt="cooker-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your Security<br/> tight all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Audio visuals equipment ">
                    <Dropdown.Menu title="Audio visuals Machines">
                        <Dropdown.Item>
                            <Image src={AudioSection} alt="cooker-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your Audio visuals are working <br/> all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
            </Dropdown>
        </ButtonToolbar>
    )
    const instance2  = (
        <ButtonToolbar >
            <Dropdown icon={<CheckOutlineIcon/>} title="Residential Appliances" trigger="hover" style={{background:"yellow"}}>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Refrigeration and air conditioning">
                    <Dropdown.Menu title="Cooker">
                        <Dropdown.Item onClick={() => {setCooker(true); setWashing(false)}}>Cooker</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Menu title="Fridge">
                        <Dropdown.Item onClick={() => { setWashing(true); setCooker(false)}}>Washing Machine</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Menu title="Appliances">
                        <Dropdown.Item>Cooker</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Power Generators ">
                    <Dropdown.Menu title="Power Generators Appliances" style={{padding:"10px"}}>
                        <Dropdown.Item>
                            <Image src={PowerSection} alt="power-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your power generator is well<br/> functional all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Kitchen ">
                    <Dropdown.Menu title="Kitchen Aplliances">
                        <Dropdown.Item>
                            <Image src={KitchenSection} alt="kitchen-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your power generator is well<br/> functional all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Laundry ">
                    <Dropdown.Menu title="Laundry Appliances">
                        <Dropdown.Item>
                            <Image src={LaundrySection} alt="laundry-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your laundry is well<br/> functional and maintained all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Security Systems  ">
                    <Dropdown.Menu title="Security Systems">
                        <Dropdown.Item>
                            <Image src={SecuritySection} alt="cooker-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your Security<br/> tight all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Audio visuals equipment ">
                    <Dropdown.Menu title="Audio visuals Machines">
                        <Dropdown.Item>
                            <Image src={AudioSection} alt="cooker-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your Audio visuals are working <br/> all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
            </Dropdown>
        </ButtonToolbar>
    )
    const instance3  = (
        <ButtonToolbar >
            <Dropdown icon={<CheckOutlineIcon/>} title="Residential Appliances" trigger="hover" style={{background:"yellow"}}>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Refrigeration and air conditioning">
                    <Dropdown.Menu title="Cooker">
                        <Dropdown.Item onClick={() => {setCooker(true); setWashing(false)}}>Cooker</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Menu title="Fridge">
                        <Dropdown.Item onClick={() => { setWashing(true); setCooker(false)}}>Washing Machine</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Menu title="Appliances">
                        <Dropdown.Item>Cooker</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Power Generators ">
                    <Dropdown.Menu title="Power Generators Appliances" style={{padding:"10px"}}>
                        <Dropdown.Item>
                            <Image src={PowerSection} alt="power-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your power generator is well<br/> functional all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Kitchen ">
                    <Dropdown.Menu title="Kitchen Aplliances">
                        <Dropdown.Item>
                            <Image src={KitchenSection} alt="kitchen-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your power generator is well<br/> functional all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Laundry ">
                    <Dropdown.Menu title="Laundry Appliances">
                        <Dropdown.Item>
                            <Image src={LaundrySection} alt="laundry-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your laundry is well<br/> functional and maintained all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Security Systems  ">
                    <Dropdown.Menu title="Security Systems">
                        <Dropdown.Item>
                            <Image src={SecuritySection} alt="cooker-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your Security<br/> tight all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{width:200}} icon={<CheckOutlineIcon/>} title="Audio visuals equipment ">
                    <Dropdown.Menu title="Audio visuals Machines">
                        <Dropdown.Item>
                            <Image src={AudioSection} alt="cooker-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your Audio visuals are working <br/> all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
            </Dropdown>
        </ButtonToolbar>
    )
    const instance4  = (
        <ButtonToolbar>
            <Dropdown icon={<CheckOutlineIcon/>} title="Building Services" trigger="hover">
                <Dropdown.Menu icon={<CheckOutlineIcon/>} title="Electrical works ">
                   <Dropdown.Item>
                       <Image src={ElectricalSection} alt="electrical-section" width={300} height={200}/>
                       <p style={{color:"black"}}>Quickfix makes sure your Electrical systems are<br/> functional all time</p>
                       <Divider/>
                       <center>
                           <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                               Download app
                           </Button>
                       </center>
                   </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon/>} title="Water System and drainage ">
                        <Dropdown.Item>
                            <Image src={WaterSystemsSection} alt="kitchen-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your Water systems are<br/> functional all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon/>} title="Interior works ">
                        <Dropdown.Item>
                            <Image src={InterirorSection} alt="kitchen-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your Interior is <br/> looking perfect all time</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon/>} title="Civil works ">
                        <Dropdown.Item>
                            <Image src={CivilSection} alt="kitchen-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your Civil work is<br/> delivered at all times</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon/>} title="Security Systems">
                        <Dropdown.Item>
                            <Image src={SecurityBuildingSection} alt="security-section" width={300} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your Security while building is<br/>well provided</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </ButtonToolbar>
    )
    const instance5  = (
        <ButtonToolbar>
            <Dropdown icon={<CheckOutlineIcon/>} title="Entertainment" trigger="hover">
                <Dropdown.Menu icon={<CheckOutlineIcon/>} title="Betting Machines ">
                    <Dropdown.Item onClick={() =>{
                        setCooker(false);
                        setWashing(false);
                        setBetting(true);
                        setKidsFun(false);
                        setKidSwing(false);
                        window.scroll(500, 500);
                    }}>
                        Betting Machines
                    </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon/>} title="Kids Fun Machines ">
                    <Dropdown.Item
                        onClick={() =>{
                            setCooker(false);
                            setWashing(false);
                            window.scroll(500, 500)
                            setBetting(false);
                            setKidsFun(true);
                            setBetting(false);
                            setKidsFun(false);
                            setKidSwing(false);
                        }}
                    >
                    </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon/>} title="Bouncing Castle ">
                   <Dropdown.Item>
                       <Image src={BouncingSection} alt="security-section" width={200} height={200}/>
                       <p style={{color:"black"}}>Quickfix makes sure your Kids equipments are<br/>functional and well mantained</p>
                       <Divider/>
                       <center>
                           <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                               Download app
                           </Button>
                       </center>
                   </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon/>} title="Kids Trains ">
                        <Dropdown.Item>
                            <Image src={KidstrainSection} alt="security-section" width={200} height={200}/>
                            <p style={{color:"black"}}>Quickfix makes sure your Kids equipments are<br/>functional and well mantained</p>
                            <Divider/>
                            <center>
                                <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                    Download app
                                </Button>
                            </center>
                        </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon/>} title="Roll caster  & Speed  Boats ">
                    <Dropdown.Item>
                        <Image src={RollcasterSection} alt="security-section" width={100} height={200}/>
                        <p style={{color:"black"}}>Quickfix makes sure your Roller-castles equipments are<br/>functional and well mantained</p>
                        <Divider/>
                        <center>
                            <Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>
                                Download app
                            </Button>
                        </center>
                    </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon/>} title="Kids Swings ">
                    <Dropdown.Item
                        onClick={() =>{
                            setCooker(false);
                            setWashing(false);
                            window.scroll(500, 500)
                            setBetting(false);
                            setKidsFun(false);
                            setKidSwing(true);
                        }}
                    >
                        Kid Swings
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </ButtonToolbar>
    )
    const instance6  = (
        <ButtonToolbar>
            <Dropdown icon={<CheckOutlineIcon/>} title="Green Energy" trigger="hover">
                <Dropdown.Item>Installation & Maintenance</Dropdown.Item>
                <Dropdown.Item>Energy Audit </Dropdown.Item>
                <Dropdown.Item>Energy saving consultation</Dropdown.Item>
            </Dropdown>
        </ButtonToolbar>
    )
    return (
        <div>
            <Head>
                <title>Quickfix</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBarInstance activeKey={activeKey} onSelect={setActiveKey} />
            <Box sx={styles.navbar}>
                    {instance1}
                    {instance2}
                    {instance3}
                    {instance4}
                {instance5}
                {instance6}
            </Box>
            <div style={{ display: "flex", padding: '10px',  background: "#8e8e93" }}>
                <div>
                    <h2 style={{color:"white"}}>Reliable service when
                        you need it the most</h2><br/>
                <Carousel autoplay={true}>
                    <div style={{display:'flex', marginBottom:"-50px"}}>
                        <div style={{marginRight:"20px"}}><Image src={Electrical} alt="electrical" /><h5 style={{color:"white"}}>Electrical works</h5></div>
                        <div style={{marginRight:"20px"}}><Image src={Washing} alt="washing" /><h5 style={{color:"white"}}>Electrical works</h5></div>
                        <div style={{marginRight:"20px"}}><Image src={Cooker} alt="shape right" /><h5 style={{color:"white"}}>Electrical works</h5></div>
                        <div style={{marginRight:"20px"}}><Image src={Dishwasher} alt="shape right" /><h5 style={{color:"white"}}>Electrical works</h5></div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{marginRight:"20px"}}><Image src={Boiler} alt="shape right" /><h5 style={{color:"white"}}>Electrical works</h5></div>
                        <div style={{marginRight:"20px"}}><Image src={Cooler} alt="shape right" /><h5 style={{color:"white"}}>Electrical works</h5></div>
                        <div style={{marginRight:"20px"}}><Image src={Oven} alt="shape right" /><h5 style={{color:"white"}}>Electrical works</h5></div>
                        <div style={{marginRight:"20px"}}><Image src={tumbDryer} alt="shape right" /><h5 style={{color:"white"}}>Electrical works</h5></div>
                    </div>
                    </Carousel>
                </div>
                <div style={{ float: "right" }}>
                    <h3 style={{color:"black"}}>Here to help Keep your
                        appliances working
                    </h3>
                    <Image src={Repair} alt="shape right" width="350" /><Divider/>
                    <center><Button color="cyan" appearance="primary" style={{borderRadius:"50px", padding:"15px", width:"100%"}}>Get Service</Button></center>
                </div>
                </div>
            {cooker && (
                <Grid fluid>
                    <Row>
                        <Col xs={8}><Image src={CookerSection} alt="cooker-section"/></Col>
                        <Col xs={16}>
                            <div style={{padding:"10px"}}>
                            <h3>Cooker Repairs and Maintenance</h3><Divider/>
                            <p style={{fontSize:"24px", lineHeight:2.0}}>Searching for a reliable company to repair your cooker? Well look no further!
                                Quickfix will come out and fix it on a day that works for you. Download app on Playstore(Android Users) to get services
                            </p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            )}
            {washing && (
                <Grid fluid>
                    <Row>
                        <Col xs={8}><Image src={WashingSection} alt="washing-section"/></Col>
                        <Col xs={16}>
                            <div style={{padding:"10px"}}>
                                <h3>Washing Machine Repairs and Maintenance</h3><Divider/>
                                <p style={{fontSize:"24px", lineHeight:2.0}}>Searching for a reliable company to repair your cooker? Well look no further!
                                    Quickfix will come out and fix it on a day that works for you.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            )}
            {betting && (
                <Grid fluid>
                    <Row>
                        <Col xs={8}><Image src={BettingSection} alt="security-section" /></Col>
                        <Col xs={16}>
                            <div style={{padding:"10px"}}>
                                <h3>Washing Machine Repairs and Maintenance</h3><Divider/>
                                <p style={{fontSize:"24px", lineHeight:2.0}}>Searching for a reliable company to repair your cooker? Well look no further!
                                    Quickfix will come out and fix it on a day that works for you.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            )}
            {kidsFun && (
                <Grid fluid>
                    <Row>
                        <Col xs={8}><Image src={KidsfunSection} alt="security-section" /></Col>
                        <Col xs={16}>
                            <div style={{padding:"10px"}}>
                                <h3>Washing Machine Repairs and Maintenance</h3><Divider/>
                                <p style={{fontSize:"24px", lineHeight:2.0}}>Searching for a reliable company to repair your cooker? Well look no further!
                                    Quickfix will come out and fix it on a day that works for you.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            )}
            {kidSwing && (
                <Grid fluid>
                    <Row>
                        <Col xs={8}><Image src={KidSwingSection} alt="security-section" /></Col>
                        <Col xs={16}>
                            <div style={{padding:"10px"}}>
                                <h3>Washing Machine Repairs and Maintenance</h3><Divider/>
                                <p style={{fontSize:"24px", lineHeight:2.0}}>Searching for a reliable company to repair your cooker? Well look no further!
                                    Quickfix will come out and fix it on a day that works for you.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            )}
            <Footer />
        </div>
    );
};

export default Index;

const styles = {
    navbar: {
        paddingY:"1em",
        paddingX:"5em",
        background: "whitesmoke",
        display: 'flex',
        gap: "2em",
        justifyContent:"center",
    }
}