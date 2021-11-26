import React, { useState } from 'react';
import {
    Nav, Panel, ButtonToolbar, ButtonGroup, Button, Tag, InputGroup, Table,
    Grid, Row, Col, DatePicker, Pagination,
} from 'rsuite';
import { TextField, FormControl, Box, InputLabel, Drawer, MenuItem } from '@mui/material';
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
            <p style={{ fontSize: "24px", color: "#006D7E" }}>Transanctions:</p>
            <CustomNav appearance="tabs" active={active} onSelect={setActive} />
            <Panel>
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
                                style={{ height: "30px", borderRadius: '10px', padding: "5px" }}
                            />
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <input
                                id="country"
                                label="Search Country"
                                variant="outlined"
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
                                labelId="gender-label"
                                id="gender-label"
                                value={gender}
                                label="Gender"
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
            <p style={{ fontSize: "24px", color: "#006D7E" }}>Payment Reports:</p>
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

export default Payments;

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
