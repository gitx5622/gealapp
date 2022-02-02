import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Grid, Row, Col, Nav, Panel, Tag, Button, Toggle, Divider, Message,
} from 'rsuite';
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
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
                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Sub Categories and Services:</p>
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
                        <th style={styles.table.th}><center>Sub Category Status</center></th>
                        <th style={styles.table.th}><center>Deactivate</center></th>
                    </tr>
                    {sub_categories?.sub_categories?.map((sub_category, index) => (
                        <tr key={index}>
                            <td style={styles.table.td}>
                                <center>{sub_category.id}</center>
                            </td>
                            <td style={styles.table.td}><center>{sub_category && sub_category.name}</center></td>
                            <td style={styles.table.td}>
                                <center>
                                    {sub_category && sub_category.services.length === 0 ? "" :
                                        <tr>
                                            <th>Status</th>
                                            <th>Service</th>
                                            <th>Deactivate/Activate</th>
                                        </tr>}
                                    {sub_category && sub_category.services?.map((service) => (
                                        <tr key={service.id} style={{ width: "100%" }}>
                                            <td style={styles.table.td}><Tag color="green" style={{ marginBottom: "5px" }}>{service.status}</Tag></td>
                                            <td style={styles.table.td}><GiCheckMark />{service.name}</td>
                                            <td style={styles.table.td}>
                                                {service && service.status === "active" ?
                                                    <Tag onClick={() => {
                                                        updateService(dispatch, service.id)
                                                            .then(response => {
                                                                if(response.status === 200){
                                                                    getSubCategoriesAndServices(dispatch, sub_category.id)
                                                                }
                                                            })
                                                    }} style={{cursor: 'pointer'}}
                                                         color="red"> Deactivate</Tag>
                                                    :
                                                    <Tag onClick={() =>
                                                        updateService(dispatch, service.id)
                                                            .then(response => {
                                                                if(response.status === 200){
                                                                    getSubCategoriesAndServices(dispatch, sub_category.id)
                                                                }
                                                            })
                                                    } style={{cursor: 'pointer'}}
                                                         color="green"> Activate</Tag>
                                                }
                                            </td>
                                        </tr>
                                    ))}
                                </center>
                            </td>
                            <td style={styles.table.td}>
                                <center><Tag color="orange">{sub_category.status}</Tag></center>
                            </td>
                            <td style={styles.table.td}>
                                <center>
                                    {sub_category.status === "active" ?
                                        <Tag onClick={() =>
                                            updateSubCategoryAndServices(dispatch, sub_category.id)
                                                .then(response => {
                                                    if (response.status === 200){
                                                        getSubCategoriesAndServices(dispatch, sub_category.id)
                                                    }
                                                })
                                        }
                                             style={{ cursor: 'pointer' }}
                                             color="red">
                                            Deactivate Sub Category
                                        </Tag>
                                    :
                                        <Tag onClick={() =>
                                            updateSubCategoryAndServices(dispatch, sub_category.id)
                                                .then(response => {
                                                    if (response.status === 200){
                                                        getSubCategoriesAndServices(dispatch, sub_category.id)
                                                    }
                                                })
                                        }
                                             style={{ cursor: 'pointer' }}
                                             color="blue">
                                            Activate Sub Category
                                        </Tag>
                                    }

                                </center>
                            </td>
                        </tr>
                    ))}
                </table><br />
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