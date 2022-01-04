import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Row, Col, Panel, Tag } from 'rsuite';
import { getServiceman } from "../../state/actions/servicemenAction";
import Link from 'next/link';

const ServicemanDetails = () => {
    const router = useRouter();
    const { servicemanID: servicemenUserID } = router.query
    const dispatch = useDispatch();
    const servicemanSelector = useSelector(state => state.servicemenState);
    const { serviceman } = servicemanSelector;

    useEffect(() => {
        getServiceman(dispatch, servicemenUserID);
    }, [dispatch, servicemenUserID]);
    console.log(serviceman)
    return (
        <div>
            <Grid fluid style={{ fontFamily: "Raleway, sans-serif" }}>
                <Row>
                    <Col xs={24} sm={24} md={24} style={{ borderRight: "1px solid whitesmoke", }}>
                        <Panel>
                            <Grid fluid>
                                <Row>
                                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Show Serviceman</p>
                                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Status: <Tag color="red">{serviceman}</Tag></p>
                                    <p style={{ fontSize: "20px" }}><b>Serviceman Documents:</b> </p>
                                    <table style={styles.table}>
                                        <tr>
                                            <th style={styles.table.th}>ID</th>
                                            <th style={styles.table.th}>Document Type</th>
                                            <th style={styles.table.th}>File Name</th>
                                            <th style={styles.table.th}>Status</th>
                                            <th style={styles.table.th}>Approved/Not</th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.thd}>1</th>
                                            <th style={styles.table.td}>Application Letter</th>
                                            <th style={styles.table.td}>
                                                <Link href={`https://geal.doctorateessays.com/uploads/${serviceman?.serviceman_details?.serviceman?.application_letter}`}>
                                                    <a>{serviceman.application_letter}</a>
                                                </Link>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.thd}>2</th>
                                            <th style={styles.table.td}>Certificate</th>
                                            <th style={styles.table.td}>
                                                <Link href={`https://geal.doctorateessays.com/uploads/${serviceman.certificate}`}>
                                                    <a>{serviceman.certificate}</a>
                                                </Link>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.thd}>3</th>
                                            <th style={styles.table.td}>Contract</th>
                                            <th style={styles.table.td}>
                                                <Link href={`https://geal.doctorateessays.com/uploads/${serviceman.contract}`}>
                                                    <a>{serviceman.contract}</a>
                                                </Link>

                                            </th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.thd}>4</th>
                                            <th style={styles.table.td}>Good Conduct</th>
                                            <th style={styles.table.td}>
                                                <Link href={`https://geal.doctorateessays.com/uploads/${serviceman.good_conduct}`}>
                                                    <a>{serviceman.good_conduct}</a>
                                                </Link>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.thd}>5</th>
                                            <th style={styles.table.td}>ID Photo</th>
                                            <th style={styles.table.td}>
                                                <Link href={`https://geal.doctorateessays.com/uploads/${serviceman.id_photo}`}>
                                                    <a>{serviceman.id_photo}</a>
                                                </Link>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.thd}>6</th>
                                            <th style={styles.table.td}>Curriculum Vitau(CV)</th>
                                            <th style={styles.table.td}>
                                                <Link href={`https://geal.doctorateessays.com/uploads/${serviceman.my_cv}`}>
                                                    <a>{serviceman.my_cv}</a>
                                                </Link>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.thd}>7</th>
                                            <th style={styles.table.td}>Photo</th>
                                            <th style={styles.table.td}>
                                                <Link href={`https://geal.doctorateessays.com/uploads/${serviceman.photo}`}>
                                                    <a>{serviceman.photo}</a>
                                                </Link>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.thd}>8</th>
                                            <th style={styles.table.td}>Curriculum Vitau(CV)</th>
                                            <th style={styles.table.td}>
                                                <Link href={`https://geal.doctorateessays.com/uploads/${serviceman.my_cv}`}>
                                                    <a>{serviceman.my_cv}</a>
                                                </Link>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.thd}>9</th>
                                            <th style={styles.table.td}>Professional License</th>
                                            <th style={styles.table.td}>
                                                <Link href={`https://geal.doctorateessays.com/uploads/${serviceman.professional_license}`}>
                                                    <a>{serviceman.professional_license}</a>
                                                </Link>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.thd}>10</th>
                                            <th style={styles.table.td}>Reference Letter</th>
                                            <th style={styles.table.td}>
                                                <Link href={`https://geal.doctorateessays.com/uploads/${serviceman.reference_letter}`}>
                                                    <a>{serviceman.reference_letter}</a>
                                                </Link>
                                            </th>
                                        </tr>
                                    </table>
                                </Row>
                            </Grid>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default ServicemanDetails;
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
        },
        thd: {
            border: '1px solid #dddddd',
            textAlign: 'left',
            padding: '8px',
            background: 'whitesmoke',
            color: "black"
        }
    },
}
