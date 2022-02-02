import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Panel, Pagination, Message } from 'rsuite';
import { BoxLoading } from 'react-loadingg';
import {filterSkills} from "../../state/actions/skillAction";

let activePage = 1;
let per =10;

const ListSkills = () => {
    const dispatch = useDispatch();

    const skillSelector = useSelector(state => state.skillState);
    const { skills, isLoading, errorMessage } = skillSelector;

    useEffect(() => {
        filterSkills(dispatch, activePage, per);
    }, [dispatch, activePage, per]);

    return (
        <div>
            <Panel>
                <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "20px" }}>
                    <p style={{ fontSize: "24px", color: "#006D7E" }}>Skills:</p>
                </div>
                <br />
                {isLoading && (
                    <BoxLoading/>
                )}
                {errorMessage && (
                    <Message type="error">{errorMessage}</Message>
                )}
                <table style={styles.table}>
                    <tr>
                        <th style={styles.table.th}>ID</th>
                        <th style={styles.table.th}>Name</th>
                        <th style={styles.table.th}>Phone</th>
                        <th style={styles.table.th}>Role</th>
                        <th style={styles.table.th}>Category</th>
                        <th style={styles.table.th}>Sub Category</th>
                        <th style={styles.table.th}>Serviceman Status</th>
                    </tr>
                    {skills?.skill_list?.skill_list?.map((data, index) => (
                        <tr key={index}>
                            <td style={styles.table.td}>
                                {data.id}
                            </td>
                            <td style={styles.table.td}>{data && data.user.first_name + "    " + data.user.last_name}</td>
                            <td style={styles.table.td}>{data && data.user.phone}</td>
                            <td style={styles.table.td}>{data && data.user.role}</td>
                            <td style={styles.table.td}>{data && data.category.name}</td>
                            <td style={styles.table.td}>{data && data.sub_category.name}</td>
                            <td style={styles.table.td}>{data && data.serviceman_registration.status}</td>
                        </tr>
                    ))}
                </table><br/>
                {skills?.skill_list?.skill_list && (
                    <Pagination size="md" total={skills?.skill_list?.skill_list?.pagination.count} limit={per} activePage={activePage} onChangePage={(page) => setActivePage(page)}/>
                )}
            </Panel>
        </div>
    );
};

export default ListSkills;

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