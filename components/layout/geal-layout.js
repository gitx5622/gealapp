import React from 'react';
import { Container, Header, Content, Nav, Sidebar, Dropdown, Navbar } from 'rsuite';
import { logoutUser } from "../../state/actions/userLogoutAction";
import { useDispatch, useSelector } from "react-redux";
import { getUserRoles } from "../../state/actions/roleAction";
import { Sidenav, Badge } from 'rsuite';
import { Box } from '@mui/material';
import Image from 'next/image';
import Geal from '../../assets/geal.jpg';
import ArowBackIcon from '@rsuite/icons/ArowBack';
import DashboardIcon from '@rsuite/icons/Dashboard';
import PeopleBranchIcon from '@rsuite/icons/PeopleBranch';
import GlobalIcon from '@rsuite/icons/Global';
import PeoplesIcon from '@rsuite/icons/Peoples';
import AppSelectIcon from '@rsuite/icons/AppSelect';
import CheckOutlineIcon from '@rsuite/icons/CheckOutline';
import AlipayIcon from '@rsuite/icons/Alipay';
import OffIcon from '@rsuite/icons/Off';
import AdminIcon from '@rsuite/icons/Admin';
import PageNextIcon from '@rsuite/icons/PageNext';
import UserBadgeIcon from '@rsuite/icons/UserBadge';
import ListIcon from '@rsuite/icons/List';
import { useRouter } from "next/router";


