import React from 'react';
import GealLayout from '../layout/geal-layout';
import ListUsers from '../users/list-users';
import UserDetails from '../users/user-details';
import ListServicemen from '../servicemen/list-servicemen';
import ServiceRegistration from '../servicemen/service-registration';
import ListJobs from '../jobs/list-jobs';
import ListSkills from '../skills/list-skills';
import ListClients from '../clients/list-clients';
import ListRoles from '../roles/list-roles';
import Payments from '../payments/payments';
import CreateRole from '../roles/create-role';
import Home from './home/home';
import ServicemenMaps from "../servicemen/servicemen-maps";
import RoleDetails from '../roles/role_details';
import ServicemanDetails from "../servicemen/servicemanDetails";
import PendingJobs from "../jobs/pending";
import ActiveJobs from "../jobs/active";
import DeclinedJobs from "../jobs/declined";
import ScheduledJobs from "../jobs/scheduled";
import RejectedJobs from "../jobs/rejected";
import JobDetails from "../jobs/job-details";
import ListCategories from "../categories/list-categories";
import ListSubCategories from "../categories/sub-categories";
import ListServices from "../services/list-services";
import Services from "../services/services";

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
        <GealLayout>
            {renderOrderPages()}
        </GealLayout>
    )
}
export default GealDashboard;