
import React, { useEffect } from 'react'

const Books = () => {
    // const [book, setBook] = useState([])

    useEffect(()=> {
       fetch("https://cute-ant-school-uniform.cyclic.app/books", {
        headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
       }).then(res=> res.json())
       .then(res => {
        console.log(res);
       }).catch(err=>console.log(err))
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default Books
