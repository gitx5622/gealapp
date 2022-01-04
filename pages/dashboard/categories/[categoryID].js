import React, {useEffect} from 'react';
import GealDashboard from '../../../components/dashboard/geal-dashboard';


const ListCategories= () => {

    useEffect(() => {
        try {
            JSON.parse(localStorage.currentUser);
            JSON.parse(localStorage.roles);
        } catch (error) {
            localStorage.clear();
            window.location.replace('/');
        }
    }, []);

    return (
        <GealDashboard page='dashboard' section='sub-categories'/>
    );
};

export default ListCategories;
