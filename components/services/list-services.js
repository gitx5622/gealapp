import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Panel, Tag, Message} from 'rsuite';
import { BoxLoading } from 'react-loadingg';
import {useRouter} from "next/router";
import {getCategories, updateCategoryStatus} from "../../state/actions/categoryAction";

const ListServices = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const categorySelector = useSelector(state => state.categoryState);
    const { categories, isLoading, errorMessage } = categorySelector;

    useEffect(() => {
        getCategories(dispatch);
    }, [dispatch]);

    return (
        <div>
            <Panel>
                <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "20px" }}>
                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Services:</p>
                </div>
                <br />
                {isLoading && (
                    <BoxLoading/>
                )}
                {errorMessage && (
                    <Message type="error">{errorMessage}</Message>
                )}
                <p style={{ fontSize: "20px", color: "#006D7E" }}>Categories:</p>
                <table style={styles.table}>
                    <tr>
                        <th style={styles.table.th}>ID</th>
                        <th style={styles.table.th}>Category Name</th>
                        <th style={styles.table.th}>Category Status</th>
                        <th style={styles.table.th}>Actions</th>
                    </tr>
                    {categories?.map((data, index) => (
                        <tr key={index}>
                            <td style={styles.table.td}>
                                {data.id}
                            </td>
                            <td style={styles.table.td}>{data && data.name}</td>
                            <td style={styles.table.td}>{data && data.status}</td>
                            <td style={styles.table.td}>
                                <Tag onClick={() => router.push(`/dashboard/services/${data.id}`)} style={{ cursor: 'pointer' }} color="cyan">Show Services</Tag>
                                <Tag onClick={() => {updateCategoryStatus(dispatch, data.id); getCategories(dispatch)}} style={{ cursor: 'pointer' }} color="red">Deactivate</Tag>
                            </td>
                        </tr>
                    ))}
                </table><br/>
            </Panel>
        </div>
    );
};

export default ListServices;

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