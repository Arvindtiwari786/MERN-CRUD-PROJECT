import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Insert = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput(() => ({ ...input, [name]: value }));

  }

  const handleSubmit = async () => {

    const api = `${import.meta.env.VITE_BACKEND_URL}/students/save`;
    const response = await axios.post(api, input);
    console.log(response.data);
    alert(response.data.msg)
    
  }

  return (
    <div>
      enter roll: <input type='text ' name="rollno" onChange={handleInput} /> <br />
      enter name: <input type='text ' name="name" onChange={handleInput} /> <br />
      enter city: <input type='text ' name="city" onChange={handleInput} /> <br />
      enter fees: <input type='text ' name="fees" onChange={handleInput} /> <br />
      <button onClick={handleSubmit}>save</button>
    </div>
  )
}

export default Insert