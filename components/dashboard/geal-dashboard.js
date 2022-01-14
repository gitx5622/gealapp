import React, { Suspense, lazy } from 'react';
import { BoxLoading } from 'react-loadingg';
import dynamic from 'next/dynamic'
const GealLayout = lazy(() => import('../layout/geal-layout'));
const ServiceRegistration = lazy(() => import('../servicemen/service-registration'));
const ServicemanDetails = lazy(() => import('../servicemen/servicemanDetails'));
const ListSubCategories = lazy(() => import('../categories/sub-categories'));
const ListServicemen = lazy(() => import('../servicemen/list-servicemen'));
const ListCategories = lazy(() => import('../categories/list-categories'));
const ServicemenMaps = lazy(() => import('../servicemen/servicemen-maps'));
const ListServices = lazy(() => import('../services/list-services'));
const ListClients = lazy(() => import('../clients/list-clients'));
const UserDetails = lazy(() => import('../users/user-details'));
const RoleDetails = lazy(() => import('../roles/role_details'));
const ListSkills = lazy(() => import('../skills/list-skills'));
const CreateRole = lazy(() => import('../roles/create-role'));
const ScheduledJobs = lazy(() => import('../jobs/scheduled'));
const JobDetails = lazy(() => import('../jobs/job-details'));
const Services = lazy(() => import('../services/services'));
const ListUsers = lazy(() => import('../users/list-users'));
const ListRoles = lazy(() => import('../roles/list-roles'));
const Payments = lazy(() => import('../payments/payments'));
const RejectedJobs = lazy(() => import('../jobs/rejected'));
const DeclinedJobs = lazy(() => import('../jobs/pending'));
const PendingJobs = lazy(() => import('../jobs/pending'));
const ListJobs = lazy(() => import('../jobs/list-jobs'));
const ActiveJobs = lazy(() => import('../jobs/active'));
const Home = dynamic(() => import('./home/home'), { suspense: true })


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
            <Suspense fallback={<div>Loading ...</div>}>
            {renderOrderPages()}
            </Suspense>
        </GealLayout>
    )
}
export default GealDashboard;