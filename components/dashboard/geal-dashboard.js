import React, { Fragment } from 'react';
import GealLayout from '../layout/geal-layout';
import ServiceRegistration from '../servicemen/service-registration';
import ServicemanDetails from '../servicemen/servicemanDetails';
import ListSubCategories from '../categories/sub-categories';
import ListServicemen from '../servicemen/list-servicemen';
import ListCategories from '../categories/list-categories';
import ServicemenMaps from '../servicemen/servicemen-maps';
import ListServices from '../services/list-services';
import ListClients from '../clients/list-clients';
import UserDetails from '../users/user-details';
import RoleDetails from '../roles/role_details';
import ListSkills from '../skills/list-skills';
import CreateRole from '../roles/create-role';
import ScheduledJobs from '../jobs/scheduled';
import JobDetails from '../jobs/job-details';
import Services from '../services/services';
import ListUsers from '../users/list-users';
import ListRoles from '../roles/list-roles';
import Payments from '../payments/payments';
import RejectedJobs from '../jobs/rejected';
import DeclinedJobs from '../jobs/pending';
import PendingJobs from '../jobs/pending';
import ListJobs from '../jobs/list-jobs';
import ActiveJobs from '../jobs/active';
import Home from './home/home';


const GealDashboard = ({ section }) => {
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
            case 'service-registration':
                return (
                    <ServiceRegistration />
                );
            case 'servicemen':
                return (
                    <ServicemenMaps />
                );
            case 'specific-serviceman':
                return (
                    <ServicemanDetails section={section} />
                );
            case 'list-jobs':
                return (
                    <ListJobs section={section} />
                );
            case 'pending-jobs':
                return (
                    <PendingJobs section={section} />
                );
            case 'active-jobs':
                return (
                    <ActiveJobs section={section} />
                );
            case 'declined-jobs':
                return (
                    <DeclinedJobs section={section} />
                );
            case 'scheduled-jobs':
                return (
                    <ScheduledJobs section={section} />
                );
            case 'rejected-jobs':
                return (
                    <RejectedJobs section={section} />
                );
            case 'specific-job':
                return (
                    <JobDetails section={section} />
                );
            case 'list-roles':
                return (
                    <ListRoles section={section} />
                );
            case 'list-categories':
                return (
                    <ListCategories section={section} />
                );
            case 'sub-categories':
                return (
                    <ListSubCategories section={section} />
                );
            case 'list-services':
                return (
                    <ListServices section={section} />
                );
            case 'services':
                return (
                    <Services section={section} />
                );
            case 'specific-role':
                return (
                    <RoleDetails section={section} />
                );
            case 'create-role':
                return (
                    <CreateRole section={section} />
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
        <Fragment>
            <GealLayout>
                {renderOrderPages()}
            </GealLayout>
        </Fragment>
    )
}
export default GealDashboard;