import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Grid, Row, Col, Nav, Panel, Tag, Button, Divider, Message, List
} from 'rsuite';
import { BoxLoading } from 'react-loadingg';
import {useRouter} from "next/router";
import {getServices, getSubCategoriesAndServices, updateService} from "../../state/actions/categoryAction";

const Services = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { serviceID } = router.query;

    const categorySelector = useSelector(state => state.categoryState);
    const { sub_categories, services, isLoading, errorMessage } = categorySelector;

    useEffect(() => {
        getSubCategoriesAndServices(dispatch, serviceID);
        getServices(dispatch, serviceID)
    }, [dispatch, serviceID]);

    return (
        <div>
            <Panel>
                <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "20px" }}>
                    <p style={{ fontSize: "24px", color: "#006D7E" }}>View Services by Sub Category:</p>
                </div>
                <br />
                {isLoading && (
                    <BoxLoading/>
                )}
                {errorMessage && (
                    <Message type="error">{errorMessage}</Message>
                )}
                <Grid fluid>
                    <Row>
                        <Col xs={6}>
                            <p style={{ fontSize: "24px", color: "#006D7E" }}>Filter by Sub Category:</p>
                            <List bordered hover={true}>
                                {sub_categories?.sub_categories?.map((category) => (
                                    <List.Item key={category.id}>
                                        <div onClick={() => getServices(dispatch, category.id)}>{category.name}</div>
                                    </List.Item>
                                ))}
                            </List>
                        </Col>
                        <Col xs={18}>
                            <p style={{ fontSize: "24px", color: "black" }}>Services:</p>
                            <Grid fluid>
                                <Row>
                                    {services?.sub_categories?.map((service, index) => (
                                        service.services?.map((data) => (
                                            <div key={data.id}>
                                    <Col xs={4}>
                                        <Tag onClick={()=> {updateService(dispatch, data.id); getServices(dispatch, data.id)}} style={{marginBottom:"5px"}} color="green">{data.name}</Tag>
                                    </Col>
                                            </div>
                                        ))
                                    ))}
                                </Row>
                            </Grid>
                        </Col>
                    </Row>
                </Grid><br/>
            </Panel>
        </div>
    );
};

export default Services;
