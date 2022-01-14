import React, { useState, useEffect } from 'react';
import { getRolePermissions } from '../../state/actions/roleAction';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Row, Col, Panel, Tag } from 'rsuite';

const RoleDetails = () => {
    const [role, setRole] = useState("")
    const [description, setDescription] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();
    const roleSelector = useSelector(state => state.roleState);
    const { role_permissions } = roleSelector;

    useEffect(() => {
        getRolePermissions(dispatch, role);
    }, [dispatch, role]);

    useEffect(() => {
        setRole(localStorage.role)
        setDescription(localStorage.description);
    },[])

    return (
        <div>
            <Grid fluid style={{ fontFamily: "Raleway, sans-serif" }}>
                <Row>
                    <Col xs={24} sm={24} md={24} style={{ borderRight: "1px solid whitesmoke", }}>
                        <Panel>
                            <Grid fluid>
                                <Row>
                                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Show Role</p>
                                    <p style={{ fontSize: "20px" }}><b>Name:</b> {role}</p><br />
                                    <p style={{ fontSize: "20px" }}><b>Description:</b> {description}</p><br />
                                    <p style={{ fontSize: "20px" }}><b>Permissions:</b> </p>
                                    {role_permissions.assigned_permissions?.map((assigned_permission) => (
                                        <div key={assigned_permission.id}>
                                        <Col xs={24} sm={12} md={6}>
                                            <Tag style={{ marginBottom:"10px", background: "linear-gradient(rgb(0, 109, 126) 0%, rgb(1, 103, 119) 21%)" }}>
                                                <h6 style={{ color: "white"}}>{assigned_permission.name}</h6>
                                            </Tag>
                                        </Col>
                                        </div>
                                    ))}
                                </Row>
                            </Grid>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default RoleDetails
