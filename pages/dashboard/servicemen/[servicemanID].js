import React, {useEffect} from 'react';
import Dashboard from "../../../components/dashboard/geal-dashboard";

const ServicemanDetails = () => {
    useEffect(() => {
        try {
            JSON.parse(localStorage.currentUser);
        } catch (error) {
            localStorage.clear();
            window.location.replace('/user/login');
        }
    }, []);
    return (
        <Dashboard page='servicemen' section='specific-serviceman'/>
    );
};

export default ServicemanDetails;
