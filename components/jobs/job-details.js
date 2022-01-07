import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { List, Grid, Modal, Row, Col, Panel, Button } from 'rsuite';
import {getJobDetails} from "../../state/actions/jobAction";

const JobDetails = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const router = useRouter();
    const { jobID } = router.query;
    const dispatch = useDispatch();
    const jobSelector = useSelector(state => state.jobState);
    const { job } = jobSelector;

    React.useEffect(() => {
        getJobDetails(dispatch, jobID);
    }, [dispatch, jobID]);

    return (
        <Panel>
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "20px" }}>
                <h5>job Details:</h5>
            </div>
            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Delete job</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Are you sure you want to delete this job</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} color="red" appearance="primary">
                        Ok
                    </Button>
                    <Button onClick={handleClose} color="cyan" appearance="primary">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            <br />
            <Grid fluid>
                <Row className="show-grid">
                    <Col xs={24}>
                        <List bordered>
                            <List.Item style={{ background: "#34c3ff" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h4>Job ID: {job && job?.job?.id}</h4>
                                    {/*<Tag size="lg" color="violet">{job && job?.job.role}</Tag>*/}
                                </div>
                            </List.Item>
                        </List>
                        <Grid fluid>
                            <Row>
                                <Col xs={24} sm={6} md={6} style={{ borderRight: "1px solid whitesmoke", }}>
                                    <List>
                                        <List.Item>
                                            Job ID
                                        </List.Item>
                                        <List.Item>
                                            Amount Paid
                                        </List.Item>
                                        <List.Item>
                                            Payment Time
                                        </List.Item>
                                        <List.Item>
                                            Category Name
                                        </List.Item>
                                        <List.Item>
                                            Sub Category Name
                                        </List.Item>
                                        <List.Item>
                                            Service Name
                                        </List.Item>
                                        <List.Item>
                                            Service Status
                                        </List.Item>
                                        <List.Item>
                                            Paid Status
                                        </List.Item>
                                    </List>
                                </Col>
                                <Col xs={24} sm={6} md={6} style={{ borderRight: "1px solid whitesmoke", }}>
                                    <List>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.id}
                                        </List.Item>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.amount_paid ? job && job?.job?.amount_paid
                                            : "null"}
                                        </List.Item> 
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.payment_time ? job && job?.job?.payment_time
                                            : "null"}
                                        </List.Item>                             
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.category?.name}
                                        </List.Item>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.sub_category?.name}
                                        </List.Item>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.service?.name}
                                        </List.Item>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.service?.status}
                                        </List.Item>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.paid_status}
                                        </List.Item>
                                    </List>
                                </Col>
                                <Col xs={24} sm={6} md={6} style={{ borderRight: "1px solid whitesmoke", }}>
                                    <List>
                                        <List.Item>
                                            Service End Time
                                        </List.Item>
                                        <List.Item>
                                            Service Time
                                        </List.Item>
                                        <List.Item>
                                            Created At
                                        </List.Item>
                                        <List.Item>
                                            Updated At
                                        </List.Item>
                                        <List.Item>
                                            Client ID
                                        </List.Item>
                                        <List.Item>
                                            Serviceman ID
                                        </List.Item>
                                        <List.Item>
                                            Client Phone
                                        </List.Item>
                                        <List.Item>
                                            Serviceman Phone
                                        </List.Item>
                                    </List>
                                </Col>
                                <Col xs={24} sm={6} md={6} style={{ borderRight: "1px solid whitesmoke", }}>
                                    <List>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.service_end_time ?
                                            job && job?.job?.service_end_time : "null"}
                                        </List.Item>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.amount_paid ? job && job?.job?.amount_paid
                                            : "null"}
                                        </List.Item>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.created_at}
                                        </List.Item>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.updated_at}
                                        </List.Item>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.client_id}
                                        </List.Item>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.serviceman?.id}
                                        </List.Item>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.client?.phone}
                                        </List.Item>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.serviceman?.phone}
                                        </List.Item>
                                    </List>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                </Row>
            </Grid>
        </div>
        </Panel>
    );
};

export default JobDetails;