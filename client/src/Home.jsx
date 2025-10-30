import axios from "axios"

const Home = () => {
    const handleInput=async()=>{
    const api = `${import.meta.env.VITE_BACKEND_URL}/home;`
      const student=await axios.get(api)
      console.log(student)
    }
  return (
    <>
    <h1>welcome to home page</h1>
    <button onClick={handleInput}>home</button>
    </>
  )
}

export default Home;