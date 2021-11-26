import React, {useEffect} from 'react';
import Dashboard from "../../../components/dashboard/geal-dashboard";

const RoleDetails = () => {
    useEffect(() => {
        try {
            JSON.parse(localStorage.currentUser);
        } catch (error) {
            localStorage.clear();
            window.location.replace('/user/login');
        }
    }, []);
    return (
        <Dashboard page='order' section='specific-role'/>
    );
};

export default RoleDetails;
