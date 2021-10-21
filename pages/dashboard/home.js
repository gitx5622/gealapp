import React, {useEffect} from 'react';
import GealDashboard from '../../components/dashboard/geal-dashboard';

const Home = () => {
    useEffect(() => {
        try {
            JSON.parse(localStorage.currentUser);
        } catch (error) {
            localStorage.clear();
            window.location.replace('/');
        }
    }, []);
    return (
        <div>
        <GealDashboard page='dashboard' section='home'/>
        </div>
    );
};

export default Home;
