import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getAllUser,deleteUser} from './api/Apii';
const TableMain = () =>  {
        const [users,setUsers] = useState([]);
        const getAllusers = async () => {
            const response = await getAllUser();
            console.log(response);
            setUsers(response.data);
        }
        const Userdelete = async (id) => {
            await deleteUser(id);
            getAllusers();
        }
        useEffect(() =>
        {
            getAllusers();
        },[])
        return (
            <div className="Main">
                <Link to="/add" style={{color:'#fff',textDecoration:'none'}}>
                  <Button variant="contained" color="primary" style={{marginTop:'20px'}}>Add User (+)</Button>
                </Link>
                <TableContainer component={Paper}>
                <Table aria-label="simple table" style={{width:'90%',margin:'50px'}}>
                    <TableHead style={{backgroundColor:'#ccc'}}>
                    <TableRow>
                        <TableCell align="right">Name </TableCell>
                        <TableCell align="right">UserName</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Website</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                        users.map(user => (
                            <TableRow>
                            <TableCell align="right">{user.name} </TableCell>
                            <TableCell align="right">{user.username}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right">{user.phone}</TableCell>
                            <TableCell align="right">{user.website}</TableCell>
                            <TableCell align="right">
                                <Link to={`/edit/${user.id}`} style={{color:'#fff',textDecoration:'none'}}>
                                    <Button color="primary" variant="contained" style={{marginRight:'10px'}}>
                                        Edit
                                    </Button>
                                </Link>
                                <Link to={`/edit/${user.id}`} style={{color:'#fff',textDecoration:'none'}}>
                                    <Button color="default" variant="contained" style={{marginRight:'10px'}}>Update</Button>
                                </Link>
                                <Button color="secondary" variant="contained" style={{marginRight:'10px'}} onClick={()=>Userdelete(user.id)}>Delete</Button>
                            </TableCell>
                            </TableRow>
                        ))
                    }     
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        )
    }

export default TableMain;