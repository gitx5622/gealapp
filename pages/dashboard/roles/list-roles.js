import React, {useEffect} from 'react';
import GealDashboard from '../../../components/dashboard/geal-dashboard';
import {initializeStore} from "../../../state";
import {getAllRoles} from "../../../state/actions/roleAction";


const ListRoles = () => {
    return (
        <GealDashboard page='dashboard' section='list-roles'/>
    );
};

export const getServerSideProps = async context => {
    let initialServerSideState;
    const state = initializeStore();
    const { dispatch } = state;
    await getAllRoles(dispatch);
    const { roleState } = state.getState();
    initialServerSideState = {
        roleState,
    };

    return {
        props: {
            initialServerSideState,
        },
    };
};

export default ListRoles;
