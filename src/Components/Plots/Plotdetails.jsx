import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import './Plotview.css'
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';
import Plotedit from './Plotedit';

const Plotdetails = () => {
    var[sub,setSub]=useState([]);
    var [selected,setSelected]=useState();
  var [update,setUpdate]=useState(false);

    useEffect(()=>{
        axios.get("http://localhost:4005/views")
        .then(response=>{
            setSub(response.data)
        })
        .catch(err=>console.log(err))
    },[])
    const updateValues = (row) => {
        setSelected(row)
        setUpdate(true)
    }
    var result=
    <div className='bb'>
        <Topbar/>
        <Sidebar/>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sub.map((row,pos) => {

                        return (
                            <TableRow
                                key={pos}>
                                <TableCell>{row.name}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>{row.category}</TableCell>
                                <TableCell><EditIcon onClick={()=>updateValues(row)}/></TableCell>
                               
                            </TableRow>

                        )
                    })}
         </TableBody>
            </Table>
        </TableContainer>
    </div>
  if(update)
  result=<Plotedit data={selected} method='put'/>
  return(result)
}

export default Plotdetails
