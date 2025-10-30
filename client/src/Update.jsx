import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


const Update = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    


    const loadData = async () => {
        const api = `${import.meta.env.VITE_BACKEND_URL}/students/editDisplay?id=${id}`;
        const response = await axios.get(api)
        setData(response.data)
        console.log(response.data)



    }
    useEffect(() => {
        loadData()
    }, [])

    const handleInput=(e)=>{
        const name=e.target.name 
        const value=e.target.value
        setData(values=>({...values,[name]:value}))
    }
    const handleSave=async()=>{
     const api = `${import.meta.env.VITE_BACKEND_URL}/students/saveData`;
     const response=await axios.post(api,data)
     console.log(response.data)
     alert(response.data.msg)

    }
    return (
        <>
            Edit RollNumber: <input type="text" name="rollno" value={data.rollno} onChange={handleInput} /> <br />

            Edit Name: <input type="text" name="name" value={data.name} onChange={handleInput} /> <br />

            Edit City: <input type="text" name="city" value={data.city} onChange={handleInput} /> <br />
             
            Edit Fees: <input type="text" name="fees" value={data.fees} onChange={handleInput} /> <br />
            <button onClick={handleSave}>SAVE</button>
        </>
    )
}
export default Update;