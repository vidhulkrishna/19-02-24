import { Button, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Plot.css'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'

const Plot = () => {
  
    
    // var[ca,setCa]=useState([])
    // useEffect(()=>{
    //   axios.get("http://localhost:3005/categoryview")
    //   .then(response=>{
    //     console.log(response.data)
    //     setCa(response.data)

    //   })
    //   .catch(err=>console.log(err))
    // },[])

    var[inputs,setInputs]=useState({
      "pname":'',
      "pprice":'',
      "plocation":'',
      "pcategory":'Plots'
    })
  
    const inputHandler =(event) =>{
      const{name,value}=event.target
      setInputs((inputs)=>({...inputs,[name]:value}))
      console.log(inputs)
    }
  
      const addHandler=() =>{
        console.log("sheela")
          console.log(inputs)
       axios.post("http://localhost/4005/new1",inputs)
        .then((response)=>{
          alert("Saved")
        })
        .catch(err=>console.log(err))
        
    }
  
  return (
    <div >
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
    {/* <TextField label="Category id" name="id" variant="filled" value={inputs.id}onChange={inputHandler}/><br /><br /> */}
    
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
    </TextField> <br /><br /> */}
  {/* <InputLabel id="demo-simple-select-label">Category</InputLabel> */}

  {/* <Select
   labelId="demo-simple-select-label"
    name='Category'value={inputs.category} onChange={inputHandler}>
    {
      ca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.name} >{value.name}</MenuItem>
        )
      })
    }
  </Select> */}
  {/* <Select
   labelId="contained" label="Status"
    name='status'value={inputs.status} onChange={inputHandler}>
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="In-Active">In-Active</MenuItem>
  </Select><br /><br /> */}
{/* </FormControl><br/><br/> */}
    <Button variant="contained" onClick={addHandler}>Submit</Button>
    </div>
  )
}

export default Plot
