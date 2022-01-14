import React from 'react';
import { Navbar, Nav, Button, Row, Col, Tag, Carousel, ButtonToolbar, Dropdown, Divider, Grid } from 'rsuite';
import Footer from "../components/dashboard/home/footer";
import Link from "next/link";
import CheckOutlineIcon from '@rsuite/icons/CheckOutline';
import Image from "next/image";
import Repair from '../assets/repair.png';
import BouncingSection from '../assets/bouncing.jpeg';
import CivilSection from '../assets/civil.jpg';
import Logo from '../assets/logo.jpeg';
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
import Consultation from '../assets/consultants.jpg';
import Installation from '../assets/installation.jpg';
import EnergyAudit from '../assets/energy-audit.png';
import Dishwasher from '../assets/dishwasher.png';
import Boiler from '../assets/boiler.png';
import { useMedia } from 'react-use-media';
import PhoneIcon from '@rsuite/icons/Phone';
import Cooler from '../assets/cooler.png';
import Oven from '../assets/oven.png';
import tumbDryer from '../assets/tumbldryr.png';
import { Box } from '@mui/material';
import "../styles/home.module.css";
import Head from 'next/head';


const NavBarInstance = () => {
    return (
        <Navbar style={{ padding: "10px", background: "white" }}>
            <Navbar.Brand href="#" style={{ borderRadius:"10px", marginTop: "-30px", fontSize: "30px", color: "orange", fontWeight: 700 }}><Image width="100px" height="65px" src={Logo} alt="logo"/></Navbar.Brand>
            <Nav pullRight>
                <div style={{ display: 'flex', gap: "2em", color: 'black' }}>
                    <h3>Email   Info@QuicKfix-Si.Com</h3>
                    <h3>CALL US: 0722779770</h3>
                    <Link>
                    <a href="/user/login">
                    <Button color="cyan" appearance="primary" style={{ marginRight: "10px", borderRadius: "50px" }}>Login to Dashboard</Button>
                    </a>
                    </Link>
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
    const [bouncing, setBouncing] = React.useState(false);
    const [civil, setCivil] = React.useState(false);
    const [power, setPower] = React.useState(false);
    const [kitchen, setKitchen] = React.useState(false);
    const [laundry, setLaundry] = React.useState(false);
    const [audio, setAudio] = React.useState(false);
    const [security, setSecurity] = React.useState(false);
    const [electrical, setElectrical] = React.useState(false);
    const [interior, setInterior] = React.useState(false);
    const [kidsTrain, setKidsTrain] = React.useState(false);
    const [rollCaster, setRollCaster] = React.useState(false);
    const [waterSystems, setWaterSystems] = React.useState(false);
    const [securityBuilding, setSecurityBuilding] = React.useState(false);
    const [consultation, setConsultation] = React.useState(false);
    const [energyAudit, setEnergyAudit] = React.useState(false);
    const [installation, setInstallation] = React.useState(false);
    const isWide = useMedia({
        minWidth: 1000,
    });
    const instance1 = (
        <ButtonToolbar>
            <Dropdown icon={<CheckOutlineIcon />} title="Residential Appliances" trigger="hover" >
                <Dropdown.Menu style={{ width: 200 }} icon={<CheckOutlineIcon />} title="Refrigeration and air conditioning">
                    <Dropdown.Menu title="Cooker">
                        <Dropdown.Item onClick={() => {
                            setCooker(true);
                            setWashing(false);
                            window.scroll(500, 500);
                            setBetting(false);
                            setKidsFun(false);
                            setKidSwing(false);
                            setBouncing(false);
                            setCivil(false);
                            setKitchen(false);
                            setLaundry(false);
                            setAudio(false);
                            setConsultation(false);
                            setEnergyAudit(false);
                            setInstallation(false);
                            setSecurity(false);
                            setElectrical(false);
                            setInterior(false);
                            setKidsTrain(false);
                            setPower(false);
                            setRollCaster(false);
                            setWaterSystems(false);
                            setSecurityBuilding(false);
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
                            setBouncing(false);
                            setCivil(false);
                            setKitchen(false);
                            setLaundry(false);
                            setAudio(false);
                            setSecurity(false);
                            setElectrical(false);
                            setInterior(false);
                            setPower(false);
                            setConsultation(false);
                            setEnergyAudit(false);
                            setInstallation(false);
                            setKidsTrain(false);
                            setRollCaster(false);
                            setWaterSystems(false);
                            setSecurityBuilding(false);
                        }}>
                            Washing Machine
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{ width: 200 }} icon={<CheckOutlineIcon />} title="Power Generators ">
                    <Dropdown.Menu title="Power Generators Appliances" style={{ padding: "10px" }}>
                        <Dropdown.Item
                            onClick={() => {
                                setWashing(false);
                                setCooker(false);
                                window.scroll(500, 500);
                                setBetting(false);
                                setKidsFun(false);
                                setKidSwing(false);
                                setBouncing(false);
                                setCivil(false);
                                setPower(true);
                                setKitchen(false);
                                setLaundry(false);
                                setAudio(false);
                                setSecurity(false);
                                setElectrical(false);
                                setInterior(false);
                                setConsultation(false);
                                setEnergyAudit(false);
                                setInstallation(false);
                                setKidsTrain(false);
                                setRollCaster(false);
                                setWaterSystems(false);
                                setSecurityBuilding(false);
                            }}>
                            Power
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{ width: 200 }} icon={<CheckOutlineIcon />} title="Kitchen ">
                    <Dropdown.Menu title="Kitchen Appliances">
                        <Dropdown.Item
                            onClick={() => {
                            setWashing(false);
                            setCooker(false);
                            window.scroll(500, 500);
                            setBetting(false);
                            setKidsFun(false);
                            setKidSwing(false);
                            setBouncing(false);
                            setCivil(false);
                            setPower(false);
                            setKitchen(true);
                            setLaundry(false);
                            setAudio(false);
                            setSecurity(false);
                            setElectrical(false);
                            setInterior(false);
                            setKidsTrain(false);
                            setConsultation(false);
                            setEnergyAudit(false);
                            setInstallation(false);
                            setRollCaster(false);
                            setWaterSystems(false);
                            setSecurityBuilding(false);
                        }}>
                            Kitchen
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{ width: 200 }} icon={<CheckOutlineIcon />} title="Laundry ">
                    <Dropdown.Menu title="Laundry Appliances">
                        <Dropdown.Item
                            onClick={() => {
                                setWashing(false);
                                setCooker(false);
                                window.scroll(500, 500);
                                setBetting(false);
                                setKidsFun(false);
                                setKidSwing(false);
                                setPower(false);
                                setBouncing(false);
                                setCivil(false);
                                setKitchen(false);
                                setLaundry(true);
                                setAudio(false);
                                setSecurity(false);
                                setElectrical(false);
                                setInterior(false);
                                setConsultation(false);
                                setEnergyAudit(false);
                                setInstallation(false);
                                setKidsTrain(false);
                                setRollCaster(false);
                                setWaterSystems(false);
                                setSecurityBuilding(false);
                            }}>
                            Laundry
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{ width: 200 }} icon={<CheckOutlineIcon />} title="Security Systems  ">
                    <Dropdown.Menu title="Security Systems">
                        <Dropdown.Item
                            onClick={() => {
                                setWashing(false);
                                setCooker(false);
                                window.scroll(500, 500);
                                setBetting(false);
                                setKidsFun(false);
                                setPower(false);
                                setKidSwing(false);
                                setBouncing(false);
                                setCivil(false);
                                setKitchen(false);
                                setLaundry(false);
                                setAudio(false);
                                setSecurity(true);
                                setElectrical(false);
                                setInterior(false);
                                setConsultation(false);
                                setEnergyAudit(false);
                                setInstallation(false);
                                setKidsTrain(false);
                                setRollCaster(false);
                                setWaterSystems(false);
                                setSecurityBuilding(false);
                            }}>
                            Security
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
                <Dropdown.Menu style={{ width: 200 }} icon={<CheckOutlineIcon />} title="Audio visuals equipment ">
                    <Dropdown.Menu title="Audio visuals Machines">
                        <Dropdown.Item
                            onClick={() => {
                                setWashing(false);
                                setCooker(false);
                                window.scroll(500, 500);
                                setBetting(false);
                                setKidsFun(false);
                                setPower(false);
                                setKidSwing(false);
                                setBouncing(false);
                                setCivil(false);
                                setKitchen(false);
                                setLaundry(false);
                                setAudio(true);
                                setSecurity(false);
                                setElectrical(false);
                                setInterior(false);
                                setConsultation(false);
                                setEnergyAudit(false);
                                setInstallation(false);
                                setKidsTrain(false);
                                setRollCaster(false);
                                setWaterSystems(false);
                                setSecurityBuilding(false);
                            }}>
                            Audio Visuals
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Menu>
            </Dropdown>
        </ButtonToolbar>
    )
    const instance4 = (
        <ButtonToolbar>
            <Dropdown icon={<CheckOutlineIcon />} title="Building Services" trigger="hover">
                <Dropdown.Menu icon={<CheckOutlineIcon />} title="Electrical works ">
                    <Dropdown.Item
                        onClick={() => {
                            setWashing(false);
                            setCooker(false);
                            window.scroll(500, 500);
                            setBetting(false);
                            setKidsFun(false);
                            setPower(false);
                            setKidSwing(false);
                            setBouncing(false);
                            setCivil(false);
                            setKitchen(false);
                            setLaundry(false);
                            setAudio(false);
                            setSecurity(false);
                            setElectrical(true);
                            setInterior(false);
                            setConsultation(false);
                            setEnergyAudit(false);
                            setInstallation(false);
                            setKidsTrain(false);
                            setRollCaster(false);
                            setWaterSystems(false);
                            setSecurityBuilding(false);
                        }}>
                        Electricals
                    </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon />} title="Water System and drainage ">
                    <Dropdown.Item
                        onClick={() => {
                            setWashing(false);
                            setCooker(false);
                            window.scroll(500, 500);
                            setBetting(false);
                            setKidsFun(false);
                            setKidSwing(false);
                            setBouncing(false);
                            setCivil(false);
                            setKitchen(false);
                            setPower(false);
                            setLaundry(false);
                            setAudio(false);
                            setSecurity(false);
                            setElectrical(false);
                            setInterior(false);
                            setConsultation(false);
                            setEnergyAudit(false);
                            setInstallation(false);
                            setKidsTrain(false);
                            setRollCaster(false);
                            setWaterSystems(true);
                            setSecurityBuilding(false);
                        }}>
                        Water Systems
                    </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon />} title="Interior works ">
                    <Dropdown.Item
                        onClick={() => {
                            setWashing(false);
                            setCooker(false);
                            window.scroll(500, 500);
                            setBetting(false);
                            setKidsFun(false);
                            setKidSwing(false);
                            setBouncing(false);
                            setCivil(false);
                            setPower(false);
                            setKitchen(false);
                            setLaundry(false);
                            setAudio(false);
                            setSecurity(false);
                            setElectrical(false);
                            setInterior(true);
                            setConsultation(false);
                            setEnergyAudit(false);
                            setInstallation(false);
                            setKidsTrain(false);
                            setRollCaster(false);
                            setWaterSystems(false);
                            setSecurityBuilding(false);
                        }}>
                        Interior Services
                    </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon />} title="Civil works ">
                    <Dropdown.Item
                        onClick={() => {
                            setWashing(false);
                            setCooker(false);
                            window.scroll(500, 500);
                            setBetting(false);
                            setKidsFun(false);
                            setKidSwing(false);
                            setBouncing(false);
                            setCivil(true);
                            setKitchen(false);
                            setLaundry(false);
                            setAudio(false);
                            setPower(false);
                            setSecurity(false);
                            setElectrical(false);
                            setInterior(false);
                            setConsultation(false);
                            setEnergyAudit(false);
                            setInstallation(false);
                            setKidsTrain(false);
                            setRollCaster(false);
                            setWaterSystems(false);
                            setSecurityBuilding(false);
                        }}>
                        Civil Services
                    </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon />} title="Security Systems">
                    <Dropdown.Item
                        onClick={() => {
                            setWashing(false);
                            setCooker(false);
                            window.scroll(500, 500);
                            setBetting(false);
                            setKidsFun(false);
                            setKidSwing(false);
                            setBouncing(false);
                            setCivil(false);
                            setPower(false);
                            setKitchen(false);
                            setLaundry(false);
                            setAudio(false);
                            setSecurity(false);
                            setElectrical(false);
                            setInterior(false);
                            setConsultation(false);
                            setEnergyAudit(false);
                            setInstallation(false);
                            setKidsTrain(false);
                            setRollCaster(false);
                            setWaterSystems(false);
                            setSecurityBuilding(true);
                        }}>
                        Security Building
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </ButtonToolbar>
    )
    const instance5 = (
        <ButtonToolbar>
            <Dropdown icon={<CheckOutlineIcon />} title="Entertainment" trigger="hover">
                <Dropdown.Menu icon={<CheckOutlineIcon />} title="Betting Machines ">
                    <Dropdown.Item onClick={() => {
                        setCooker(false);
                        setWashing(false);
                        setBetting(true);
                        setPower(false);
                        setKidsFun(false);
                        setKidSwing(false);
                        window.scroll(500, 500);
                        setBouncing(false);
                        setCivil(false);
                        setKitchen(false);
                        setLaundry(false);
                        setAudio(false);
                        setSecurity(false);
                        setElectrical(false);
                        setInterior(false);
                        setConsultation(false);
                        setEnergyAudit(false);
                        setInstallation(false);
                        setKidsTrain(false);
                        setRollCaster(false);
                        setWaterSystems(false);
                        setSecurityBuilding(false);
                    }}>
                        Betting Machines
                    </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon />} title="Kids Fun Machines ">
                    <Dropdown.Item
                        onClick={() => {
                            setCooker(false);
                            setWashing(false);
                            window.scroll(500, 500)
                            setBetting(false);
                            setPower(false);
                            setKidsFun(true);
                            setBetting(false);
                            setKidSwing(false);
                            setBouncing(false);
                            setCivil(false);
                            setKitchen(false);
                            setLaundry(false);
                            setAudio(false);
                            setSecurity(false);
                            setElectrical(false);
                            setInterior(false);
                            setConsultation(false);
                            setEnergyAudit(false);
                            setInstallation(false);
                            setKidsTrain(false);
                            setRollCaster(false);
                            setWaterSystems(false);
                            setSecurityBuilding(false);
                        }}
                    >
                        Kids Fun
                    </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon />} title="Bouncing Castle ">
                    <Dropdown.Item
                        onClick={() => {
                            setCooker(false);
                            setWashing(false);
                            window.scroll(500, 500)
                            setBetting(false);
                            setPower(false);
                            setKidsFun(false);
                            setBetting(false);
                            setKidSwing(false);
                            setBouncing(true);
                            setCivil(false);
                            setKitchen(false);
                            setLaundry(false);
                            setAudio(false);
                            setSecurity(false);
                            setElectrical(false);
                            setInterior(false);
                            setConsultation(false);
                            setEnergyAudit(false);
                            setInstallation(false);
                            setKidsTrain(false);
                            setRollCaster(false);
                            setWaterSystems(false);
                            setSecurityBuilding(false);
                        }}
                    >
                        Bouncing Machines
                    </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon />} title="Kids Trains ">
                    <Dropdown.Item
                        onClick={() => {
                            setCooker(false);
                            setWashing(false);
                            window.scroll(500, 500)
                            setBetting(false);
                            setKidsFun(false);
                            setBetting(false);
                            setPower(false);
                            setKidSwing(false);
                            setBouncing(false);
                            setCivil(false);
                            setKitchen(false);
                            setLaundry(false);
                            setAudio(false);
                            setSecurity(false);
                            setElectrical(false);
                            setInterior(false);
                            setConsultation(false);
                            setEnergyAudit(false);
                            setInstallation(false);
                            setKidsTrain(true);
                            setRollCaster(false);
                            setWaterSystems(false);
                            setSecurityBuilding(false);
                        }}
                    >
                        Kids Train
                    </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon />} title="Roll caster  & Speed  Boats ">
                    <Dropdown.Item
                        onClick={() => {
                            setCooker(false);
                            setWashing(false);
                            window.scroll(500, 500)
                            setBetting(false);
                            setKidsFun(false);
                            setPower(false);
                            setBetting(false);
                            setKidSwing(false);
                            setBouncing(false);
                            setCivil(false);
                            setKitchen(false);
                            setLaundry(false);
                            setAudio(false);
                            setSecurity(false);
                            setElectrical(false);
                            setInterior(false);
                            setConsultation(false);
                            setEnergyAudit(false);
                            setInstallation(false);
                            setKidsTrain(false);
                            setRollCaster(true);
                            setWaterSystems(false);
                            setSecurityBuilding(false);
                        }}
                    >
                        Roller Caster
                    </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu icon={<CheckOutlineIcon />} title="Kids Swings ">
                    <Dropdown.Item
                        onClick={() => {
                            setCooker(false);
                            setWashing(false);
                            setPower(false);
                            window.scroll(500, 500)
                            setBetting(false);
                            setKidsFun(false);
                            setKidSwing(true);
                            setBouncing(false);
                            setCivil(false);
                            setKitchen(false);
                            setLaundry(false);
                            setAudio(false);
                            setSecurity(false);
                            setElectrical(false);
                            setInterior(false);
                            setConsultation(false);
                            setEnergyAudit(false);
                            setInstallation(false);
                            setKidsTrain(false);
                            setRollCaster(false);
                            setWaterSystems(false);
                            setSecurityBuilding(false);
                        }}
                    >
                        Kid Swings
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </ButtonToolbar>
    )
    const instance6 = (
        <ButtonToolbar>
            <Dropdown icon={<CheckOutlineIcon />} title="Green Energy" trigger="hover">
                <Dropdown.Item
                    onClick={() => {
                        setCooker(false);
                        setWashing(false);
                        window.scroll(500, 500)
                        setBetting(false);
                        setPower(false);
                        setKidsFun(false);
                        setKidSwing(false);
                        setBouncing(false);
                        setCivil(false);
                        setKitchen(false);
                        setLaundry(false);
                        setAudio(false);
                        setSecurity(false);
                        setElectrical(false);
                        setInterior(false);
                        setConsultation(false);
                        setEnergyAudit(false);
                        setInstallation(true);
                        setKidsTrain(false);
                        setRollCaster(false);
                        setWaterSystems(false);
                        setSecurityBuilding(false);
                    }}
                >
                    Installation & Maintenance
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => {
                        setCooker(false);
                        setWashing(false);
                        window.scroll(500, 500)
                        setBetting(false);
                        setKidsFun(false);
                        setPower(false);
                        setKidSwing(false);
                        setBouncing(false);
                        setCivil(false);
                        setKitchen(false);
                        setLaundry(false);
                        setAudio(false);
                        setSecurity(false);
                        setElectrical(false);
                        setInterior(false);
                        setConsultation(false);
                        setEnergyAudit(true);
                        setInstallation(false);
                        setKidsTrain(false);
                        setRollCaster(false);
                        setWaterSystems(false);
                        setSecurityBuilding(false);
                    }}
                >
                    Energy Audit
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => {
                        setCooker(false);
                        setWashing(false);
                        window.scroll(500, 500)
                        setBetting(false);
                        setKidsFun(false);
                        setPower(false);
                        setKidSwing(false);
                        setBouncing(false);
                        setCivil(false);
                        setKitchen(false);
                        setLaundry(false);
                        setAudio(false);
                        setSecurity(false);
                        setElectrical(false);
                        setInterior(false);
                        setConsultation(true);
                        setEnergyAudit(false);
                        setInstallation(false);
                        setKidsTrain(false);
                        setRollCaster(false);
                        setWaterSystems(false);
                        setSecurityBuilding(false);
                    }}
                >
                    Energy saving consultation
                </Dropdown.Item>
            </Dropdown>
        </ButtonToolbar>
    )
    return (
        <div>
            <Head>
                <title>Quickfix</title>
            </Head>
            {isWide ?
                <div>
                    <NavBarInstance activeKey={activeKey} onSelect={setActiveKey} />
                    <Box sx={styles.navbar}>
                        {instance1}
                        {instance4}
                        {instance5}
                        {instance6}
                    </Box>
                    <div style={{ display: "flex", padding: '10px', background: "#8e8e93" }}>
                        <div>
                            <h2 style={{ color: "white", fontFamily: "Raleway, sans-serif"}}>Reliable service when
                                you need it the most</h2><br />
                            <Carousel autoplay={true}>
                                <div style={{ display: 'flex', marginBottom: "-50px" }}>
                                    <div style={{ marginRight: "20px" }}><Image src={Electrical} alt="electrical" /><h5 style={{ color: "white" }}>Electrical works</h5></div>
                                    <div style={{ marginRight: "20px" }}><Image src={Washing} alt="washing" /><h5 style={{ color: "white" }}>Washing Repairs</h5></div>
                                    <div style={{ marginRight: "20px" }}><Image src={Cooker} alt="shape right" /><h5 style={{ color: "white" }}>Cooker Repairs</h5></div>
                                    <div style={{ marginRight: "20px" }}><Image src={Dishwasher} alt="shape right" /><h5 style={{ color: "white" }}>Dishwasher Repairs</h5></div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginRight: "20px" }}><Image src={Boiler} alt="shape right" /><h5 style={{ color: "white" }}>Boiler Repairs</h5></div>
                                    <div style={{ marginRight: "20px" }}><Image src={Cooler} alt="shape right" /><h5 style={{ color: "white" }}>Cooler Repairs</h5></div>
                                    <div style={{ marginRight: "20px" }}><Image src={Oven} alt="shape right" /><h5 style={{ color: "white" }}>Oven Repairs</h5></div>
                                    <div style={{ marginRight: "20px" }}><Image src={tumbDryer} alt="shape right" /><h5 style={{ color: "white" }}>TumbDryer Repairs</h5></div>
                                </div>
                            </Carousel>
                        </div>
                        <div style={{  fontFamily: "Raleway, sans-serif", float: "right" }}>
                            <h3 style={{ color: "black" }}>Here to help Keep your
                                appliances working
                            </h3>
                            <Image src={Repair} alt="shape right" width="350" /><Divider />
                            <center><Button color="cyan" appearance="primary" style={{ borderRadius: "50px", padding: "15px", color:"black", width: "100%" }}>Get Service</Button></center>
                        </div>
                    </div>
                    {cooker && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={CookerSection} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Cooker Repairs and Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company to repair your cooker?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {washing && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={WashingSection} alt="washing-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Washing Machine Repairs and Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company to repair your cooker? Well look no further!
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
                                    <div style={{ padding: "10px" }}>
                                        <h3>Washing Machine Repairs and Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company to repair your cooker? Well look no further!
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
                                    <div style={{ padding: "10px" }}>
                                        <h3>Washing Machine Repairs and Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company to repair your cooker? Well look no further!
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
                                    <div style={{ padding: "10px" }}>
                                        <h3>Washing Machine Repairs and Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company to repair your cooker? Well look no further!
                                            Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {bouncing && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={BouncingSection} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Bouncing Repairs and Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company to repair your Bouncing Machines?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {civil && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={CivilSection} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Civil Engineering Services</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company to connect you to civil engineering services?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {kitchen && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={KitchenSection} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Kitchen Repairs And Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company for kitchen repairs and maintenance?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {power && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={PowerSection} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Power Repairs And Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company for power repairs and maintenance?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {laundry && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={LaundrySection} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Laundry Repairs And Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company for laundry repairs and maintenance?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {audio && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={AudioSection} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Audio Visuals Repairs And Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company for audio visual repairs and maintenance?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {security && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={SecuritySection} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Security Repairs And Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company for security repairs and maintenance?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {electrical && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={ElectricalSection} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Electrical Repairs And Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company for electrical repairs and maintenance?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {interior && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={InterirorSection} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Interior Repairs And Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company for Interior repairs and maintenance?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {kidsTrain && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={KidstrainSection} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Kids Train Repairs And Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company for kid-trains  repairs and maintenance?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {rollCaster && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={RollcasterSection} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Roll Caster Repairs And Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company for roll caster repairs and maintenance?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {waterSystems && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={WaterSystemsSection} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Water system Repairs And Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company for water system repairs and maintenance?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {securityBuilding && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={SecurityBuildingSection} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Security Building Repairs And Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company for security building repairs and maintenance?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {installation && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={Installation} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Installations And Maintenance</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company for installations and maintenance?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {energyAudit && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={EnergyAudit} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Energy Audit</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Searching for a reliable company for Energy Audits?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                    {consultation && (
                        <Grid fluid>
                            <Row>
                                <Col xs={8}><Image src={Consultation} alt="cooker-section" /></Col>
                                <Col xs={16}>
                                    <div style={{ padding: "10px" }}>
                                        <h3>Energy Saving Consultations</h3><Divider />
                                        <p style={{ fontSize: "24px", lineHeight: 2.0 }}>Meet reliable company with Energy Saving Consultations?
                                            Well look no further! Quickfix will come out and fix it on a day that works for you.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    )}
                </div>
                :
                <div>
                    <Navbar>
                        <Navbar.Brand style={{ fontSize: '24px', color: "blue" }} href="#">
                            QUICKFIX
                        </Navbar.Brand>
                        <Nav pullRight>
                            <Nav.Item style={{ fontSize: "16px" }} icon={<PhoneIcon />}>CALL US: 0722779770</Nav.Item>
                        </Nav>
                    </Navbar>
                    <Carousel style={{ padding: '20px' }} autoplay={true}>
                        <div style={{ marginRight: "20px" }}><center><Image src={Electrical} alt="electrical" /><h5 style={{ color: "white" }}>Electrical works</h5></center></div>
                        <div style={{ marginRight: "20px" }}><center><Image src={Washing} alt="washing" /><h5 style={{ color: "white" }}>Washing Repairs</h5></center></div>
                        <div style={{ marginRight: "20px" }}><center><Image src={Cooker} alt="shape right" /><h5 style={{ color: "white" }}>Cooker Repairs</h5></center></div>
                        <div style={{ marginRight: "20px" }}><center><Image src={Dishwasher} alt="shape right" /><h5 style={{ color: "white" }}>Dishwasher Repairs</h5></center></div>
                        <div style={{ marginRight: "20px" }}><center><Image src={Boiler} alt="shape right" /><h5 style={{ color: "white" }}>Boiler Repairs</h5></center></div>
                        <div style={{ marginRight: "20px" }}><center><Image src={Cooler} alt="shape right" /><h5 style={{ color: "white" }}>Cooler Repairs</h5></center></div>
                        <div style={{ marginRight: "20px" }}><center><Image src={Oven} alt="shape right" /><h5 style={{ color: "white" }}>Oven Repairs</h5></center></div>
                        <div style={{ marginRight: "20px" }}><center><Image src={tumbDryer} alt="shape right" /><h5 style={{ color: "white" }}>TumbDryer Repairs</h5></center></div>
                    </Carousel>
                    <center><h3>Repairs and Maintenance</h3></center>
                    <p style={{ fontSize: "20px", lineHeight: 2.0 }}>Searching for a reliable company to repair your cooker?
                        Well look no further! Quickfix will come out and fix it on a day
                        that works for you.
                    </p>
                    <div style={{ background: "whitesmoke", lineHeight: 3.5 }}>
                        <center>
                            <h3 style={{ color: "blue" }}>Services offered: </h3>
                            <h4>Repairs and Maintenance</h4>
                            <Tag color="blue">Refrigeration and air conditioning</Tag>
                            <Tag color="blue">Power Generators</Tag>
                            <Tag color="blue">Laundry Appliances</Tag>
                            <Tag color="blue">Kitchen Appliances</Tag>
                            <Tag color="blue">Security Systems</Tag>
                            <Tag color="blue">Audio Visual equipments</Tag>
                            <Tag color="blue">Electrical Works</Tag>
                            <Tag color="blue">Interior Works</Tag>
                            <Tag color="blue">Civil Works</Tag>
                            <Tag color="blue">Security Systems</Tag>
                            <Tag color="blue">Betting Machines</Tag>
                            <Tag color="blue">Kids Fun Machines</Tag>
                            <Tag color="blue">Bouncing Castle</Tag>
                            <Tag color="blue">Roller Caster</Tag>
                            <Tag color="blue">Kids Swings</Tag>
                        </center>
                    </div>
                </div>
            }
            <Footer />
        </div>
    );
};

export default Index;

const styles = {
    navbar: {
        paddingY: "1em",
        paddingX: "5em",
        background: "linear-gradient(to bottom, rgba(0, 109, 126, 1) 0%, rgba(1, 103, 119, 1) 21%, rgba(5, 79, 90, 1) 57%, rgba(36, 30, 32, 1) 93%, rgba(36, 30, 32, 1) 100%)",
        display: 'flex',
        gap: "2em",
        justifyContent: "center",
    }
}