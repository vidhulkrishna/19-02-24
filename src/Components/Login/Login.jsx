import { Button,TextField,Paper } from "@mui/material";
import React,{useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
    const[un,setUn]=useState('');
    const[pwd,setPwd]=useState('');
    const[error,setError]=useState(false);
    
    const navigate=useNavigate()
    const readusername =(event) =>{
        event.preventDefault();
        console.log(event.target.value);
        setUn(event.target.value);
    }
    const readpassword =(event) =>{
        event.preventDefault();
        console.log(event.target.value);
        setPwd(event.target.value);
        
    }
    const checkfilldata =(event) =>{
        event.preventDefault();
        if(un.trim ()===''||pwd==='')
        {
            setError(true);
            return;
        }
        else{
            navigate("/Home");
            // props.checkLogin(un,pwd);
        }

    }
  return (
    <div>

        <center>
        
    
        {/* <TextField id="outlined-basic" label="Username" variant="outlined" onChange={readusername} /><br/><br/>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={readpassword}
        /><br/><br/>
        <Button variant="contained" onClick={checkfilldata} >Ok</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" >Cancel</Button>
        
        {error&&'error occured'} */}
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '300px', margin: '20px' }}>
      <h2>LOGIN</h2>
      <TextField label="USERNAME" variant="outlined" onChange={readusername} fullWidth margin="normal" />
      <TextField label="PASSWORD" variant="outlined" type="password" onChange={readpassword} fullWidth margin="normal"/>
        <Button variant="contained" color="primary" onClick={checkfilldata} fullWidth>LOGIN</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" color="primary" fullWidth>CANCEL</Button>
    </Paper> 
    {error&&'error occured'}
    </center>
    </div>
  )
}

export default Login