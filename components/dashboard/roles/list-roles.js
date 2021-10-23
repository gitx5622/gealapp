import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Table, Grid, Row, Drawer, ButtonToolbar, Form, Col, List, Panel, Checkbox, Button } from 'rsuite';
import { getRoles } from "../../../state/actions/roleAction";
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';
import { Box } from '@mui/material';
import ModelIcon from '@rsuite/icons/Model';
import AddOutlineIcon from '@rsuite/icons/AddOutline'



const ActionCell = ({ rowData, dataKey, ...props }) => {
    function handleAction() {
        alert(`id:${rowData[dataKey]}`);
    }
    return (
        <Table.Cell {...props} className="link-group">
            <Box sx={{ display: "flex", gap: 1 }}>
                <Box sx={{ justifyContent: "center", height: "30px", width: "30px", background: "#5CB85C", borderRadius: '5px' }}>
                    <center><AiOutlineEye style={{ fontSize: '20px', color: "white", marginTop: "5px" }} /></center>
                </Box>
                <Box sx={{ justifyContent: "center", height: "30px", width: "30px", background: "#d9534f", borderRadius: '5px' }}>
                    <center><AiTwotoneDelete style={{ fontSize: '20px', color: "white", marginTop: "5px" }} /></center>
                </Box>
                <Box sx={{ justifyContent: "center", height: "30px", width: "30px", background: "#337AB7", borderRadius: '5px' }}>
                    <center><FiEdit style={{ fontSize: '20px', color: "white", marginTop: "5px" }} /></center>
                </Box>
            </Box>
        </Table.Cell>
    );
};

const ListRoles = () => {
    const [openWithHeader, setOpenWithHeader] = useState(false);
    const dispatch = useDispatch();
    const roleSelector = useSelector(state => state.roleState);
    const { roles } = roleSelector;
    const permissions = roles.user_permissions;

    const view_users = permissions.filter((permission) => permission === "view-users")
    const view_user = permissions.filter((permission) => permission === "view-user")
    const view_sub_category = permissions.filter((permission) => permission === "view-sub-category")
    const view_users_permission = JSON.stringify(view_users[0]);
    const view_user_permission = JSON.stringify(view_user[0]);
    const view_sub_category_permission = JSON.stringify(view_sub_category[0]);

    React.useEffect(() => {
        getRoles(dispatch);
    }, [dispatch])

    return (
        <div style={{ marginTop: "20px", marginLeft: "5px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "20px" }}>
                <h5>Roles</h5>
                <Button
                    color="cyan"
                    appearance="primary"
                    onClick={() => setOpenWithHeader(true)}><AddOutlineIcon color="white" style={{ fontSize: '2em' }} />
                </Button>
                <Drawer
                    size='xs'
                    open={openWithHeader}
                    onClose={() => setOpenWithHeader(false)}>
                    <Drawer.Header>
                        <Drawer.Title>Add User</Drawer.Title>
                        <Drawer.Actions>
                            <Button onClick={() => setOpenWithHeader(false)} appearance="primary">
                                Close
                            </Button>
                        </Drawer.Actions>
                    </Drawer.Header>
                    <Drawer.Body>
                        <Form fluid>
                            <Form.Group controlId="name-1">
                                <Form.ControlLabel>First Name</Form.ControlLabel>
                                <Form.Control name="name" />
                                <Form.HelpText>Required</Form.HelpText>
                            </Form.Group>
                            <Form.Group controlId="name-2">
                                <Form.ControlLabel>Last Name</Form.ControlLabel>
                                <Form.Control name="name" />
                                <Form.HelpText>Required</Form.HelpText>
                            </Form.Group>
                            <Form.Group controlId="email-1">
                                <Form.ControlLabel>Email</Form.ControlLabel>
                                <Form.Control name="email" type="email" />
                                <Form.HelpText>Required</Form.HelpText>
                            </Form.Group>
                            <Form.Group controlId="phone-1">
                                <Form.ControlLabel>Phone</Form.ControlLabel>
                                <Form.Control name="name" />
                            </Form.Group>
                            <Form.Group controlId="gender-1">
                                <Form.ControlLabel>Gender</Form.ControlLabel>
                                <Form.Control name="name" />
                            </Form.Group>
                            <Form.Group controlId="country-1">
                                <Form.ControlLabel>Gender</Form.ControlLabel>
                                <Form.Control name="name" />
                            </Form.Group>
                            <Form.Group>
                                <ButtonToolbar>
                                    <Button appearance="primary">Submit</Button>
                                    <Button appearance="default">Cancel</Button>
                                </ButtonToolbar>
                            </Form.Group>
                        </Form>
                    </Drawer.Body>
                </Drawer>
            </div>
            <br />
            <Grid fluid>
                <Panel shaded style={{ background: "whitesmoke" }}>
                    <Row>
                        <Col xs={24} sm={12} md={12} style={{ borderRight: "1px solid whitesmoke", }}>
                            <List bordered>
                                <List.Item>
                                    <ModelIcon spin style={{ fontSize: "2em" }} />&#160;&#160; <span style={{ fontSize: "18px" }}>Current Role</span>
                                </List.Item>
                            </List>
                        </Col>
                        <Col xs={24} sm={12} md={12} style={{ borderRight: "1px solid whitesmoke", }}>
                            <List bordered>
                                <List.Item style={{ color: "#1675e0" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h5>{roles.role}</h5>
                                        <SpinnerIcon pulse style={{ fontSize: '2em' }} />
                                    </div>
                                </List.Item>
                            </List>
                        </Col>
                    </Row>
                </Panel><br />
                <h6>User Permissions</h6><br />
                <Panel shaded style={{ maxHeight: "500px", width: "100%" }}>
                    <Row className="show-grid">
                        {permissions.map((value, index) => (
                            <Col xs={6}>
                                <Checkbox defaultChecked>{value}</Checkbox>
                            </Col>
                        ))}
                    </Row>
                </Panel>
            </Grid><br />
            <Button color="cyan" appearance="primary">Update role</Button>
        </div>
    );
};

export default ListRoles;