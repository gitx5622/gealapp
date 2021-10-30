import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Row, Col, SelectPicker, Panel, Checkbox } from 'rsuite';
import { getAllRoles, getRolePermissions } from "../../../state/actions/roleAction";


const ListRoles = () => {
    const [selectedRole, setSelectedRole] = useState('admin');
    const dispatch = useDispatch();
    const roleSelector = useSelector(state => state.roleState);
    const { all_roles, role_permissions } = roleSelector;

    useEffect(() => {
        getAllRoles(dispatch);
        getRolePermissions(dispatch);
    }, [dispatch]);

    const handleSelectChange = (e) => {
        setSelectedRole(e.target.value);
    }

    useEffect(() => {
        getRolePermissions(dispatch, selectedRole);
    }, [dispatch, selectedRole])

    console.log(selectedRole);

    return (
        <div style={{ marginTop: "20px", marginLeft: "5px" }}>
            <div style={{ marginLeft: "10px", marginRight: "20px" }}>
                <h3>Roles:</h3>
            </div>
            <br />
            <Grid fluid>
                <Row>
                    <Col xs={24} sm={24} md={24} style={{ borderRight: "1px solid whitesmoke", }}>
                        <h6>Select Role Name</h6><br />
        
                            <select value={selectedRole} style={{width:"100%", height: "40px", fontSize: "20px", borderRadius:"5px"}} onChange={handleSelectChange}>
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
                                            <Checkbox defaultChecked><h6 style={{color: "black"}}>{assigned_permission.name}</h6><p>{assigned_permission.description}</p></Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </Grid>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default ListRoles;