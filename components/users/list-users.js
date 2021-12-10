import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Grid, Row, Col, Panel, Tag, Button, Drawer, Form, ButtonToolbar
} from 'rsuite';
import { getUsers } from '../../state/actions/usersAction';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';

const ListUsers = () => {
    const [openWithHeader, setOpenWithHeader] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const dispatch = useDispatch();
    const router = useRouter();

    const userSelector = useSelector(state => state.usersState);
    const { user_list } = userSelector;
    const { users, pagination } = user_list;


    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    }

    React.useEffect(() => {
        getUsers(dispatch, searchTerm, gender, country);
    }, [dispatch, searchTerm, gender, country]);

    return (
        <div>
            <Panel>
                <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "20px" }}>
                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Users List:</p>
                    <Button style={{ color: "white", background: "#006D7E" }} onClick={() => setOpenWithHeader(true)}>Create User</Button>
                    <Drawer size='xs' open={openWithHeader} onClose={() => setOpenWithHeader(false)}>
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
                                    <Form.Control name="name-1" />
                                    <Form.HelpText>Required</Form.HelpText>
                                </Form.Group>
                                <Form.Group controlId="name-2">
                                    <Form.ControlLabel>Last Name</Form.ControlLabel>
                                    <Form.Control name="name-2" />
                                    <Form.HelpText>Required</Form.HelpText>
                                </Form.Group>
                                <Form.Group controlId="email-1">
                                    <Form.ControlLabel>Email</Form.ControlLabel>
                                    <Form.Control name="email-1" type="email" />
                                    <Form.HelpText>Required</Form.HelpText>
                                </Form.Group>
                                <Form.Group controlId="phone-1">
                                    <Form.ControlLabel>Phone</Form.ControlLabel>
                                    <Form.Control name="phone-1" />
                                </Form.Group>
                                <Form.Group controlId="gender-1">
                                    <Form.ControlLabel>Gender</Form.ControlLabel>
                                    <Form.Control name="gender-1" />
                                </Form.Group>
                                <Form.Group controlId="country-1">
                                    <Form.ControlLabel>Gender</Form.ControlLabel>
                                    <Form.Control name="country-1" />
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
                <Grid fluid style={{ marginBottom: "5px", marginTop: "3px" }}>
                    <Row >
                        <Col xs={24} sm={12} md={6}>
                            <input
                                id="name"
                                onChange={handleSearchTermChange}
                                value={searchTerm}
                                placeholder="Search Name, Email ..."
                                style={{height:"30px", borderRadius: '10px',padding:"5px" }}
                            />
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <input
                                id="country"
                                onChange={handleCountryChange}
                                placeholder="Search Country..."
                                style={{height:"30px", borderRadius: '10px', padding:"5px" }}
                                value={country}
                            />
                        </Col>
                        <Col xs={24} sm={12} md={6}>

                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <label>Gender</label>
                            <select
                                id="gender-label"
                                value={gender}
                                style={{ color: 'black', width: '60%',height:"30px", borderRadius: '10px', padding:"5px" }}
                                onChange={handleGenderChange}
                            >
                                <MenuItem value="">All</MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value='female'>Female</MenuItem>
                            </select>
                        </Col>
                    </Row>
                </Grid>
                <table style={styles.table}>
                    <tr>
                        <th style={styles.table.th}>ID</th>
                        <th style={styles.table.th}>First Name</th>
                        <th style={styles.table.th}>Last Name</th>
                        <th style={styles.table.th}>Email</th>
                        <th style={styles.table.th}>Phone</th>
                        <th style={styles.table.th}>Gender</th>
                        <th style={styles.table.th}>Country</th>
                        <th style={styles.table.th}>Actions</th>
                    </tr>
                    {users?.map((data, index) => (
                        <tr key={index}>
                            <td style={styles.table.td}>
                                {data.id}
                            </td>
                            <td style={styles.table.td}>{data.first_name}</td>
                            <td style={styles.table.td}>{data.last_name}</td>
                            <td style={styles.table.td}>{data.email}</td>
                            <td style={styles.table.td}>{data.phone}</td>
                            <td style={styles.table.td}>{data.gender}</td>
                            <td style={styles.table.td}>{data.country}</td>
                            <td style={styles.table.td}>
                                <Tag onClick={() => router.push(`/user/${data.id}`)} style={{ cursor: 'pointer' }} color="cyan">Show</Tag>
                                <Tag style={{ cursor: 'pointer' }} color="blue">Edit</Tag>
                                <Tag style={{ cursor: 'pointer' }} color="red">Delete</Tag>
                            </td>
                        </tr>
                    ))}
                </table>
            </Panel>
        </div>
    );
};

export default ListUsers;

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
        }
    },
}