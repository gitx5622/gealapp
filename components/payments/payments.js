import React, { useState } from 'react';
import {
    Nav, Panel, ButtonToolbar, ButtonGroup, Button, Tag, InputGroup, Table,
    Grid, Row, Col, DatePicker, Pagination,
} from 'rsuite';
import { TextField, FormControl, Box, InputLabel, Select, MenuItem } from '@mui/material';
import { AiOutlineEye, AiTwotoneDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { getUsers } from '../../state/actions/usersAction';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

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

const CustomButtonGroup = ({ appearance }) => (
    <ButtonToolbar>
      <ButtonGroup>
        <Button appearance={appearance}>standing Charge and material costs</Button>
        <Button appearance={appearance}>client approval of JOB completion</Button>
        <Button appearance={appearance}>client payment of for labor more than 1 day</Button>
        <Button appearance={appearance}>any Cash received by servicemen</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );

  
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

const styles = {
    marginBottom: 50,
};

const CustomNav = ({ active, onSelect, ...props }) => {
    return (
        <Nav {...props} activeKey={active} onSelect={onSelect} style={styles}>
            <Nav.Item eventKey="home">
                MPESA
            </Nav.Item>
            <Nav.Item eventKey="news">Creadit Cards</Nav.Item>
            <Nav.Item eventKey="solutions">Debit Cards</Nav.Item>
            <Nav.Item eventKey="about">Other Mobile Money</Nav.Item>
        </Nav>
    );
};

const Payments = () => {
    const [active, setActive] = React.useState('home');
    const [step, setStep] = React.useState(0);
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
        getUsers(dispatch, searchTerm, gender, country, startDate, endDate);
    }, [dispatch, searchTerm, gender, country, startDate, endDate]);

    return (
        <div style={{ marginTop: "20px", marginLeft: "10px", marginRight: "10px" }}>
        <div>
            <h6>Transactions</h6>
            </div>
            <CustomNav appearance="tabs" active={active} onSelect={setActive} />
            <div style={{marginTop: "-40px"}}>
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
            </div>
            <Table bordered={true} cellBordered={true} height={500} data={data} loading={loading} style={{ color: "black", fontFamily: "Quicksand, sans-serif" }}>
                <Table.Column width={50} align="center">
                    <Table.HeaderCell style={{ background: "#34c3ff" }}><h6>Id</h6></Table.HeaderCell>
                    <Table.Cell dataKey="id" style={{ color: "#1675E0" }} />
                </Table.Column>
                <Table.Column width={100}>
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
            <h4>Payment Reports</h4>
            <Panel shaded>
            <CustomButtonGroup appearance="ghost" />
                <Chart
                    options={state.options}
                    series={state.series}
                    type="line"
                    height={350}
                    width="100%"
                />
            </Panel>
        </div>
    )
}

export default Payments
