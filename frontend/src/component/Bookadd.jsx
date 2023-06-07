import axios from 'axios'
import React, { useState } from 'react'

// {
//     "title":{type:String, required:true},
//     "genre":{type:String, required:true},
//     "author":{type:String, required:true},
//     "authorID":{type :String,required:true},
//     "publishing_year":{type:Number, required:true}
//   }

const Bookadd = () => {
    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [publishing_year, setYear] = useState("")

const adddata = () => {
    let data = {
        title,genre,publishing_year
    }
    axios.post("http://localhost:4500/books/add", {
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token")}`
          },
          data
    })
    .then((res) => {
       console.log(res.data);
    })
    .catch((error) => {
       console.log(error.message);
    })
}

  return (
    <div>
      <input type="text" value={title} placeholder='title' onChange={(e)=>setTitle(e.target.value)}/>
      <input type="text" value={genre} placeholder='genre' onChange={(e)=>setGenre(e.target.value)}/>
      <input type="text" value={publishing_year} placeholder='publishing_year' onChange={(e)=>setYear(e.target.value)}/>
      <button onClick={adddata}>Submit</button>
    </div>
  )
}

export default Bookadd
