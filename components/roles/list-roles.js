import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { Grid, Row, Tag, Form, Col, Button, ButtonToolbar, Modal, Panel, Input, Checkbox, CheckboxGroup, Drawer } from 'rsuite';
import { deleteRolePermissions, getAllPermissions, getAllRoles, getRolePermissions } from "../../state/actions/roleAction";

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

    console.log(all_roles);

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
    const handleRoleClick = (data, index) => {
        router.push(`/dashboard/roles/${index}`)
        localStorage.role = data.name;
        localStorage.description = data.description;
    }
    useEffect(() => {
        getAllPermissions(dispatch);
        getAllRoles(dispatch);
    }, [dispatch]);

    useEffect(() => {
        getRolePermissions(dispatch, selectedRole);
    }, [dispatch, selectedRole]);

    return (
        <div style={{ marginTop: "20px", marginLeft: "5px" }}>
            <Panel>
                <div>
                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Roles:</p>
                    <Modal open={open} onClose={handleClose}>
                        <Modal.Header>
                            <Modal.Title><h4>Delete Role and Permissions</h4></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <select value={selectedRole} style={{ background: "white", width: "100%", height: "40px", fontSize: "20px", borderRadius: "5px" }} onChange={handleSelectChange}>
                                {all_roles.user_permissions?.map((role) => (
                                    <option key={role.id} value={role.name}>{role.name}</option>
                                ))}
                            </select><br /><br />
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
                                    {/* <Form.Control rows={5} name="description" onChange={handleChange} accepter={Textarea} /> */}
                                </Form.Group>
                                <h3>Permissions</h3>
                                <CheckboxGroup inline name="checkboxList" defaultValue={value} value={value} onChange={handleCheckboxChange}>
                                    <Grid fluid>
                                        <Row>
                                            {all_permissions.user_permissions?.map(item => (
                                                <div key={item.id}>
                                                <Col xs={12} sm={12} md={8}>
                                                    <Checkbox key={item.id} value={item.name}>
                                                        {item.name}
                                                    </Checkbox>
                                                </Col>
                                                </div>
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
                </div><br />
                <table style={styles.table}>
                    <tr>
                        <th style={styles.table.th}>Name</th>
                        <th style={styles.table.th}>Description</th>
                        <th style={styles.table.th}>Actions</th>
                    </tr>
                    {all_roles.user_permissions?.map((data, index) => (
                        <tr key={index}>
                            <td style={styles.table.td}>
                                {data.name}
                            </td>
                            <td style={styles.table.td}>{data.description}</td>
                            <td style={styles.table.td}>
                                <Tag style={{cursor: 'pointer'}} onClick={() => handleRoleClick(data, index)} color="cyan">Show</Tag>
                                <Tag style={{cursor: 'pointer'}} onClick={() => setOpenWithHeader(true)} color="blue">Edit</Tag>
                                <Tag style={{cursor: 'pointer'}} onClick={handleOpen} color="red">Delete</Tag>
                            </td>
                        </tr>
                    ))}
                </table>
            </Panel>
        </div >
    );
};

export default ListRoles;

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
            color:"white"
        }
    },
}
