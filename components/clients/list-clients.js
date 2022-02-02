import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Row, Col,Panel, Tag, Button, Nav,Divider } from 'rsuite';
import dynamic from 'next/dynamic';
import {getClients} from "../../state/actions/clientAction";
import {useRouter} from "next/router";
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
    const [activePage, setActivePage] = useState(1);

    const per = 10;
    const role= 'client';
    const router = useRouter();
    const dispatch = useDispatch();

    const clientSelector = useSelector(state => state.clientState);
    const { client_list } = clientSelector;
    const { users, pagination } = client_list;

    React.useEffect(() => {
        getClients(dispatch, role, activePage, per);
    }, [dispatch, role, activePage, per]);

    return (
        <div>
            <Panel>
                <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "20px" }}>
                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Client List:</p>
                </div>
                <br />
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
                                <Tag onClick={() => router.push(`/user/${data.id}`)}  style={{ cursor: 'pointer' }} color="cyan">Show</Tag>
                            </td>
                        </tr>
                    ))}
                </table>
            </Panel>
            <Divider/>
            <p style={{ fontSize: "24px", color: "#006D7E" }}>Client Reports:</p>
            <Divider/>
            <div>
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={24}>
                            <Nav>
                                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                    <div>
                                        <Nav.Dropdown title="Reports">
                                            <Nav.Dropdown.Item>All Clients</Nav.Dropdown.Item>
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