import React, { useEffect, useState } from 'react'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'
import './Plot.css'
const Plotedit = (props) => {
    var[ca,setCa]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:4005/categoryview")
      .then(response=>{
        console.log(response.data)
        setCa(response.data)

      })
      .catch(err=>console.log(err))
    },[])


    var[inputs,setInputs]=useState(props.data)
    const inputHandler=(event)=>
    {

        const { name, value } =event.target
        setInputs((inputs) => ({ ...inputs,[name]: value }))
        console.log(inputs)
    }
    const addHandler=()=>{
        if(props.method==='put'){

            axios.put("http://localhost:4005/edits/"+inputs._id,inputs)
            .then(response=>{
                console.log("post data"+response.data)
                alert("Success")
                window.location.reload(false)
            })
            .catch(err=>console.log(err))
        }
    }
  return (
    <div>
      <Topbar/>
      <Sidebar/>
      <h2>Category</h2>
      <TextField label="Plot name" type="text" name="pname"value={inputs.pname}onChange={inputHandler}/> <br /><br />
        <TextField label="Price" type="text" name="pprice" value={inputs.pprice}onChange={inputHandler}/><br /><br />
        <TextField label="Location" type="text" name="plocation" value={inputs.plocation} onChange={inputHandler}/> <br /><br />
  
        <Select label="Category" name="pcategory" value={inputs.pcategory}onChange={inputHandler}>
          <MenuItem value="Plots">Plots</MenuItem>
              <MenuItem value="Buildings">Buildngs</MenuItem>
        </Select><br /><br />
    {/* <TextField  label="Category id" name="id" variant="filled" value={inputs.id}onChange={inputHandler}/><br /><br /> */}
  
  {/* <FormControl sx={{ m: 1, minWidth: 120 }}> */}
  {/* <TextField label="Product name" name="pname" variant="filled" value={inputs.pname}onChange={inputHandler}>
    {
      ca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.name} >{value.name}</MenuItem>
        )
      })
    }
    </TextField> <br /><br />
    <Select
   labelId="demo-simple-select-label"
    name='status'value={inputs.status} onChange={inputHandler}>
      <MenuItem value="Active">Active</MenuItem>
   <MenuItem value="In-Active">In-Active</MenuItem>
        
  </Select><br /><br /> */}
{/* </FormControl><br/><br/> */}
  <Button variant="contained" onClick={addHandler} >Update</Button>
  </div>
    
  )
}

export default Plotedit
