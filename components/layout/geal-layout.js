import React from 'react';
import { Container, Header, Content, Nav, Sidebar, Dropdown, Navbar } from 'rsuite';
import {logoutUser} from "../../state/actions/userLogoutAction";
import { Sidenav, Badge, Avatar } from 'rsuite';
import { Box } from '@mui/material';
import Image from 'next/image';
import Geal from '../../assets/geal.jpg';
import { Gear } from '@rsuite/icons';
import DashboardIcon from '@rsuite/icons/Dashboard';
import PeopleBranchIcon from '@rsuite/icons/PeopleBranch';
import GlobalIcon from '@rsuite/icons/Global';
import PeoplesIcon from '@rsuite/icons/Peoples';
import AppSelectIcon from '@rsuite/icons/AppSelect';
import LocationIcon from '@rsuite/icons/Location';
import ExploreIcon from '@rsuite/icons/Explore';
import CheckOutlineIcon from '@rsuite/icons/CheckOutline';
import AdminIcon from '@rsuite/icons/Admin';
import UserBadgeIcon from '@rsuite/icons/UserBadge';
import ListIcon from '@rsuite/icons/List';
import TaskIcon from '@rsuite/icons/Task';
import NoticeIcon from '@rsuite/icons/Notice';
import SearchIcon from '@rsuite/icons/Search';
import {useDispatch} from "react-redux";
import { useRouter } from "next/router";


const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        <Nav>
          <Dropdown
            placement="topStart"
            trigger="click"
            rendertitle={() => {
              return <Cog style={styles.iconStyles} />;
            }}
          >
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Nav>

        <Nav pullRight>
          <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
            {expand ? <Gear /> : <Gear />}
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

const GealLayout = ({children}) => {
  const [expand, setExpand] = React.useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    const sessionID = localStorage.sessionID
    if (sessionID) {
        logoutUser(dispatch, sessionID);
        localStorage.clear();
        router.push('/');
    }else {
          <Alert severity="error">You cannot logout user - 
          You still have an active Session
          </Alert>  
    }
}
  return ( 
    <div className="show-fake-browser sidebar-page" style={{color:"black"}}>
      <Container>
        <Sidebar
          style={{ display: 'flex', height: '100vh',color:"black", flexDirection: 'column' }}
          width={expand ? 260 : 56}
          collapsible
          appearance="inverse"
        >
          <Sidenav.Header>
          <center>
                <Box sx={styles.headerStyles}>
                <Box sx={styles.logo}>
                  <Image className='image' src={Geal} width={40} height={40} alt=""/>
                </Box>
                <b>GEAL APP</b>
                </Box>
              </center>
          </Sidenav.Header>
          <Sidenav style={{color:"black", fontFamily:"Montserrat,Helvetica,Arial,serif"}} expanded={expand} defaultOpenKeys={['3']} appearance="default">
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="1" active icon={<DashboardIcon />} onClick={() => router.push('/dashboard/home', undefined, {shallow: true}) }>
                  Dashboard
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<PeopleBranchIcon color="#3498FF"/>}>
                  Servicemen
                </Nav.Item>
                <Dropdown
                  eventKey="3"
                  trigger="hover"
                  title="Jobs"
                  icon={<GlobalIcon color="#3498FF"/>}
                  placement="rightStart"
                >
                  <Dropdown.Item eventKey="3-1" style={{color:"black"}} icon={<ListIcon color="green"/>}> All Jobs</Dropdown.Item>
                  <Dropdown.Item eventKey="3-2" style={{color:"black"}} icon={<ListIcon color="green"/>}>Active Jobs</Dropdown.Item>
                  <Dropdown.Item eventKey="3-3" style={{color:"black"}} icon={<ListIcon color="green"/>}>Scheduled Jobs</Dropdown.Item>
                  <Dropdown.Item eventKey="3-4" style={{color:"black"}} icon={<ListIcon color="green"/>}>Completed Jobs</Dropdown.Item>
                  <Dropdown.Item eventKey="3-5" style={{color:"black"}} icon={<ListIcon color="green"/>}>Pending Jobs</Dropdown.Item>
                  <Dropdown.Item eventKey="3-5" style={{color:"black"}} icon={<ListIcon color="green"/>}>Rejected Jobs</Dropdown.Item>
                </Dropdown>
                <Dropdown
                  eventKey="4"
                  trigger="hover"
                  title="User Management"
                  icon={<PeoplesIcon color="#3498FF"/>}
                  placement="rightStart"
                >
                  <Dropdown.Item eventKey="4-1" icon={<UserBadgeIcon color="green"/>} onClick={() => router.push('/user/list-users', undefined, {shallow: true})}>All Users</Dropdown.Item>
                  <Dropdown.Item eventKey="4-2" icon={<UserBadgeIcon color="green"/>}>All Servicemen</Dropdown.Item>
                  <Dropdown.Item eventKey="4-3" icon={<UserBadgeIcon color="green"/>}>All Clients</Dropdown.Item>
                </Dropdown>
                <Dropdown
                  eventKey="4"
                  trigger="hover"
                  title="Role Management"
                  icon={<AppSelectIcon color="#3498FF"/>}
                  placement="rightStart"
                >
                  <Dropdown.Item eventKey="4-1" icon={<AdminIcon color="green"/>}>Roles</Dropdown.Item>
                </Dropdown>
                <Nav.Item eventKey="2" icon={<ExploreIcon color="#3498FF"/>}>
                  Servicemen Locations
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<LocationIcon color="#3498FF"/>}>
                  Maps
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<CheckOutlineIcon color="#3498FF"/>}>
                  Approval Requests
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>

        <Container>
          <Header>
          <Navbar style={{color:"black", fontSize:"16px"}}>
            <Navbar.Brand href="#">
              Dashboard
            </Navbar.Brand>
            <Nav>
              <Nav.Item icon={<Gear />}>Home</Nav.Item>
              <Nav.Item>News</Nav.Item>
              <Nav.Item>Products</Nav.Item>
              <Dropdown title="About">
                <Dropdown.Item>Company</Dropdown.Item>
                <Dropdown.Item>Team</Dropdown.Item>
                <Dropdown.Item>Contact</Dropdown.Item>
              </Dropdown>
            </Nav>
            <Nav pullRight>
              <Nav.Item icon={<Badge color="cyan" content={10}><TaskIcon style={{fontSize:"2em"}}/></Badge>}/>
              <Nav.Item icon={<NoticeIcon style={{fontSize:"2em"}}/>}/>
              <Nav.Item icon={<Badge color="cyan" content={999}><SearchIcon style={{fontSize:"2em"}}/></Badge>}/>
              <Nav.Item><center><Box style={{marginTop:"-10px", textDecoration:"none"}}>John Doe<br/>Admin</Box></center></Nav.Item>
              <Nav.Item onClick={handleLogout} icon={<Avatar size="md" circle src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4" style={{marginTop:"-10px"}} />}/>
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
  headerStyles :{
    display:"flex",
    gap: 1,
    paddingBottom: '10px',
    fontSize: 36,
    height: 56,
    background: 'linear-gradient(to right, #4EE2EC, #3CB371)',
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
    marginTop:"5px",
    '.image':{
      borderTopLeftRadius: '20px',
      borderBottomRightRadius: '20px',
      height:'30px',
      width: '30px'
    }
  }
}
