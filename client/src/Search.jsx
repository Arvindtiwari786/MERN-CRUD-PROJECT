import { useState } from "react" 
import axios from "axios"

const Search=()=>{
    const [rno,setRno]=useState("")
    const [mydata,setMydata]=useState([])
    
    const handleSubmit=async()=>{
        try {
        let api=`${import.meta.env.VITE_BACKEND_URL}/students/search`
        const response=await axios.post(api,{rno:rno})
        console.log(response)
        setMydata(response.data)

        } catch (error) {
            alert(error.response.data)
        }
    }
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            </>
        )
    })

    return(
        <>
        Enter RollNumber: <input type="text" name="rno" value={rno}  onChange={(e)=>{setRno(e.target.value)}}/>
        <button onClick={handleSubmit} >Search</button>
        <hr />
        <table>
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
        </table>
        </>
    )
}

export default Search