const NavToggle = ({ expand, onChange }) => {
  const router = useRouter();
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        <Nav>
          <Dropdown
            placement="topStart"
            trigger="click"
          >
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Nav>

        <Nav pullRight>
          <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
            {expand ? <ArowBackIcon style={{ color: "red", fontSize: "30px" }} /> : <PageNextIcon style={{ fontSize: "30px", color: "red" }} />}
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

const GealLayout = ({ children }) => {
  const [expand, setExpand] = React.useState(true);
  const [first, setFirst] = React.useState(null);
  const [last, setLast] = React.useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const roleSelector = useSelector(state => state.roleState);
  const { user_roles } = roleSelector;
  const permissions = user_roles.user_permissions;

  const view_users = permissions.filter(el => el.toLowerCase().indexOf('view-users'.toLowerCase()) !== -1)[0];
  const view_user = permissions.filter(el => el.toLowerCase().indexOf('view-user'.toLowerCase()) !== -1)[0];
  const view_sub_category = permissions.filter(el => el.toLowerCase().indexOf('view-sub-category'.toLowerCase()) !== -1)[0];

  const handleLogout = () => {
    const sessionID = localStorage.sessionID
    if (sessionID) {
      logoutUser(dispatch, sessionID);
      localStorage.clear();
      router.push('/');
    } else {

    }
  }
  React.useEffect(() => {
    const value = localStorage.currentUser;
    const user = value ? JSON.parse(value) : undefined;
    setFirst(user.first_name);
    setLast(user.last_name);
  }, [])
  React.useEffect(() => {
    getUserRoles(dispatch);
  }, [dispatch])

  React.useEffect(() => {
    try {
      JSON.parse(localStorage.currentUser);
    } catch (error) {
      localStorage.clear();
      window.location.replace('/');
    }
  }, []);

  return (
    <div className="show-fake-browser sidebar-page" style={{ color: "black" }}>
      <Container>
        <Sidebar
          style={{ display: 'flex', height: '100vh', color: "black", flexDirection: 'column' }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <center>
              <Box sx={styles.headerStyles}>
                <Box sx={styles.logo}>
                  <Image
                    className='image'
                    src={Geal}
                    width={40}
                    height={40}
                    alt="" />
                </Box>
                <b>QUICKFIX</b>
              </Box>
            </center>
          </Sidenav.Header>
          <Sidenav
            style={{ color: "black", fontFamily: "Montserrat,Helvetica,Arial,serif" }}
            expanded={expand}
            defaultOpenKeys={['3']}
            appearance="default">
            <Sidenav.Body>
              <Nav>
                <Nav.Item
                  eventKey="1"
                  active icon={<DashboardIcon />}
                  onClick={() => router.push('/dashboard/home', undefined, { shallow: true })}>
                  Dashboard
                </Nav.Item>
                <Nav.Item
                  eventKey="2"
                  icon={<PeopleBranchIcon color="#3498FF" />}
                  onClick={() => router.push('/dashboard/servicemen/list-servicemen', undefined, { shallow: true })}>
                  Servicemen
                </Nav.Item>
                <Nav.Item
                  eventKey="3"
                  icon={<PeopleBranchIcon color="#3498FF" />}
                  onClick={() => router.push('/dashboard/clients/list-clients', undefined, { shallow: true })}>
                  Clients
                </Nav.Item>
                <Nav.Item
                    eventKey="14"
                    icon={<PeopleBranchIcon color="#3498FF" />}
                    onClick={() => router.push('/dashboard/categories/list-categories', undefined, { shallow: true })}>
                  Categories
                </Nav.Item>
                <Nav.Item
                    eventKey="15"
                    icon={<PeopleBranchIcon color="#3498FF" />}
                    onClick={() => router.push('/dashboard/skills/list-skills', undefined, { shallow: true })}>
                  Skills
                </Nav.Item>
                <Nav.Item
                  eventKey="4"
                  icon={<AlipayIcon color="#3498FF" />}
                  onClick={() => router.push('/dashboard/payments/payments', undefined, { shallow: true })}>
                  Payments
                </Nav.Item>
                <Dropdown
                  eventKey="5"
                  trigger="hover"
                  title="Jobs"
                  icon={<GlobalIcon color="#3498FF" />}
                  placement="rightStart"
                >
                  <Dropdown.Item
                    eventKey="5-1"
                    style={{ color: "black" }}
                    icon={<ListIcon color="green" />}
                    onClick={() => router.push('/dashboard/jobs/list-jobs', undefined, { shallow: true })}
                  > All Jobs</Dropdown.Item>
                  <Dropdown.Item
                    eventKey="5-2"
                    style={{ color: "black" }}
                    icon={<ListIcon color="green" />}
                    onClick={() => router.push('/dashboard/jobs/active-jobs', undefined, { shallow: true })}
                  >
                    Active Jobs
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="5-3"
                    style={{ color: "black" }}
                    icon={<ListIcon color="green" />}
                    onClick={() => router.push('/dashboard/jobs/scheduled-jobs', undefined, { shallow: true })}
                  >
                    Scheduled Jobs
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="5-4"
                    style={{ color: "black" }}
                    icon={<ListIcon color="green" />}
                    onClick={() => router.push('/dashboard/jobs/declined-jobs', undefined, { shallow: true })}
                  >
                    Declined Jobs
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="6-5"
                    style={{ color: "black" }}
                    icon={<ListIcon color="green" />}
                    onClick={() => router.push('/dashboard/jobs/pending-jobs', undefined, { shallow: true })}
                  >
                    Pending Jobs
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="7-5"
                    style={{ color: "black" }}
                    icon={<ListIcon color="green" />}
                    onClick={() => router.push('/dashboard/jobs/rejected-jobs', undefined, { shallow: true })}
                  >
                    Rejected Jobs
                  </Dropdown.Item>
                </Dropdown>
                <Dropdown
                  eventKey="8"
                  trigger="hover"
                  title="User Management"
                  icon={<PeoplesIcon color="#3498FF" />}
                  placement="rightStart"
                >
                  {view_users && (
                    <Dropdown.Item eventKey="4-1" icon={<UserBadgeIcon color="green" />} onClick={() => router.push('/user/list-users', undefined, { shallow: true })}>All Users</Dropdown.Item>
                  )}
                  <Dropdown.Item eventKey="4-2" icon={<UserBadgeIcon color="green" />} onClick={() => router.push('/dashboard/servicemen/list-servicemen', undefined, { shallow: true })}>All Servicemen</Dropdown.Item>
                  <Dropdown.Item eventKey="4-3" icon={<UserBadgeIcon color="green" />} onClick={() => router.push('/dashboard/clients/list-clients', undefined, { shallow: true })}>All Clients</Dropdown.Item>
                </Dropdown>
                <Dropdown
                  eventKey="9"
                  trigger="hover"
                  title="Role Management"
                  icon={<AppSelectIcon color="#3498FF" />}
                  placement="rightStart"
                >
                  <Dropdown.Item
                    eventKey="9-1"
                    icon={<AdminIcon color="green" />}
                    onClick={() => router.push('/dashboard/roles/list-roles', undefined, { shallow: true })}
                  >Roles
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="9-2"
                    icon={<AdminIcon color="green" />}
                    onClick={() => router.push('/dashboard/roles/create-role', undefined, { shallow: true })}
                  >Create Role
                  </Dropdown.Item>
                </Dropdown>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle
            expand={expand}
            onChange={() => setExpand(!expand)} />
        </Sidebar>

        <Container>
          <Header>
            <Navbar
              style={{background:"#EAEEF3", color: "black", fontSize: "16px", fontFamily: "Montserrat,Helvetica,Arial,serif" }}>
              <Navbar.Brand href="/dashboard/home">
                Dashboard
              </Navbar.Brand>
              <Nav>
                <Nav.Item onClick={() => router.push('/user/list-users')}>Users</Nav.Item>
                <Nav.Item onClick={() => router.push('/dashboard/roles/list-roles')}>Roles</Nav.Item>
              </Nav>
              <Nav pullRight>
                <Nav.Item>
                  <center>
                    <Box style={{ marginTop: "-10px", textDecoration: "none" }}>{first} {last}<br />Admin</Box>
                  </center>
                </Nav.Item>
                <Nav.Item
                  onClick={handleLogout}
                  icon={<OffIcon color="red" style={{ fontSize: "2em" }} />} />
              </Nav>
            </Navbar>
          </Header>
          <Content>{children}</Content>
        </Container>
      </Container>
    </div>
  );
};

export default GealLayout;

const styles = {
  headerStyles: {
    display: "flex",
    gap: 1,
    paddingBottom: '10px',
    fontSize: 36,
    height: 56,
    background: 'linear-gradient(rgb(0, 109, 126) 0%, rgb(1, 103, 119) 21%, rgb(5, 79, 90) 57%, rgb(36, 30, 32) 93%, rgb(36, 30, 32) 100%)',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },
  iconStyles: {
    width: 56,
    height: 56,
    padding: 18,
    lineHeight: '56px',
    textAlign: 'center'
  },
  logo: {
    marginTop: "5px",
    '.image': {
      borderTopLeftRadius: '20px',
      borderBottomRightRadius: '20px',
      height: '30px',
      width: '30px'
    }
  }
}
