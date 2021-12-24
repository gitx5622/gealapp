import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import {Grid, Row, Col, Nav, Button, Panel, Divider} from 'rsuite';
import PeoplesIcon from '@rsuite/icons/Peoples';
import PeopleBranchIcon from '@rsuite/icons/PeopleBranch';
import TaskIcon from '@rsuite/icons/Task';
import ProjectIcon from '@rsuite/icons/Project';
import Users from '../../../assets/users.png';
import Servicemen from '../../../assets/skills.png';
import Jobs from '../../../assets/jobs.png';
import Skills from '../../../assets/servicemen.png';
import Graph from '../../../assets/graph.png';
import CountUp from 'react-countup';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const state = {

    series: [{
        name: 'TEAM A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'TEAM B',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'TEAM C',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    options: {
        chart: {
            height: 350,
            type: 'line',
            stacked: false,
        },
        stroke: {
            width: [0, 2, 5],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },

        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
            '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
        ],
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            title: {
                text: 'Points',
            },
            min: 0
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " points";
                    }
                    return y;

                }
            }
        }
    },


};

const Home = () => {

    return (
        <div>
            <Panel>
            <Grid fluid>
                <Row gutter={8} className="show-grid">
                    <Col xs={24} sm={12} md={6}>
                        <Panel shaded style={{background:"whitesmoke"}}>
                            <Row className="show-grid">
                                <Col xs={24} sm={12} md={12}>
                                    <div style={{ display: "flex", justifyContent: "center", height: 50, width: 50, background: '#006D7E', borderRadius: 50 }}>
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
                        <Panel shaded style={{background:"whitesmoke"}}>
                            <Row className="show-grid">
                                <Col xs={24} sm={12} md={12}>
                                    <div style={{ display: "flex", justifyContent: "center", height: 50, width: 50, background: '#006D7E', borderRadius: 50 }}>
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
                        <Panel shaded style={{background:"whitesmoke"}}>
                            <Row className="show-grid">
                                <Col xs={24} sm={12} md={12}>
                                    <div style={{ display: "flex", justifyContent: "center", height: 50, width: 50, background: '#006D7E', borderRadius: 50 }}>
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
                        <Panel shaded style={{background:"whitesmoke"}}>
                            <Row className="show-grid">
                                <Col xs={24} sm={12} md={12}>
                                    <div style={{ display: "flex", justifyContent: "center", height: 50, width: 50, background: '#006D7E', borderRadius: 50 }}>
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
            </Grid><br /><br/>
            <Grid fluid>
                <Row gutter={8} className="show-grid">
                    <Col xs={24} sm={12} md={6}>
                        <Panel shaded style={{background:"whitesmoke"}}>
                            <Row className="show-grid">
                                <Col xs={24} sm={12} md={12}>
                                    <div style={{ display: "flex", justifyContent: "center", height: 50, width: 50, background: '#006D7E', borderRadius: 50 }}>
                                        <PeoplesIcon color="white" style={{ fontSize: "2em", marginTop: "10px" }} />
                                    </div>
                                </Col>
                                <Col xs={24} sm={12} md={12}>
                                    <center><h5><CountUp start={10} duration={4} end={230} /><br /> Payments</h5></center>
                                </Col>
                                <Image src={Skills} alt="" />
                            </Row>
                        </Panel>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Panel shaded style={{background:"whitesmoke"}}>
                            <Row className="show-grid">
                                <Col xs={24} sm={12} md={12}>
                                    <div style={{ display: "flex", justifyContent: "center", height: 50, width: 50, background: '#006D7E', borderRadius: 50 }}>
                                        <PeopleBranchIcon color="white" style={{ fontSize: "2em", marginTop: "10px" }} />
                                    </div>
                                </Col>
                                <Col xs={24} sm={12} md={12}>
                                    <center><h5><CountUp start={10} duration={5} end={730} /><br /> Clients</h5></center>
                                </Col>
                                <Image src={Jobs} alt="" />
                            </Row>
                        </Panel>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Panel shaded style={{background:"whitesmoke"}}>
                            <Row className="show-grid">
                                <Col xs={24} sm={12} md={12}>
                                    <div style={{ display: "flex", justifyContent: "center", height: 50, width: 50, background: '#006D7E', borderRadius: 50 }}>
                                        <ProjectIcon color="white" style={{ fontSize: "2em", marginTop: "10px" }} />
                                    </div>
                                </Col>
                                <Col xs={24} sm={12} md={12}>
                                    <center><h5><CountUp start={10} duration={3} end={476} /><br /> Roles</h5></center>
                                </Col>
                                <Image src={Servicemen} alt="" />
                            </Row>
                        </Panel>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Panel shaded style={{background:"whitesmoke"}}>
                            <Row className="show-grid">
                                <Col xs={24} sm={12} md={12}>
                                    <div style={{ display: "flex", justifyContent: "center", height: 50, width: 50, background: '#006D7E', borderRadius: 50 }}>
                                        <TaskIcon color="white" style={{ fontSize: "2em", marginTop: "10px" }} />
                                    </div>
                                </Col>
                                <Col xs={24} sm={12} md={12}>
                                    <center><h5><CountUp start={10} duration={6} end={112} /><br /> Permissions</h5></center>
                                </Col>
                                <Image src={Users} alt="" />
                            </Row>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
            </Panel>
            <Panel shaded>
            <p style={{ fontSize: "24px", color: "#006D7E" }}>User Reports:</p>
                <Chart
                    options={state.options}
                    series={state.series}
                    type="line"
                    height={350}
                    width="100%"
                />
            </Panel>
        </div >
    )
}

export default Home;