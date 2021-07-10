import React,{useState,useEffect} from 'react';
import {TextField,Button} from '@material-ui/core';
import {editUser,getAllUser} from '../api/Apii';
import {useHistory,useParams} from 'react-router-dom';
const setInitialValue = {
    name : "",
    username:"",
    email :"",
    phone :"",
    website :""
}
const UpdateForm = () => {
        const [user,setUser] = useState(setInitialValue);
        const {name,username,email,phone,website} = user;
        const {id} = useParams();
        const history = useHistory();
        const onvaluechange = (e) => {
            setUser({...user,[e.target.name]:e.target.value});
        }
        const SubmitData = async () => {
            await editUser(id,user);
            history.push('../');
        }
        useEffect(() =>{
            Loaddata();
        },[])
        const Loaddata = async () => {
            const response = await getAllUser(id);
            setUser(response.data);
        }
        return (
            <div className="MainForm">
                <h1>Edit User Details</h1>
                <form autoComplete="off">
                <TextField id="outlined-basic" name="name" label="Name" variant="outlined" style={{width:'40%',marginTop:'15px'}} onChange={(e)=>onvaluechange(e)} value={name} /> <br/>
                <TextField id="outlined-basic" name="username" label="UserName" variant="outlined" style={{width:'40%',marginTop:'15px'}} onChange={(e)=>onvaluechange(e)} value={username}/><br/>
                <TextField id="outlined-basic" name="email" label="Email" variant="outlined" style={{width:'40%',marginTop:'15px'}} onChange={(e)=>onvaluechange(e)} value={email}/><br/>
                <TextField id="outlined-basic" name="phone" label="Phone" variant="outlined" style={{width:'40%',marginTop:'15px'}} onChange={(e)=>onvaluechange(e)} value={phone} /><br/>
                <TextField id="outlined-basic" name="website"label="Website" variant="outlined" style={{width:'40%',marginTop:'15px'}} onChange={(e)=>onvaluechange(e)}value={website}/><br/>
                <Button onClick={()=>SubmitData()} color="primary" variant="contained" size="large" style={{marginTop:'15px'}}>Submit</Button>
                </form>
            </div>
        )
}

export default UpdateForm;