import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Form, ButtonToolbar, Button, Input, Grid, Row, Col,Panel, Checkbox, CheckboxGroup } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { createRolePermissions, getAllPermissions } from '../../state/actions/roleAction';

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const CreateRole = () => {
    const [value, setValue] = React.useState([]);
    const [role, setRole] = React.useState({
        role_name: "",
        user_permissions: [],
        description: ""
    })
    const dispatch = useDispatch();
    const router = useRouter();

    const userPermissionSelector = useSelector(state => state.roleState);

    const { all_permissions } = userPermissionSelector;

    const handleCheckboxChange = value => setValue(value);

    const handleChange = (formValue, event) => {
        setRole({
            ...role,
            [event.target.name]: event.target.value,
        })
    }

    const handleRoleCreateSubmit = () => {
        const bodyData = {
            role_name: role.role_name,
            user_permissions: value,
            description: role.description
        }

        if (role_name !== "" && description !== "") {
            createRolePermissions(dispatch, bodyData);
            router.push('/dashboard/roles/list-roles')
        }

    }
    useEffect(() => {
        getAllPermissions(dispatch);
    }, [dispatch])
    return (
        <div>
            <Panel>
            <p style={{ fontSize: "24px", color: "#006D7E" }}>Create New Permissions:</p><br/>
            <Grid fluid>
                <Row>
                    <Form fluid onSubmit={handleRoleCreateSubmit}>
                        <Col xs={24} sx={24} md={24}>
                            <Form.Group controlId="role_name">
                                <Form.ControlLabel>Role Name</Form.ControlLabel>
                                <Form.Control name="role_name" onChange={handleChange} />
                                <Form.HelpText>role name is required</Form.HelpText>
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.ControlLabel>Description</Form.ControlLabel>
                                <Form.Control rows={5} name="description" onChange={handleChange} accepter={Textarea} />
                            </Form.Group>
                            <p style={{ fontSize: "24px", color: "#006D7E" }}>Tick Permissions:</p><br/>
                            <CheckboxGroup inline name="checkboxList" value={value} onChange={handleCheckboxChange}>
                                <Grid fluid>
                                    <Row>
                                        {all_permissions.user_permissions?.map(item => (
                                            <div key={item.id}>
                                            <Col xs={12} sm={12} md={8}>
                                                <Checkbox value={item.name}>
                                                    {item.name}
                                                </Checkbox>
                                            </Col>
                                            </div>
                                        ))}
                                    </Row>
                                </Grid>
                            </CheckboxGroup>
                        </Col>
                        <Form.Group>
                        <Button style={{color:"white", width:"100%", background:"#006D7E"}} type="submit">Create New Permission</Button>
                        </Form.Group>
                    </Form>
                </Row>
            </Grid>
            </Panel>
        </div>
    )
}

export default CreateRole
