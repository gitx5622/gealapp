import React from 'react';
import dynamic from 'next/dynamic';
import { Grid, Row, Col, Nav, Button } from 'rsuite';

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
        <div style={{marginTop: "20px"}}>
          <Grid fluid>
               <Row gutter={8} className="show-grid">
                    <Col xs={24} sm={12} md={6}>
                        <div style={{background:"#34C3FF", padding: "20px"}}>
                        <Row className="show-grid">
                            <Col xs={24} sm={12} md={12}>
                                <div style={{height: 50, width: 50, background: '#ea5455', borderRadius: 50}}>

                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12}>
                                <h5>230k Sales</h5>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <div style={{background:"#34C3FF", padding: "20px"}}>
                        <Row className="show-grid">
                            <Col xs={24} sm={12} md={12}>
                                <div style={{height: 50, width: 50, background: '#ea5455', borderRadius: 50}}>

                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12}>
                                <h5>230k Sales</h5>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                    <div style={{background:"#34C3FF", padding: "20px"}}>
                        <Row className="show-grid">
                            <Col xs={24} sm={12} md={12}>
                                <div style={{height: 50, width: 50, background: '#ea5455', borderRadius: 50}}>

                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12}>
                                <h5>230k Sales</h5>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                    <div style={{background:"#34C3FF", padding: "20px"}}>
                        <Row className="show-grid">
                            <Col xs={24} sm={12} md={12}>
                                <div style={{height: 50, width: 50, background: '#ea5455', borderRadius: 50}}>

                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12}>
                                <h5>230k Sales</h5>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                </Row>
            </Grid>
            <div style={{marginTop: "40px"}}>
                <h5>Cumulative figure of all salemen, jobs, skills and all users</h5><br/>
            <Nav>
                <Nav.Item active><Button color="cyan" appearance="primary">Users</Button></Nav.Item>
                <Nav.Item>Servicemen</Nav.Item>
                <Nav.Item>Jobs</Nav.Item>
                <Nav.Item>Skills</Nav.Item>
                <Nav.Dropdown title="Salesmen">
                    <Nav.Dropdown.Item>Item E-1</Nav.Dropdown.Item>
                    <Nav.Dropdown.Item>Item E-2</Nav.Dropdown.Item>
                    <Nav.Dropdown.Item>Item E-3</Nav.Dropdown.Item>
                    <Nav.Dropdown.Item>Item E-4</Nav.Dropdown.Item>
                    <Nav.Dropdown.Menu title="Item E-4">
                    <Nav.Dropdown.Item>Item E-4-1</Nav.Dropdown.Item>
                    <Nav.Dropdown.Item active>Item E-4-2</Nav.Dropdown.Item>
                    <Nav.Dropdown.Item>Item E-4-3</Nav.Dropdown.Item>
                    </Nav.Dropdown.Menu>
                </Nav.Dropdown>
            </Nav>
                <Chart
                    options={state.options}
                    series={state.series}
                    type="area"
                    height={300}
                    width='98%'
                />
            </div>
        </div>
    )
}

export default Home;

const styles = {
    
}