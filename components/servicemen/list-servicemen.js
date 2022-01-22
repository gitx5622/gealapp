import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Grid, Row, Col, Nav, Panel, Tag, Button, Drawer, Form, ButtonToolbar, Divider, Message
} from 'rsuite';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { approveServiceman, getAllServicemen, rejectServiceman } from "../../state/actions/servicemenAction";
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
const ListServicemen = () => {
    const [openWithHeader, setOpenWithHeader] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [approvedMessage, setApprovedMessage] = useState("");
    const [declineMessage, setDeclineMessage] = useState("");

    const dispatch = useDispatch();
    const router = useRouter();

    const servicemenSelector = useSelector(state => state.servicemenState);
    const { servicemen } = servicemenSelector;
    console.log(servicemen);


    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    }


    const handleApproveServiceman = (data) => {
        approveServiceman(dispatch,parseInt(data.user_id))
            .then(response => {
                if (response.status === 200) {
                    getAllServicemen(dispatch)
                    setApprovedMessage("Serviceman have been approved successfully")
                }
            });
    }

    const handleRejectServiceman = (data) => {
        rejectServiceman(dispatch, parseInt(data.user_id))
            .then(response => {
                if (response.status === 200) {
                    getAllServicemen(dispatch)
                    setDeclineMessage("Serviceman have been rejected successfully")
                }
            });
    }

    React.useEffect(() => {
        getAllServicemen(dispatch);
    }, [dispatch]);

    return (
        <div>
            <Panel>
                {approvedMessage && (
                    <Message type="success">{approvedMessage}</Message>
                )}
                {declineMessage && (
                    <Message type="error">{declineMessage}</Message>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "20px" }}>
                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Servicemen List:</p>
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
                                <option>All</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </Col>
                    </Row>
                </Grid>
                <table style={styles.table}>
                    <tr>
                        <th style={styles.table.th}>ID</th>
                        <th style={styles.table.th}>First Name</th>
                        <th style={styles.table.th}>Last Name</th>
                        <th style={styles.table.th}>Phone</th>
                        <th style={styles.table.th}>National ID</th>
                        <th style={styles.table.th}>Serviceman Status</th>
                        <th style={styles.table.th}>Rejection Date</th>
                        <th style={styles.table.th}>Actions</th>
                    </tr>
                    {servicemen.registration_list?.service_registrations?.map((data, index) => (
                        <tr key={index}>
                            <td style={styles.table.td}>
                                {data.id}
                            </td>
                            <td style={styles.table.td}>{data.first_name}</td>
                            <td style={styles.table.td}>{data.last_name}</td>
                            <td style={styles.table.td}>{data.phone}</td>
                            <td style={styles.table.td}>{data.national_id ? data.national_id : "null"}</td>
                            <td style={styles.table.td}><Tag color={data.serviceman_status === "active" ? "green" : "orange"}>{data.serviceman_status}</Tag></td>
                            <td style={styles.table.td}>{data.rejection_date ? data.rejection_date : "null"}</td>
                            <td style={styles.table.td}>
                                <Tag
                                    onClick={() => router.push(`/dashboard/servicemen/${data.user_id}`)}
                                    style={{ cursor: 'pointer' }} color="cyan">Show</Tag>
                                <Tag onClick={() => handleApproveServiceman(data)} style={{ cursor: 'pointer' }} color="green">Activate Serviceman</Tag>
                                <Tag onClick={() => handleRejectServiceman(data)} style={{ cursor: 'pointer' }} color="red">Reject Serviceman</Tag>
                            </td>
                        </tr>
                    ))}
                </table>
            </Panel>
            <Divider />
            <p style={{ fontSize: "24px", color: "#006D7E" }}>Servicemen Reports:</p>
            <Divider />
            <Grid fluid>
                <Row className="show-grid">
                    <Col xs={12}>
                        <p>Cumulative graphs of signed servicemen</p><br />
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
                        <p>Cumulative graphs of selected Servicemen</p><br />
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
        </div>
    );
};

export default ListServicemen;

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