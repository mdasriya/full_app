import React, { useState } from 'react'
import axios from 'axios';
const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [city, setCity] = useState("")
    const [age, setAge] = useState("")

const handleSubmit = () => {
    let data = {
        name,
        email,
        pass,
        city,
        age
    }
    axios.post("https://cute-ant-school-uniform.cyclic.app/users/register", data)
    .then((res)=> {
      console.log(res.data)
    })
    setName("")
    setEmail("")
    setPass("")
    setCity("")
    setAge("")
}

  return (
    <div style={{display:"flex", flexDirection:"column",border:"1px solid gray",padding:"20px", width:"20%", margin:"auto", gap:"20px"}}>
      <input type="text" placeholder='name' value={name}  onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" placeholder='pass' value={pass} onChange={(e)=>setPass(e.target.value)} />
      <input type="text" placeholder='city' value={city} onChange={(e)=>setCity(e.target.value)} />
      <input type="text" placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Signup
