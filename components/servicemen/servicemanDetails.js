import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Row, Col, Panel, Modal, Tag, List, Button, Message } from 'rsuite';
import { getServiceman, approveServicemanFile, rejectServicemanFile } from "../../state/actions/servicemenAction";

const ServicemanDetails = () => {
    const [rejectOpen, setRejectOpen] = React.useState(false);
    const [rejectReason, setRejectReason] = useState("");
    const [approvedMessage, setApprovedMessage] = useState("");
    const [declineMessage, setDeclineMessage] = useState("");

    const router = useRouter();
    const { servicemanID: servicemenUserID } = router.query;
    const dispatch = useDispatch();

    const servicemanSelector = useSelector(state => state.servicemenState);
    const { serviceman } = servicemanSelector;

    const handleRejectOpen = () => setRejectOpen(true);
    const handleRejectClose = () => setRejectOpen(false);

    const handleRejectChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setRejectReason({
            ...rejectReason,
            [name]: value
        })
    }

    const handleApproveServicemanFile = () => {
        approveServicemanFile(dispatch, serviceman?.serviceman_details?.serviceman?.id)
            .then(response => {
                if (response.status === 200) {
                    setOpen(false);
                    setApprovedMessage("The servicemas file was approved successfully")
                }
            });
    }

    const handleRejectServicemanFile = (reason) => {
        rejectServicemanFile(dispatch, serviceman?.serviceman_details?.serviceman?.id, reason)
            .then(response => {
                if (response.status === 200) {
                    setRejectOpen(false);
                    setDeclineMessage("The serviceman file was declined successfully")
                }
            });
    }

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
                                    {approvedMessage && (
                                        <Message type="success">{approvedMessage}</Message>
                                    )}
                                    {declineMessage && (
                                        <Message type="error">{declineMessage}</Message>
                                    )}
                                    <p style={{ fontSize: "24px", color: "#006D7E", textDecoration: "underline" }}>Show Serviceman</p>
                                    <div style={{ display: "flex", justifyContent: "right", gap: "1em" }}>
                                        <div style={{ float: "right" }}><Button onClick={handleApproveServicemanFile} color="green" appearance='primary'>Approve Serviceman File</Button></div>

                                        <div style={{ float: "right" }}><Button onClick={handleRejectOpen} color="red" appearance='primary'>Decline Serviceman File</Button></div>
                                        <Modal open={rejectOpen} onClose={handleRejectClose}>
                                            <Modal.Header>
                                                <Modal.Title>Decline Serviceman File</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <label htmlFor="reason">Reason for decline servimen:</label>
                                                <textarea
                                                    name="reason"
                                                    onChange={handleRejectChange}
                                                    style={{ border: '1px solid #becad6', width: "100%", padding: "10px", borderRadius: "5px", }}
                                                    rows={4}
                                                    placeholder="Decline serviceman reason" /><br />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button onClick={() => handleRejectServicemanFile(rejectReason)} appearance="primary">
                                                    Reject File
                                                </Button>
                                                <Button onClick={handleRejectClose} appearance="subtle">
                                                    Cancel
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                    <p style={{ fontSize: "24px", color: "#006D7E" }}>ID: {serviceman?.serviceman_details?.serviceman?.id}</p>
                                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Status: <Tag color="red">{serviceman?.serviceman_details?.serviceman?.serviceman_status}</Tag></p>
                                    <p style={{ fontSize: "20px" }}><b>Serviceman Details:</b> </p>
                                </Row>
                            </Grid>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
            <Panel>
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={24}>
                            <Grid fluid>
                                <Row>
                                    <Col xs={24} sm={6} md={6} style={{ borderRight: "1px solid whitesmoke", }}>
                                        <List>
                                            <List.Item>
                                                Approval Date
                                            </List.Item>
                                            <List.Item>
                                                Certificate Name
                                            </List.Item>
                                            <List.Item>
                                                Education Level
                                            </List.Item>
                                            <List.Item>
                                                Experience
                                            </List.Item>
                                            <List.Item>
                                                Latitutude
                                            </List.Item>
                                            <List.Item>
                                                Longitude
                                            </List.Item>
                                            <List.Item>
                                                Licence Number
                                            </List.Item>
                                            <List.Item>
                                                National ID
                                            </List.Item>
                                            <List.Item>
                                                Rejection Date
                                            </List.Item>
                                        </List>
                                    </Col>
                                    <Col xs={24} sm={6} md={6} style={{ borderRight: "1px solid whitesmoke", }}>
                                        <List>
                                            <List.Item style={{ color: "#1675e0" }}>
                                                {serviceman.serviceman_details?.serviceman?.approval_date ?
                                                    serviceman.serviceman_details?.serviceman?.approval_date : "null"}
                                            </List.Item>
                                            <List.Item style={{ color: "#1675e0" }}>
                                                {serviceman.serviceman_details?.serviceman?.certificate_name ?
                                                    serviceman.serviceman_details?.serviceman?.certificate_name : "null"}
                                            </List.Item>
                                            <List.Item style={{ color: "#1675e0" }}>
                                                {serviceman.serviceman_details?.serviceman?.education_level ?
                                                    serviceman.serviceman_details?.serviceman?.education_level : "null"}
                                            </List.Item>
                                            <List.Item style={{ color: "#1675e0" }}>
                                                {serviceman.serviceman_details?.serviceman?.experience ?
                                                    serviceman.serviceman_details?.serviceman?.experience : "null"}
                                            </List.Item>
                                            <List.Item style={{ color: "#1675e0" }}>
                                                {serviceman.serviceman_details?.serviceman?.latitude ?
                                                    serviceman.serviceman_details?.serviceman?.latitude : "null"}
                                            </List.Item>
                                            <List.Item style={{ color: "#1675e0" }}>
                                                {serviceman.serviceman_details?.serviceman?.longitude ?
                                                    serviceman.serviceman_details?.serviceman?.longitude : "null"}
                                            </List.Item>
                                            <List.Item style={{ color: "#1675e0" }}>
                                                {serviceman.serviceman_details?.serviceman?.licence_number ?
                                                    serviceman.serviceman_details?.serviceman?.licence_number : "null"}
                                            </List.Item>
                                            <List.Item style={{ color: "#1675e0" }}>
                                                {serviceman.serviceman_details?.serviceman?.national_id ?
                                                    serviceman.serviceman_details?.serviceman?.national_id : "null"}
                                            </List.Item>
                                            <List.Item style={{ color: "#1675e0" }}>
                                                {serviceman.serviceman_details?.serviceman?.rejection_date ?
                                                    serviceman.serviceman_details?.serviceman?.rejection_date : "null"}
                                            </List.Item>
                                        </List>
                                    </Col>
                                </Row>
                            </Grid>
                        </Col>
                    </Row>
                </Grid>
            </Panel>
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
