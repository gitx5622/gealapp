import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Grid, Row, Col, Nav, Button, Panel } from 'rsuite';
import PeoplesIcon from '@rsuite/icons/Peoples';
import PeopleBranchIcon from '@rsuite/icons/PeopleBranch';
import TaskIcon from '@rsuite/icons/Task';
import ProjectIcon from '@rsuite/icons/Project';
import Users from '../../../assets/users.png';
import Servicemen from '../../../assets/skills.png';
import Jobs from '../../../assets/jobs.png';
import Skills from '../../../assets/servicemen.png';
import CountUp from 'react-countup';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const state = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    options: {
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    },
}

const Home = () => {

    return (
        <div style={{ marginTop: "20px" }}>
            <Grid fluid>
                <Row gutter={8} className="show-grid">
                    <Col xs={24} sm={12} md={6}>
                        <Panel shaded>
                            <Row className="show-grid">
                                <Col xs={24} sm={12} md={12}>
                                    <div style={{ display: "flex", justifyContent: "center", height: 50, width: 50, background: '#f44336', borderRadius: 50 }}>
                                        <PeoplesIcon color="white" style={{ fontSize: "2em", marginTop: "10px" }} />
                                    </div>
                                </Col>
                                <Col xs={24} sm={12} md={12}>
                                    <center><h5><CountUp start={10} duration={4} end={230} /><br /> Users</h5></center>
                                </Col>
                                <Image src={Users} alt="" />
                            </Row>
                        </Panel>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Panel shaded>
                            <Row className="show-grid">
                                <Col xs={24} sm={12} md={12}>
                                    <div style={{ display: "flex", justifyContent: "center", height: 50, width: 50, background: '#f44336', borderRadius: 50 }}>
                                        <PeopleBranchIcon color="white" style={{ fontSize: "2em", marginTop: "10px" }} />
                                    </div>
                                </Col>
                                <Col xs={24} sm={12} md={12}>
                                    <center><h5><CountUp start={10} duration={5} end={730} /><br /> Servicemen</h5></center>
                                </Col>
                                <Image src={Servicemen} alt="" />
                            </Row>
                        </Panel>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Panel shaded>
                            <Row className="show-grid">
                                <Col xs={24} sm={12} md={12}>
                                    <div style={{ display: "flex", justifyContent: "center", height: 50, width: 50, background: '#f44336', borderRadius: 50 }}>
                                        <ProjectIcon color="white" style={{ fontSize: "2em", marginTop: "10px" }} />
                                    </div>
                                </Col>
                                <Col xs={24} sm={12} md={12}>
                                    <center><h5><CountUp start={10} duration={3} end={476} /><br /> Jobs</h5></center>
                                </Col>
                                <Image src={Jobs} alt="" />
                            </Row>
                        </Panel>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Panel shaded>
                            <Row className="show-grid">
                                <Col xs={24} sm={12} md={12}>
                                    <div style={{ display: "flex", justifyContent: "center", height: 50, width: 50, background: '#f44336', borderRadius: 50 }}>
                                        <TaskIcon color="white" style={{ fontSize: "2em", marginTop: "10px" }} />
                                    </div>
                                </Col>
                                <Col xs={24} sm={12} md={12}>
                                    <center><h5><CountUp start={10} duration={6} end={112} /><br /> Skills</h5></center>
                                </Col>
                                <Image src={Skills} alt="" />
                            </Row>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
            <div style={{ marginTop: "40px", marginLeft: "20px" }}>
                <h5>Cumulative figure of all salemen, jobs, skills and all users</h5><br />
                <Nav>
                    <div style={{ display: "flex", justifyContent: 'space-between' }}>
                        <div>
                            <Nav.Dropdown title="Reports">
                                <Nav.Dropdown.Item>Daily</Nav.Dropdown.Item>
                                <Nav.Dropdown.Item>Weekly</Nav.Dropdown.Item>
                                <Nav.Dropdown.Item>Monthly</Nav.Dropdown.Item>
                                <Nav.Dropdown.Item>Annually</Nav.Dropdown.Item>
                            </Nav.Dropdown>
                        </div>
                        <div style={{ marginRight: "70px" }}>
                            <Nav.Item active><Button color="red" appearance="primary">Users</Button></Nav.Item>
                            <Nav.Item>Servicemen</Nav.Item>
                            <Nav.Item>Jobs</Nav.Item>
                            <Nav.Item>Skills</Nav.Item>
                        </div>
                    </div>
                </Nav><br />
                <Chart
                    options={state.options}
                    series={state.series}
                    type="area"
                    height={300}
                    width='95%'
                />
            </div>
        </div >
    )
}

export default Home;

const styles = {

}