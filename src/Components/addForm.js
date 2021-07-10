import React,{useState} from 'react';
import {TextField,Button} from '@material-ui/core';
import {addUser} from '../api/Apii';
import {useHistory} from 'react-router-dom';
const setInitialValue = {
    name : "",
    username:"",
    email :"",
    phone :"",
    website :""
}
const AddForm = () => {
        const [user,setUser] = useState(setInitialValue);
        const {name,username,email,phone,website} = user;
        const history = useHistory();
        const onvaluechange = (e) => {
            setUser({...user,[e.target.name]:e.target.value});
        }
        const SubmitData = async () => {
            await addUser(user);
            history.push('./');
        }
        return (
            <div className="MainForm">
                <h1>Add User Details</h1>
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

export default AddForm;