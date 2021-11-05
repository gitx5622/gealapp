import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { Grid, Row, Form, Col, Button, ButtonToolbar, Modal, Panel, Input, Checkbox, CheckboxGroup, Drawer } from 'rsuite';
import { deleteRolePermissions, getAllPermissions, getAllRoles, getRolePermissions } from "../../../state/actions/roleAction";


const ListRoles = () => {
    const [role, setRole] = React.useState({
        role_name: "",
        user_permissions: [],
        description: ""
    })
    const [openWithHeader, setOpenWithHeader] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedRole, setSelectedRole] = useState('admin');
    const router = useRouter();
    const dispatch = useDispatch();
    const roleSelector = useSelector(state => state.roleState);
    const { all_permissions, all_roles, role_permissions } = roleSelector;

    const [value, setValue] = React.useState(role_permissions.assigned_permissions);

    console.log(value);

    const handleCheckboxChange = value => setValue(value);

    const handleChange = (formValue, event) => {
        setRole({
            ...role,
            [event.target.name]: event.target.value,
        })
    }

    const handleDelete = (role_name) => {
        deleteRolePermissions(dispatch, role_name);
        setOpen(false);
        router.push('/dashboard/roles/list-roles')
    }

    const handleRoleUpdateSubmit = () => {
        const bodyData = {
            role_name: role.role_name,
            user_permissions: value,
            description: role.description
        }

        if (bodyData) {
            createRolePermissions(dispatch, bodyData);
        }

    };

    const handleSelectChange = (e) => {
        setSelectedRole(e.target.value);
    }

    useEffect(() => {
        getAllPermissions(dispatch);
        getAllRoles(dispatch);
        getRolePermissions(dispatch);
    }, [dispatch]);


    useEffect(() => {
        getRolePermissions(dispatch, selectedRole);
    }, [dispatch, selectedRole]);

    const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);
    return (
        <div style={{ marginTop: "20px", marginLeft: "5px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "20px" }}>
                <h3>Roles:</h3>
                <div style={{ display: "flex", gap: 1 }}>
                    <Button onClick={() => setOpenWithHeader(true)} color="cyan" appearance="primary">Update role</Button>
                    <Button onClick={handleOpen} color="red" appearance="primary">Delete role</Button>
                </div>
                <Modal open={open} onClose={handleClose}>
                    <Modal.Header>
                        <Modal.Title><h4>Delete Role and Permissions</h4></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <select value={selectedRole} style={{ background: "white", width: "100%", height: "40px", fontSize: "20px", borderRadius: "5px" }} onChange={handleSelectChange}>
                            {all_roles.user_permissions?.map((role) => (
                                <option key={role.id} value={role.name}>{role.name}</option>
                            ))}
                        </select><br/><br/>
                        <p>Are you sure you want to delete this role ?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => handleDelete(selectedRole)} color="red" appearance="primary">
                            Ok
                        </Button>
                        <Button onClick={handleClose} appearance="subtle">
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Drawer open={openWithHeader} onClose={() => setOpenWithHeader(false)}>
                    <Drawer.Header>
                        <Drawer.Title><h5>Update Role</h5></Drawer.Title>
                        <Drawer.Actions>
                            <Button onClick={() => setOpenWithHeader(false)}>Cancel</Button>
                            <Button onClick={() => setOpenWithHeader(false)} appearance="primary">
                                Confirm
                            </Button>
                        </Drawer.Actions>
                    </Drawer.Header>
                    <Drawer.Body>
                        <Form fluid onSubmit={handleRoleUpdateSubmit}>
                            <Form.Group controlId="role_name">
                                <Form.ControlLabel>Role Name</Form.ControlLabel>
                                <select value={selectedRole} style={{ background: "white", width: "100%", height: "40px", fontSize: "20px", borderRadius: "5px" }} onChange={handleSelectChange}>
                                    {all_roles.user_permissions?.map((role) => (
                                        <option key={role.id} value={role.name}>{role.name}</option>
                                    ))}
                                </select>
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.ControlLabel>Description</Form.ControlLabel>
                                <Form.Control rows={5} name="description" onChange={handleChange} accepter={Textarea} />
                            </Form.Group>
                            <h3>Permissions</h3>
                            <CheckboxGroup inline name="checkboxList" defaultValue={value} value={value} onChange={handleCheckboxChange}>
                                <Grid fluid>
                                    <Row>
                                        {all_permissions.user_permissions?.map(item => (
                                            <Col xs={12} sm={12} md={8}>
                                                <Checkbox key={item.id} value={item.name}>
                                                    {item.name}
                                                </Checkbox>
                                            </Col>
                                        ))}
                                    </Row>
                                </Grid>
                            </CheckboxGroup>
                            <Form.Group>
                                <ButtonToolbar>
                                    <Button type="submit" appearance="primary">Submit</Button>
                                    <Button appearance="default">Cancel</Button>
                                </ButtonToolbar>
                            </Form.Group>
                        </Form>
                    </Drawer.Body>
                </Drawer>
            </div>
            <br />
            <Grid fluid>
                <Row>
                    <Col xs={24} sm={24} md={24} style={{ borderRight: "1px solid whitesmoke", }}>
                        <h6>Select Role Name</h6><br />

                        <select value={selectedRole} style={{background: "white", width: "100%", height: "40px", fontSize: "20px", borderRadius: "5px" }} onChange={handleSelectChange}>
                            {all_roles.user_permissions?.map((role) => (
                                <option key={role.id} value={role.name}>{role.name}</option>
                            ))}
                        </select>

                    </Col>
                </Row>
            </Grid>
            <Grid fluid>
                <Row>
                    <Col xs={24} sm={24} md={24} style={{ borderRight: "1px solid whitesmoke", }}>
                        <h3>Permissions of selected role</h3>
                        <Panel style={{ background: "whitesmoke" }}>
                            <Grid fluid>
                                <Row>
                                    {role_permissions.assigned_permissions?.map((assigned_permission) => (
                                        <Col xs={24} sm={12} md={8}>
                                            <Checkbox defaultChecked><h6 style={{ color: "black" }}>{assigned_permission.name}</h6><p>{assigned_permission.description}</p></Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </Grid>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </div >
    );
};

export default ListRoles;