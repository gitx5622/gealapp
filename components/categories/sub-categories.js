import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Grid, Row, Col, Nav, Panel, Tag, Button, Toggle, Divider, Message,
} from 'rsuite';
import { GiCheckMark } from "react-icons/gi"
import dynamic from 'next/dynamic';
import { BoxLoading } from 'react-loadingg';
import { useRouter } from "next/router";
import {
    getSubCategoriesAndServices,
    updateService,
    updateSubCategoryAndServices
} from "../../state/actions/categoryAction";
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
const ListSubCategories = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { categoryID } = router.query;

    const categorySelector = useSelector(state => state.categoryState);
    const { sub_categories, isLoading, errorMessage } = categorySelector;

    useEffect(() => {
        getSubCategoriesAndServices(dispatch, categoryID);
    }, [dispatch, categoryID]);

    return (
        <div>
            <Panel>
                <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "20px" }}>
                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Sub Categories:</p>
                </div>
                <br />
                {isLoading && (
                    <BoxLoading />
                )}
                {errorMessage && (
                    <Message type="error">{errorMessage}</Message>
                )}
                <table style={styles.table}>
                    <tr>
                        <th style={styles.table.th}><center>ID</center></th>
                        <th style={styles.table.th}><center>Sub Category</center></th>
                        <th style={styles.table.th}><center>Services</center></th>
                        <th style={styles.table.th}><center>Deactivate</center></th>
                    </tr>
                    {sub_categories?.sub_categories?.map((data, index) => (
                        <tr key={index}>
                            <td style={styles.table.td}>
                                <center>{data.id}</center>
                            </td>
                            <td style={styles.table.td}><center>{data && data.name}</center></td>
                            <td style={styles.table.td}>
                                <center>
                                    {data && data.services.length === 0 ? "" :
                                        <tr>
                                            <th>Status</th>
                                            <th>Service</th>
                                            <th>Deactivate/Activate</th>
                                        </tr>}
                                    {data && data.services?.map((data) => (
                                        <tr key={data.id} style={{ width: "100%" }}>
                                            <td style={styles.table.td}><Tag color="green" style={{ marginBottom: "5px" }}>{data.status}</Tag></td>
                                            <td style={styles.table.td}><GiCheckMark />{data.name}</td>
                                            <td style={styles.table.td}><Toggle onChange={(checked) => { updateService(dispatch, data.id); !checked}} checked={data.status === 'active' ? true : false} size="lg" checkedChildren="Deactivate" unCheckedChildren="Activate" /></td>
                                        </tr>
                                    ))}
                                </center>
                            </td>
                            <td style={styles.table.td}>
                                <center>
                                    <Tag onClick={() => { updateSubCategoryAndServices(dispatch, data.id); getSubCategoriesAndServices(dispatch) }}
                                        style={{ cursor: 'pointer' }} color="red">Deactivate Sub Category</Tag>
                                </center>
                            </td>
                        </tr>
                    ))}
                </table><br />
            </Panel>
            <Panel>
                <Divider />
                <p style={{ fontSize: "24px", color: "#006D7E" }}>Sub Categories Reports:</p>
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
            </Panel>
        </div >
    );
};

export default ListSubCategories;

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