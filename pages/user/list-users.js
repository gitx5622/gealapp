import React, {useEffect} from 'react';
import GealDashboard from '../../components/dashboard/geal-dashboard';


const ListUsers = () => {
    
    useEffect(() => {
        try {
            JSON.parse(localStorage.currentUser);
        } catch (error) {
            localStorage.clear();
            window.location.replace('/');
        }
    }, []);
    
    return (
        <GealDashboard page='user' section='list-users'/>
    );
};

export default ListUsers;
