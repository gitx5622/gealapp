import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Grid, Row, Col, Nav, Panel, Tag, Button, Drawer, Form,
    ButtonToolbar, Divider, Pagination, Message
} from 'rsuite';
import MenuItem from '@mui/material/MenuItem';
import dynamic from 'next/dynamic';
import { BoxLoading } from 'react-loadingg';
import {getScheduledJobs} from "../../state/actions/jobAction";
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
const polar = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    options: {
        chart: {
            type: 'polarArea',
        },
        stroke: {
            colors: ['#fff']
        },
        fill: {
            opacity: 0.8
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    },
};
const ScheduledJobs = () => {
    const [openWithHeader, setOpenWithHeader] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [activePage, setActivePage] = React.useState(1);
    const [per, setPer] = React.useState(10);
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");

    const dispatch = useDispatch();

    const userSelector = useSelector(state => state.jobState);
    const { scheduled_list, isLoading, errorMessage } = userSelector;

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    }

    useEffect(() => {
        getScheduledJobs(dispatch, activePage, per);
    }, [dispatch, activePage, per]);

    return (
        <div>
            <Panel>
                <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "20px" }}>
                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Scheduled Jobs:</p>
                    <Button style={{ color: "white", background: "#006D7E" }} onClick={() => setOpenWithHeader(true)}>Create Jobs</Button>
                    <Drawer size='xs' open={openWithHeader} onClose={() => setOpenWithHeader(false)}>
                        <Drawer.Header>
                            <Drawer.Title>Add Job</Drawer.Title>
                            <Drawer.Actions>
                                <Button onClick={() => setOpenWithHeader(false)} appearance="primary">
                                    Close
                                </Button>
                            </Drawer.Actions>
                        </Drawer.Header>
                        <Drawer.Body>
                            <Form fluid>
                                <Form.Group controlId="name-1">
                                    <Form.ControlLabel>First Name</Form.ControlLabel>
                                    <Form.Control name="name-1" />
                                    <Form.HelpText>Required</Form.HelpText>
                                </Form.Group>
                                <Form.Group controlId="name-2">
                                    <Form.ControlLabel>Last Name</Form.ControlLabel>
                                    <Form.Control name="name-2" />
                                    <Form.HelpText>Required</Form.HelpText>
                                </Form.Group>
                                <Form.Group controlId="email-1">
                                    <Form.ControlLabel>Email</Form.ControlLabel>
                                    <Form.Control name="email-1" type="email" />
                                    <Form.HelpText>Required</Form.HelpText>
                                </Form.Group>
                                <Form.Group controlId="phone-1">
                                    <Form.ControlLabel>Phone</Form.ControlLabel>
                                    <Form.Control name="phone-1" />
                                </Form.Group>
                                <Form.Group controlId="gender-1">
                                    <Form.ControlLabel>Gender</Form.ControlLabel>
                                    <Form.Control name="gender-1" />
                                </Form.Group>
                                <Form.Group controlId="country-1">
                                    <Form.ControlLabel>Gender</Form.ControlLabel>
                                    <Form.Control name="country-1" />
                                </Form.Group>
                                <Form.Group>
                                    <ButtonToolbar>
                                        <Button appearance="primary">Submit</Button>
                                        <Button appearance="default">Cancel</Button>
                                    </ButtonToolbar>
                                </Form.Group>
                            </Form>
                        </Drawer.Body>
                    </Drawer>
                </div>
                <br />
                <Grid fluid style={{ marginBottom: "5px", marginTop: "3px" }}>
                    <Row >
                        <Col xs={24} sm={12} md={6}>
                            <input
                                id="name"
                                onChange={handleSearchTermChange}
                                value={searchTerm}
                                placeholder="Search Name, Email ..."
                                style={{ height: "30px", borderRadius: '10px', padding: "5px" }}
                            />
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <input
                                id="country"
                                onChange={handleCountryChange}
                                placeholder="Search Country..."
                                style={{ height: "30px", borderRadius: '10px', padding: "5px" }}
                                value={country}
                            />
                        </Col>
                        <Col xs={24} sm={12} md={6}>

                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <label>Gender</label>
                            <select
                                id="gender-label"
                                value={gender}
                                style={{ color: 'black', width: '60%', height: "30px", borderRadius: '10px', padding: "5px" }}
                                onChange={handleGenderChange}
                            >
                                <MenuItem value="">All</MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value='female'>Female</MenuItem>
                            </select>
                        </Col>
                    </Row>
                </Grid>
                {isLoading && (
                    <BoxLoading/>
                )}
                {errorMessage && (
                    <Message type="error">{errorMessage}</Message>
                )}
                <table style={styles.table}>
                    <tr>
                        <th style={styles.table.th}>ID</th>
                        <th style={styles.table.th}>Client Name</th>
                        <th style={styles.table.th}>Client Phone</th>
                        <th style={styles.table.th}>Serviceman Phone</th>
                        <th style={styles.table.th}>Category</th>
                        <th style={styles.table.th}>Sub Category</th>
                        <th style={styles.table.th}>Service</th>
                        <th style={styles.table.th}>Actions</th>
                    </tr>
                    {scheduled_list?.job_list?.jobs?.map((data, index) => (
                        <tr key={index}>
                            <td style={styles.table.td}>
                                {data.id}
                            </td>
                            <td style={styles.table.td}>{data && data.client.first_name + "    " + data.client.last_name}</td>
                            <td style={styles.table.td}>{data && data.client.phone}</td>
                            <td style={styles.table.td}>{data && data.servicemen.phone}</td>
                            <td style={styles.table.td}>{data && data.category.name}</td>
                            <td style={styles.table.td}>{data && data.sub_category.name}</td>
                            <td style={styles.table.td}>{data && data.service.name}</td>
                            <td style={styles.table.td}>
                                <Tag onClick={() => router.push(`/user/${data.id}`)} style={{ cursor: 'pointer' }} color="cyan">Show</Tag>
                            </td>
                        </tr>
                    ))}
                </table><br/>
                {scheduled_list?.job_list?.jobs && (
                    <Pagination size="md" total={scheduled_list?.job_list?.pagination.count} limit={per} activePage={activePage} onChangePage={(page) => setActivePage(page)}/>
                )}
            </Panel>
            <Panel>
            <Divider />
            <p style={{ fontSize: "24px", color: "#006D7E" }}>Scheduled Jobs Reports:</p>
            <Divider />
            <Grid fluid>
                <Row className="show-grid">
                    <Col xs={12}>
                        <Nav>
                            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                <div>
                                    <Nav.Dropdown title="Reports">
                                        <Nav.Dropdown.Item>Categoty</Nav.Dropdown.Item>
                                        <Nav.Dropdown.Item>Sub Category</Nav.Dropdown.Item>
                                    </Nav.Dropdown>
                                </div>
                                <div style={{ marginRight: "10px" }}>
                                    <Nav.Item active><Button size="sm" style={{ color: "white", background: "#006D7E" }}>Signed Sevicemen</Button></Nav.Item>
                                </div>
                            </div>
                        </Nav><br />
                        <Panel shaded>
                            <Chart
                                options={state.options}
                                series={state.series}
                                type="line"
                                height={350}
                                width="100%"
                            />
                        </Panel>
                    </Col>
                    <Col xs={12}>
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
                                <div style={{ marginRight: "10px" }}>
                                    <Nav.Item active><Button size="sm" style={{ color: "white", background: "#006D7E" }}>Selected Servicemen</Button></Nav.Item>
                                </div>
                            </div>
                        </Nav><br />
                        <Panel shaded>
                            <Chart
                                options={polar.options}
                                series={polar.series}
                                type="polarArea"
                                height={360}
                                width="100%"
                            />
                        </Panel>
                    </Col>
                </Row>
            </Grid>
            </Panel>
        </div>
    );
};

export default ScheduledJobs;

const styles = {
    table: {
        fontFamily: 'Quicksand, sans-serif',
        borderCollapse: 'collapse',
        width: '100%',
        td: {
            border: '1px solid #dddddd',
            textAlign: 'left',
            padding: '8px',
        },
        th: {
            border: '1px solid #dddddd',
            textAlign: 'left',
            padding: '8px',
            background: '#006D7E',
            color: "white"
        }
    },
}