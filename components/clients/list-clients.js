import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Table, Pagination, Grid, Row, Col, DatePicker,Panel,
    InputGroup, Tag, Button, Drawer, Form, Nav, ButtonToolbar, Divider
} from 'rsuite';
import AddOutlineIcon from '@rsuite/icons/AddOutline'
import { getUsers } from '../../state/actions/usersAction';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, Box, InputLabel, TextField } from '@mui/material';
import { AiOutlineEye, AiTwotoneDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const polar = {

    series: [42, 47, 52, 58, 65],
    options: {
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        fill: {
            opacity: 1
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            position: 'bottom'
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                },
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6
            }
        }
    },

};
const state = {

    series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    options: {
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    },
};

const ListClients = () => {
    const [openWithHeader, setOpenWithHeader] = useState(false);
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const dispatch = useDispatch();

    const userSelector = useSelector(state => state.usersState);
    const { user_list } = userSelector;
    const { users, pagination } = user_list;


    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    }

    const data = users.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });

    React.useEffect(() => {
        getUsers(dispatch, searchTerm, gender, country);
    }, [dispatch, searchTerm, gender, country]);

    return (
        <div>
            <Panel>
                <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "20px" }}>
                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Client List:</p>
                    <Button style={{ color: "white", background: "#006D7E" }} onClick={() => setOpenWithHeader(true)}>Create Servicemen</Button>
                    <Drawer size='xs' open={openWithHeader} onClose={() => setOpenWithHeader(false)}>
                        <Drawer.Header>
                            <Drawer.Title>Add Client</Drawer.Title>
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
                                label="Search Name, Email, Phone"
                                variant="outlined"
                                onChange={handleSearchTermChange}
                                value={searchTerm}
                                placeholder="Search Name, Email ..."
                                style={{height:"30px", borderRadius: '10px',padding:"5px" }}
                            />
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <input
                                id="country"
                                label="Search Country"
                                variant="outlined"
                                onChange={handleCountryChange}
                                placeholder="Search Country..."
                                style={{height:"30px", borderRadius: '10px', padding:"5px" }}
                                value={country}
                            />
                        </Col>
                        <Col xs={24} sm={12} md={6}>

                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <label>Gender</label>
                            <select
                                labelId="gender-label"
                                id="gender-label"
                                value={gender}
                                label="Gender"
                                style={{ color: 'black', width: '60%',height:"30px", borderRadius: '10px', padding:"5px" }}
                                onChange={handleGenderChange}
                            >
                                <MenuItem value="">All</MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value='female'>Female</MenuItem>
                            </select>
                        </Col>
                    </Row>
                </Grid>
                <table style={styles.table}>
                    <tr>
                        <th style={styles.table.th}>ID</th>
                        <th style={styles.table.th}>First Name</th>
                        <th style={styles.table.th}>Last Name</th>
                        <th style={styles.table.th}>Email</th>
                        <th style={styles.table.th}>Phone</th>
                        <th style={styles.table.th}>Gender</th>
                        <th style={styles.table.th}>Country</th>
                        <th style={styles.table.th}>Actions</th>
                    </tr>
                    {users?.map((data, index) => (
                        <tr key={index}>
                            <td style={styles.table.td}>
                                {data.id}
                            </td>
                            <td style={styles.table.td}>{data.first_name}</td>
                            <td style={styles.table.td}>{data.last_name}</td>
                            <td style={styles.table.td}>{data.email}</td>
                            <td style={styles.table.td}>{data.phone}</td>
                            <td style={styles.table.td}>{data.gender}</td>
                            <td style={styles.table.td}>{data.country}</td>
                            <td style={styles.table.td}>
                                <Tag style={{ cursor: 'pointer' }} color="cyan">Show</Tag>
                                <Tag style={{ cursor: 'pointer' }} color="blue">Edit</Tag>
                                <Tag style={{ cursor: 'pointer' }} color="red">Delete</Tag>
                            </td>
                        </tr>
                    ))}
                </table>
            </Panel>
            <Divider/>
            <p style={{ fontSize: "24px", color: "#006D7E" }}>Client Reports:</p>
            <Divider/>
            <div>
                <h5>Client Reports</h5><br />
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={12}>
                            <p>Cumulative graphs of signed clients</p><br />
                            <Nav>
                                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                    <div>
                                        <Nav.Dropdown title="Reports">
                                            <Nav.Dropdown.Item>Categoty</Nav.Dropdown.Item>
                                            <Nav.Dropdown.Item>Sub Category</Nav.Dropdown.Item>
                                            <Nav.Dropdown.Item>Ongoing Jobs</Nav.Dropdown.Item>
                                            <Nav.Dropdown.Item>Scheduled jobs</Nav.Dropdown.Item>
                                            <Nav.Dropdown.Item>Job Card quotation</Nav.Dropdown.Item>
                                            <Nav.Dropdown.Item>Generated job cards</Nav.Dropdown.Item>
                                            <Nav.Dropdown.Item>Rescheduled jobs reminders</Nav.Dropdown.Item>
                                        </Nav.Dropdown>
                                    </div>
                                    <div style={{ marginRight: "10px" }}>
                                        <Nav.Item active><Button size="sm" color="red" appearance="primary">Signed Clients</Button></Nav.Item>
                                    </div>
                                </div>
                            </Nav><br />
                            <Panel shaded>
                                <center>
                                    <div style={{width:"100%"}}>
                                <Chart
                                    options={state.options}
                                    series={state.series}
                                    type="bar"
                                    height={350}
                                    width="100%"
                                />
                                </div>
                                </center>
                            </Panel>
                        </Col>
                        <Col xs={12}>
                            <p>Cumulative graphs of selected clients</p><br />
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
                                        <Nav.Item active><Button size="sm" color="red" appearance="primary">Selected Clients</Button></Nav.Item>
                                    </div>
                                </div>
                            </Nav><br />
                            <Panel shaded>
                                <center>
                                <Chart
                                    options={polar.options}
                                    series={polar.series}
                                    type="polarArea"
                                    height={395}
                                    width="100%"
                                />
                                </center>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );
};

export default ListClients;

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