import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Table, Pagination, Grid, Row, Col, Input, Popover, Dropdown } from 'rsuite';
import { getUsers } from '../../state/actions/usersAction';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {FormControl, Box, InputLabel} from '@mui/material';
import { AiOutlineEye, AiTwotoneDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

const renderMenu = ({ onClose, left, top, className }, ref) => {
    const handleSelect = eventKey => {
      onClose();
      console.log(eventKey);
    };
    return (
      <Popover ref={ref} className={className} style={{ left, top }} full>
        <Dropdown.Menu onSelect={handleSelect}>
          <Dropdown.Item eventKey={3}>Download As...</Dropdown.Item>
          <Dropdown.Item eventKey={4}>Export PDF</Dropdown.Item>
          <Dropdown.Item eventKey={5}>Export HTML</Dropdown.Item>
          <Dropdown.Item eventKey={6}>Settings</Dropdown.Item>
          <Dropdown.Item eventKey={7}>About</Dropdown.Item>
        </Dropdown.Menu>
      </Popover>
    );
  };

const ActionCell = ({ rowData, dataKey, ...props }) => {
    function handleAction() {
      alert(`id:${rowData[dataKey]}`);
    }
    return (
      <Table.Cell {...props} className="link-group">
          <Box sx={{display: "flex", gap: 1}}>
           <Box sx={{justifyContent: "center", height: "30px", width:"30px", background: "#5CB85C", borderRadius: '5px'}}>
                <center><AiOutlineEye style={{fontSize: '20px', color: "white", marginTop: "5px"}}/></center>
            </Box>
            <Box sx={{justifyContent: "center", height: "30px", width:"30px", background: "#d9534f", borderRadius: '5px'}}>
                <center><AiTwotoneDelete style={{fontSize: '20px', color: "white", marginTop: "5px"}}/></center>
            </Box>
            <Box sx={{justifyContent: "center", height: "30px", width:"30px", background: "#337AB7", borderRadius: '5px'}}>
                <center><FiEdit style={{fontSize: '20px',color: "white",  marginTop: "5px"}}/></center>
            </Box>
        </Box>
      </Table.Cell>
    );
  };

const ListUsers = () => {
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(new Date());

    const dispatch = useDispatch();

    const userSelector = useSelector(state => state.usersState);
    const { user_list } = userSelector;
    const { users, pagination} = user_list;
    
  
    const handleChangeLimit = dataKey => {
      setPage(1);
      setLimit(dataKey);
    };

    const handlesearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    }
  
    const data = users.filter((v, i) => {
      const start = limit * (page - 1);
      const end = start + limit;
      return i >= start && i < end;
    });
  
    React.useEffect(() => {
        getUsers(dispatch, searchTerm, gender, country);
    }, [dispatch, searchTerm, gender, country]);

    const CustomInput = ({ ...props }) => <Input {...props} style={{marginBottom: "20px"}} />;

    return (
      <div style={{marginTop: "20px"}}>
          <h5>Users List:</h5><br/>
          <span style={{color: "#34c4ff"}}>Search filter</span>
          <Grid fluid>
            <Row >
            <Col xs={24} sm={12} md={6}>
                <CustomInput 
                    size="lg" 
                    placeholder="Search Name, Email, Phone" 
                    onChange={handlesearchTermChange} 
                    value={searchTerm}  
                />
            </Col>
            <Col xs={24} sm={12} md={6}>
                <Box sx={{ minWidth: 130 }}>
                    <FormControl fullWidth>
                    <InputLabel id="gender=label">Age</InputLabel>
                    <Select
                    labelId="gender-label"
                    id="gender"
                    value={gender}
                    label="Age"
                    sx={{height: "40px", color: 'black'}}
                    onChange={handleGenderChange}
                    >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value='female'>Female</MenuItem>
                    </Select>
                    </FormControl>
                </Box>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <CustomInput 
                    size="lg" 
                    placeholder="Search Country" 
                    onChange={handleCountryChange} 
                    value={country} 
                />
            </Col>
            {/* <Col xs={24} sm={12} md={6}>
                <InputGroup style={{ width: 428 }}>
                    <DatePicker format="yyyy-MM-dd" block appearance="subtle" value={startDate} style={{ width: 230 }} />
                    <InputGroup.Addon>至</InputGroup.Addon>
                    <DatePicker format="yyyy-MM-dd" block appearance="subtle" value={endDate} style={{ width: 230 }} />
                </InputGroup>
            </Col> */}
            </Row>
            </Grid>

        <Table bordered={true} cellBordered={true} height={500} data={data} loading={loading}>
          <Table.Column width={50} align="center" fixed resizable>
            <Table.HeaderCell style={{background: "#34c3ff"}}><h6>Id</h6></Table.HeaderCell>
            <Table.Cell dataKey="id" />
          </Table.Column>
          <Table.Column width={100} fixed resizable>
            <Table.HeaderCell style={{background: "#34c3ff",color: "black"}}><h6>First Name</h6></Table.HeaderCell>
            <Table.Cell dataKey="first_name" />
          </Table.Column>
  
          <Table.Column width={100}>
            <Table.HeaderCell style={{background: "#34c3ff",color: "black"}}><h6>Last Name</h6></Table.HeaderCell>
            <Table.Cell dataKey="last_name" />
          </Table.Column>
  
          <Table.Column width={200}>
            <Table.HeaderCell style={{background: "#34c3ff",color: "black"}}><h6>Email</h6></Table.HeaderCell>
            <Table.Cell dataKey="email" />
          </Table.Column>
          <Table.Column width={200} flexGrow={1}>
            <Table.HeaderCell style={{background: "#34c3ff", color: "black"}}><h6>Phone</h6></Table.HeaderCell>
            <Table.Cell dataKey="phone" />
          </Table.Column>
          <Table.Column width={200} flexGrow={1}>
            <Table.HeaderCell style={{background: "#34c3ff", color: "black"}}><h6>Gender</h6></Table.HeaderCell>
            <Table.Cell dataKey="gender" />
          </Table.Column>
          <Table.Column width={200} flexGrow={1}>
            <Table.HeaderCell style={{background: "#34c3ff",color: "black"}}><h6>Country</h6></Table.HeaderCell>
            <Table.Cell dataKey="country" />
          </Table.Column>
          <Table.Column width={200} flexGrow={1}>
            <Table.HeaderCell style={{background: "#34c3ff", color: "black"}}><h6>Created At</h6></Table.HeaderCell>
            <Table.Cell dataKey="created_at" />
          </Table.Column>
          <Table.Column width={200} flexGrow={1} fixed='right'>
            <Table.HeaderCell style={{background: "#34c3ff", color: "black"}}><h6>Actions</h6></Table.HeaderCell>
            <ActionCell dataKey="id" />
          </Table.Column>
        </Table>
        <div style={{ padding: 20 }}>
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            maxButtons={5}
            size="xs"
            layout={['total', '-', 'limit', '|', 'pager', 'skip']}
            total={pagination.count}
            limitOptions={[10, 20]}
            limit={limit}
            activePage={page}
            onChangePage={setPage}
            onChangeLimit={handleChangeLimit}
          />
        </div>
      </div>
    );
  };

  export default ListUsers;