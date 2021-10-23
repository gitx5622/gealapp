import React from 'react';
import GealLayout from '../layout/geal-layout';
import ListUsers from '../users/list-users';
import UserDetails from '../users/user-details';
import { useDispatch, useSelector } from "react-redux";
import { getRoles } from "../../state/actions/roleAction";
import Home from './home/home';
import ListServicemen from '../servicemen/list-servicemen';
import ListJobs from '../jobs/list-jobs';
import ListSkills from '../skills/list-skills';
import ListClients from '../clients/list-clients';
import ListRoles from './roles/list-roles';
import Payments from '../payments/payments';

const GealDashboard = ({ section }) => {
    const dispatch = useDispatch();
    const roleSelector = useSelector(state => state.roleState);
    const { roles } = roleSelector;
    const permissions = roles.user_permissions;

    const view_users = permissions.filter((permission) => permission === "view-users")
    const view_user = permissions.filter((permission) => permission === "view-user")
    const view_sub_category = permissions.filter((permission) => permission === "view-sub-category")
    const view_users_permission = JSON.stringify(view_users[0]);
    const view_user_permission = JSON.stringify(view_user[0]);
    const view_sub_category_permission = JSON.stringify(view_sub_category[0]);

    React.useEffect(() => {
        getRoles(dispatch);
    }, [dispatch])

    React.useEffect(() => {
        try {
            JSON.parse(localStorage.currentUser);
        } catch (error) {
            localStorage.clear();
            window.location.replace('/');
        }
    }, []);

    const renderOrderPages = () => {
        switch (section) {
            case 'home':
                return (
                    <Home />
                );
            case 'payments':
                return (
                    <Payments />
                );
            case 'list-servicemen':
                return (
                    <ListServicemen />
                );
            case 'list-jobs':
                return (
                    <ListJobs section={section} />
                );
            case 'list-roles':
                return (
                    <ListRoles section={section} />
                );
            case 'list-clients':
                return (
                    <ListClients section={section} />
                );
            case 'list-skills':
                return (
                    <ListSkills section={section} />
                );
            case 'list-users':
                return (
                    <ListUsers section={section} />

                );
            case 'specific-user':
                return (
                    <UserDetails section={section} />
                );
            case undefined:
                return '';
            default:
                return '';
        }
    }
    return (
        <GealLayout>
            {renderOrderPages()}
        </GealLayout>
    )
}
export default GealDashboard;