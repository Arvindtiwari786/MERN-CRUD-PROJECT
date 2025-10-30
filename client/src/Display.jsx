import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router';


const Display = () => {
    const [myData,setMyData] = useState([]);
    const navigate=useNavigate()
    const loaddata= async()=>{
        const api = `${import.meta.env.VITE_BACKEND_URL}/students/display`;
        const response = await axios.get(api);
        setMyData(response.data);
      
    }

    useEffect(()=>{
      loaddata();
    },[]);

    const mydel =async (id)=>{
      const api = `${import.meta.env.VITE_BACKEND_URL}/students/deletedata?id=${id}`
      const response=await axios.delete(api)
      alert(response.data.msg)
      loaddata()
    }
   const myEdit=async(id)=>{
    navigate(`/update/${id}`)
   }
    const ans  = myData.map((key)=>{
       return(
        <tr key={key._id}>
       <td>{key.rollno}</td>
       <td>{key.name}</td>
       <td>{key.city}</td>
       <td>{key.fees}</td>
       <td>
        <a href="#" onClick={()=>myEdit(key._id)} >Edit</a>/
        <a href="#" onClick={()=>mydel(key._id)}>Delete</a>
       </td>
        </tr>
       )
    })
  return (
    <div>Display


<table border="1" >
    <thead>
        <th>rollno</th>
        <th>name</th>
        <th>city</th>
        <th>fees</th>
        <th>Update</th>
    </thead>
    <tbody>
        {ans}
    </tbody>
</table>

    </div>
  )
}

export default Display