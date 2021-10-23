import React, { useState } from 'react';
import {
    Nav, Panel, Steps, ButtonGroup, Button, Tag, InputGroup, Table,
    Grid, Form, Row, Col, Checkbox, ButtonToolbar, DatePicker, Pagination,
} from 'rsuite';
import { TextField, FormControl, Box, InputLabel, Select, MenuItem } from '@mui/material';
import { AiOutlineEye, AiTwotoneDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { getUsers } from '../../state/actions/usersAction';
import { useDispatch, useSelector } from "react-redux";
import Pesapal from '../../assets/pesapal.png';
import Mpesa from '../../assets/mpesa.png';
import Airtel from '../../assets/airtel.png';
import Equity from '../../assets/equity.png';
import Visa from '../../assets/visa.png';
import Master from '../../assets/master.png';
import { useRouter } from 'next/router';
import Image from "next/image";
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

    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };

    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);
    return (
        <div style={{ marginTop: "20px", marginLeft: "10px", marginRight: "10px" }}>
            <h6>Make Payment</h6><br />
            <Panel shaded>
                <Steps current={step}>
                    <Steps.Item title="Payment Method" description="Choose Payment option" />
                    <Steps.Item title="View Payment Details" description="View Selected Payment Details" />
                    <Steps.Item title="Enter Payment Details" description="Enter payment details" />
                    <Steps.Item title="Complete" description="Complete Payment" />
                </Steps>
                <hr />
                <Panel>
                    {step === 0 && (
                        <div style={{ display: "flex", justifyContent: "space-around", height: "80px" }}>
                            <Checkbox defaultChecked> <Image src={Mpesa} alt="" width={80} height={50} /></Checkbox>
                            <Checkbox> <Image src={Pesapal} alt="" width={100} height={50} /></Checkbox>
                            <Checkbox> <Image src={Airtel} alt="" width={80} height={50} /></Checkbox>
                            <Checkbox> <Image src={Equity} alt="" width={80} height={50} /></Checkbox>
                            <Checkbox> <Image src={Visa} alt="" width={80} height={50} /></Checkbox>
                            <Checkbox> <Image src={Master} alt="" width={80} height={50} /></Checkbox>
                        </div>
                    )}
                    {step === 1 && (
                        <div>
                            <h6>Payment Details</h6>
                            <p>Send Mpesa Kshs. </p>
                            <Panel>
                                <p>
                                    Step 1: Go to M-PESA on your phone<br />

                                    Step 2: Select Lipa na M-pesa option in the drop-down<br />

                                    Step 3: Select the Pay Bill option<br />

                                    Step 4:  Enter the business number 206206<br />

                                    Step 5: asks for account number, which is automatically generated based on the service you used.<br />

                                    Step 6: Enter the amount, which was generated as an invoice.<br />

                                    Step 7: Enter M-pesa Pin Number and Press Send<br />

                                    Step 8: Confirmation message from M-pesa and you are set!
                                </p>
                            </Panel>
                        </div>
                    )}
                    {step === 2 && (
                        <div>
                            <Form>
                                <Form.Group controlId="name">
                                    <Form.ControlLabel>Phone Number</Form.ControlLabel>
                                    <Form.Control name="name" />
                                    <Form.HelpText>Required</Form.HelpText>
                                </Form.Group>
                                <Form.Group controlId="name">
                                    <Form.ControlLabel>Confirmation Code</Form.ControlLabel>
                                    <Form.Control name="name" />
                                    <Form.HelpText>Required</Form.HelpText>
                                </Form.Group>
                            </Form>
                        </div>
                    )}
                    {step === 3 && (
                        <Panel shaded>
                            <h4>Are you sure you want to make a payment of Amount(Kshs 10,000) to Graphine East Africa  Limited</h4>
                            <ButtonToolbar>
                                <Button color="green" appearance="primary">Yes</Button>
                                <Button color="red" appearance="primary">No</Button>
                            </ButtonToolbar>
                        </Panel>
                    )}
                </Panel>
                <hr />
                <ButtonGroup>
                    <Button color='orange' appearance="primary" onClick={onPrevious} disabled={step === 0}>
                        Previous
                    </Button>
                    <Button color='cyan' appearance="primary" onClick={onNext} disabled={step === 3}>
                        Next
                    </Button>
                </ButtonGroup>
            </Panel><br />
            <h6>Transactions</h6>
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
            <h4>Payment Reports</h4>
            <Panel shaded>
                <Chart
                    options={state.options}
                    series={state.series}
                    autoScaleYaxis={true}
                    autoScaleXaxis={true}
                    type="line"
                    height={350}
                    width="100%"
                />
            </Panel>
        </div>
    )
}

export default Payments
