import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Row, Col, Panel, Tag } from 'rsuite';
import {getServiceman} from "../../state/actions/servicemenAction";

const ServicemanDetails = () => {
    const router = useRouter();
    const { servicemanID: servicemenUserID } = router.query
    const dispatch = useDispatch();
    const servicemanSelector = useSelector(state => state.servicemenState);
    const { serviceman } = servicemanSelector;

    useEffect(() => {
        getServiceman(dispatch, servicemenUserID);
    }, [dispatch, servicemenUserID]);

    return (
        <div>
            <Grid fluid style={{ fontFamily: "Raleway, sans-serif" }}>
                <Row>
                    <Col xs={24} sm={24} md={24} style={{ borderRight: "1px solid whitesmoke", }}>
                        <Panel>
                            <Grid fluid>
                                <Row>
                                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Show Serviceman</p>
                                    <p style={{ fontSize: "20px" }}><b>Serviceman Documents:</b> </p>
                                    <table style={styles.table}>
                                        <tr>
                                            <th style={styles.table.th}>ID</th>
                                            <th style={styles.table.th}>Document Type</th>
                                            <th style={styles.table.th}>File Name</th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.thx}>1</th>
                                            <th style={styles.table.th}>Application Letter</th>
                                            <th style={styles.table.td}>{serviceman.application_letter}</th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.thx}>2</th>
                                            <th style={styles.table.th}>Certificate</th>
                                            <th style={styles.table.td}>{serviceman.certificate}</th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.thx}>3</th>
                                            <th style={styles.table.th}>Contract</th>
                                            <th style={styles.table.td}>{serviceman.contract}</th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.th}>4</th>
                                            <th style={styles.table.th}>Good Conduct</th>
                                            <th style={styles.table.td}>{serviceman.good_conduct}</th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.th}>5</th>
                                            <th style={styles.table.th}>ID Photo</th>
                                            <th style={styles.table.td}>{serviceman.id_photo}</th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.th}>6</th>
                                            <th style={styles.table.th}>Curriculum Vitau(CV)</th>
                                            <th style={styles.table.td}>{serviceman.my_cv}</th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.th}>7</th>
                                            <th style={styles.table.th}>Photo</th>
                                            <th style={styles.table.td}>{serviceman.photo}</th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.th}>8</th>
                                            <th style={styles.table.th}>Curriculum Vitau(CV)</th>
                                            <th style={styles.table.td}>{serviceman.my_cv}</th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.th}>9</th>
                                            <th style={styles.table.th}>Professional License</th>
                                            <th style={styles.table.td}>{serviceman.professional_license}</th>
                                        </tr>
                                        <tr>
                                            <th style={styles.table.th}>10</th>
                                            <th style={styles.table.th}>Reference Letter</th>
                                            <th style={styles.table.td}>{serviceman.reference_letter}</th>
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
        thx: {
            border: '1px solid #dddddd',
            textAlign: 'left',
            padding: '8px',
            color:"white",
            background: '#006D7E',
        },
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
