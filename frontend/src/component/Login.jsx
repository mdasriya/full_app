import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
const [email, setEmail] = useState("")
const [pass, setPass] = useState("")
  const handleLogin = () => {
 const data = {
  email,pass
 }
 axios.post("https://cute-ant-school-uniform.cyclic.app/users/login", data)
 .then((res)=> {
   console.log(res.data)
   localStorage.setItem("token", res.data.token)
 })
 setEmail("")
 setPass("")
  }
  return (
    <div>
      <input type="text" placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <input type="text" placeholder='password' value={pass} onChange={(e)=> setPass(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
