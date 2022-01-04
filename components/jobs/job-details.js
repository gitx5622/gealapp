import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { List, Grid, Modal, Row, Col, Tag, Panel, ButtonToolbar, Button, Form } from 'rsuite';
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
        <div style={{ marginTop: "20px" }}>
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
                                    <h4>{job  && job?.job?.client?.first_name} {job && job?.job?.client?.last_name}</h4>
                                    {/*<Tag size="lg" color="violet">{job && job?.job.role}</Tag>*/}
                                </div>
                            </List.Item>
                        </List>
                        <Grid fluid>
                            <Row>
                                <Col xs={24} sm={12} md={12} style={{ borderRight: "1px solid whitesmoke", }}>
                                    <List>
                                        <List.Item>
                                            First Name
                                        </List.Item>
                                        <List.Item>
                                            Last Name
                                        </List.Item>
                                        <List.Item>
                                            Serviceman Role
                                        </List.Item>
                                        <List.Item>
                                            Serviceman Country
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
                                <Col xs={24} sm={12} md={12} style={{ borderRight: "1px solid whitesmoke", }}>
                                    <List>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.client?.first_name}
                                        </List.Item>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.client?.last_name}
                                        </List.Item>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.serviceman?.role}
                                        </List.Item>
                                        <List.Item style={{ color: "#1675e0" }}>
                                            {job && job?.job?.serviceman?.country}
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
                            </Row>
                        </Grid>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default JobDetails;