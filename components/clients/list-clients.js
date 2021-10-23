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
const ActionCell = ({ rowData, dataKey, ...props }) => {
    function handleAction() {
        alert(`id:${rowData[dataKey]}`);
    }
    return (
        <Table.Cell {...props} className="link-group">
            <Box sx={{ display: "flex", gap: 1 }}>
                <Box sx={{ justifyContent: "center", height: "30px", width: "30px", background: "#5CB85C", borderRadius: '5px' }}>
                    <center><AiOutlineEye style={{ fontSize: '20px', color: "white", marginTop: "5px" }} /></center>
                </Box>
                <Box sx={{ justifyContent: "center", height: "30px", width: "30px", background: "#d9534f", borderRadius: '5px' }}>
                    <center><AiTwotoneDelete style={{ fontSize: '20px', color: "white", marginTop: "5px" }} /></center>
                </Box>
                <Box sx={{ justifyContent: "center", height: "30px", width: "30px", background: "#337AB7", borderRadius: '5px' }}>
                    <center><FiEdit style={{ fontSize: '20px', color: "white", marginTop: "5px" }} /></center>
                </Box>
            </Box>
        </Table.Cell>
    );
};

const GenderCell = ({ rowData, dataKey, ...props }) => {
    const router = useRouter();
    return (
        <Table.Cell {...props} className="link-group" >
            <Box onClick={() => router.push(`/user/${rowData.id}`, undefined, { shallow: true })}>
                <center><Tag color={rowData.gender === "Female" ? "green" : "orange"}>{rowData[dataKey]}</Tag></center>
            </Box>
        </Table.Cell>
    );
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
        <div style={{ marginTop: "20px" }}>
            <div>
                <h5>Clients Reports</h5><br />
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
                                        </Nav.Dropdown>
                                    </div>
                                    <div style={{ marginRight: "10px" }}>
                                        <Nav.Item active><Button color="red" appearance="primary">Signed Clients</Button></Nav.Item>
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
                                        <Nav.Item active><Button color="red" appearance="primary">Selected Clients</Button></Nav.Item>
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
            <Divider />
            <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "20px" }}>
                <h5>Clients List:</h5>
                <Button color="cyan" appearance="primary" onClick={() => setOpenWithHeader(true)}><AddOutlineIcon color="white" style={{ fontSize: '2em' }} /></Button>
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
                                <Form.Control name="name" />
                                <Form.HelpText>Required</Form.HelpText>
                            </Form.Group>
                            <Form.Group controlId="name-2">
                                <Form.ControlLabel>Last Name</Form.ControlLabel>
                                <Form.Control name="name" />
                                <Form.HelpText>Required</Form.HelpText>
                            </Form.Group>
                            <Form.Group controlId="email-1">
                                <Form.ControlLabel>Email</Form.ControlLabel>
                                <Form.Control name="email" type="email" />
                                <Form.HelpText>Required</Form.HelpText>
                            </Form.Group>
                            <Form.Group controlId="phone-1">
                                <Form.ControlLabel>Phone</Form.ControlLabel>
                                <Form.Control name="name" />
                            </Form.Group>
                            <Form.Group controlId="gender-1">
                                <Form.ControlLabel>Gender</Form.ControlLabel>
                                <Form.Control name="name" />
                            </Form.Group>
                            <Form.Group controlId="country-1">
                                <Form.ControlLabel>Gender</Form.ControlLabel>
                                <Form.Control name="name" />
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
            <span style={{ color: "#1675E0", marginLeft: "5px" }}><Tag color="green">Search filter:</Tag></span>
            <Grid fluid style={{ marginBottom: "5px", marginTop: "3px" }}>
                <Row >
                    <Col xs={24} sm={12} md={6}>
                        <TextField
                            id="name"
                            label="Search Name, Email, Phone"
                            variant="outlined"
                            onChange={handleSearchTermChange}
                            value={searchTerm}
                        />
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <TextField
                            id="country"
                            label="Search Country"
                            variant="outlined"
                            onChange={handleCountryChange}
                            value={country}
                        />
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <InputGroup style={{ width: 358, height: "55px" }}>
                            <span style={{ marginTop: "5px" }}>Start Date</span>
                            <DatePicker appearance="default" value={startDate} onChange={(date) => setStartDate(date)} style={{ width: 150 }} />
                            <InputGroup.Addon style={{ background: "whitesmoke" }}>至</InputGroup.Addon>
                            <span style={{ marginTop: "5px" }}>End Date</span>
                            <DatePicker format="yyyy-MM-dd" appearance="default" value={endDate} onChange={(date) => setEndDate(date)} style={{ width: 150 }} />
                        </InputGroup>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <FormControl style={{ width: "60%", marginLeft: "100px" }}>
                            <InputLabel id="gender=label">Gender</InputLabel>
                            <Select
                                labelId="gender-label"
                                id="gender"
                                value={gender}
                                label="Gender"
                                sx={{ color: 'black' }}
                                onChange={handleGenderChange}
                            >
                                <MenuItem value="">All</MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value='female'>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
            </Grid>
            <Table bordered={true} cellBordered={true} height={500} data={data} loading={loading} style={{ color: "black", fontFamily: "Quicksand, sans-serif" }}>
                <Table.Column width={50} align="center" resizable>
                    <Table.HeaderCell style={{ background: "#34c3ff" }}><h6>Id</h6></Table.HeaderCell>
                    <Table.Cell dataKey="id" style={{ color: "#1675E0" }} />
                </Table.Column>
                <Table.Column width={100} resizable>
                    <Table.HeaderCell style={{ background: "#34c3ff", color: "black" }}><h6>First Name</h6></Table.HeaderCell>
                    <Table.Cell dataKey="first_name" />
                </Table.Column>

                <Table.Column width={100}>
                    <Table.HeaderCell style={{ background: "#34c3ff", color: "black" }}><h6>Last Name</h6></Table.HeaderCell>
                    <Table.Cell dataKey="last_name" />
                </Table.Column>

                <Table.Column width={200}>
                    <Table.HeaderCell style={{ background: "#34c3ff", color: "black" }}><h6>Email</h6></Table.HeaderCell>
                    <Table.Cell dataKey="email" style={{ color: "#1675E0" }} />
                </Table.Column>
                <Table.Column width={200} flexGrow={1}>
                    <Table.HeaderCell style={{ background: "#34c3ff", color: "black" }}><h6>Phone</h6></Table.HeaderCell>
                    <Table.Cell dataKey="phone" />
                </Table.Column>
                <Table.Column width={200} flexGrow={1}>
                    <Table.HeaderCell style={{ background: "#34c3ff", color: "black" }}><h6>Gender</h6></Table.HeaderCell>
                    <GenderCell dataKey="gender" />
                </Table.Column>
                <Table.Column width={200} flexGrow={1}>
                    <Table.HeaderCell style={{ background: "#34c3ff", color: "black" }}><h6>Country</h6></Table.HeaderCell>
                    <Table.Cell dataKey="country" />
                </Table.Column>
                <Table.Column width={200} flexGrow={1}>
                    <Table.HeaderCell style={{ background: "#34c3ff", color: "black" }}><h6>Created At</h6></Table.HeaderCell>
                    <Table.Cell dataKey="created_at" />
                </Table.Column>
                <Table.Column width={200} flexGrow={1}>
                    <Table.HeaderCell style={{ background: "#34c3ff", color: "black" }}><h6>Actions</h6></Table.HeaderCell>
                    <ActionCell dataKey="id" />
                </Table.Column>
            </Table>
            <div style={{ padding: 20 }}>
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    maxButtons={5}
                    size="xs"
                    layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                    total={pagination.count}
                    limitOptions={[10, 20]}
                    limit={limit}
                    activePage={page}
                    onChangePage={setPage}
                    onChangeLimit={handleChangeLimit}
                />
            </div>
        </div>
    );
};

export default ListClients;