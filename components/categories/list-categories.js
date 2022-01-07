import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Grid, Row, Col, Nav, Panel, Tag, Button, Drawer, Form,
    ButtonToolbar, Divider, Message
} from 'rsuite';
import MenuItem from '@mui/material/MenuItem';
import dynamic from 'next/dynamic';
import { BoxLoading } from 'react-loadingg';
import {useRouter} from "next/router";
import {getCategories, updateCategoryStatus} from "../../state/actions/categoryAction";
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
const ListCategories = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const categorySelector = useSelector(state => state.categoryState);
    const { categories, isLoading, errorMessage } = categorySelector;

    const handleUpdateCategory = (data) => {
        updateCategoryStatus(dispatch, data.id)
            .then(response => {
                if (response.status === 200){
                   getCategories(dispatch);
                }
            })
    }
    useEffect(() => {
        getCategories(dispatch)
    }, [dispatch]);

    return (
        <div>
            <Panel>
                <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "20px" }}>
                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Categories:</p>
                </div>
                <br />
                {isLoading && (
                    <BoxLoading/>
                )}
                {errorMessage && (
                    <Message type="error">{errorMessage}</Message>
                )}
                <table style={styles.table}>
                    <tr>
                        <th style={styles.table.th}>ID</th>
                        <th style={styles.table.th}>Category Name</th>
                        <th style={styles.table.th}>Category Status</th>
                        <th style={styles.table.th}>Actions</th>
                    </tr>
                    {categories?.map((data, index) => (
                        <tr key={index}>
                            <td style={styles.table.td}>
                                {data.id}
                            </td>
                            <td style={styles.table.td}>{data && data.name}</td>
                            <td style={styles.table.td}>{data && data.status}</td>
                            <td style={styles.table.td}>
                                <Tag onClick={() => router.push(`/dashboard/categories/${data.id}`)} style={{ cursor: 'pointer' }} color="cyan">Show Sub Categories</Tag>
                                {data && data.status === "active" ?
                                    <Tag onClick={() => handleUpdateCategory(data)} style={{cursor: 'pointer'}}
                                         color="red"> Deactivate</Tag>
                                    :
                                    <Tag onClick={() => handleUpdateCategory(data)} style={{cursor: 'pointer'}}
                                         color="green"> Activate</Tag>
                                }
                            </td>
                        </tr>
                    ))}
                </table><br/>
            </Panel>
            <Panel>
                <Divider />
                <p style={{ fontSize: "24px", color: "#006D7E" }}>Categories Reports:</p>
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
        </div>
    );
};

export default ListCategories;

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