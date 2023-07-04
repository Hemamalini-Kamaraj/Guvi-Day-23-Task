import React, { useEffect, useState } from 'react';
import {Link,Route,BrowserRouter as Router, Routes, useParams} from 'react-router-dom';

function App() {
   const padding = {
    padding:10
   }

   const[data,setData] = useState([])

   const fetchInfo = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
     const data = await res.json();
     return setData(data);
      
   }
  //  console.log(data)
   useEffect(()=>{
    fetchInfo();
   },[])

   const notes = [
    {
      id:1,
      content:'Javascript'
    },
    {
      id:2,
      content:'ReactJS'
    },
    {
      id:3,
      content:'NodeJS'
    }
   ]

   function Home() {
    return(
      <div>
        Home
      </div>
    )
   }

   function Notes({notes}) {
    return(
      <>
        {notes.map(note=>{
          return (
            <div key={note.id}>
              <Link to={`/notes/${note.id}`}>
              Content - {note.content}
              </Link>
              <br/><br/>
            </div>
          )
        })}
      </>
    )
   }

   function Users({data}) {
    return(
      <>
        {data.map(d=>{
          return(
            <div key={d.id}>
              <Link to={`/users/${d.id}`}>Id - {d.id}</Link>
              <br/>
            </div>
          )
        })}
      </>
    )
   }

   function User({data}) {
    const id = useParams().id;
    const user = data.find(u => u.id===Number(id))
    console.log(data)
    return(
      <div>
        <h2>{user.id}</h2>
      </div>
    )
   }

   function Note({notes}) {
    const id = useParams().id
    
    const note = notes.find(n => n.id===Number(id))
    console.log(id)
    return(
      <h2>{note.content}</h2>
    )
   }

  return (
    <Router>
      <div>
        <Link to='/' style={padding}>Home</Link>
        <Link to='/notes' style={padding}>Notes</Link>
        <Link to='/users' style={padding}>Users</Link>
      </div>

      <Routes>
        <Route path='/users/:id' element={<User data={data}/>}/>
        <Route path='/notes/:id' element={<Note notes={notes}/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users data={data}/>}/>
        <Route path='/notes' element={<Notes notes={notes}/>}/>
      </Routes>

    </Router>
  )
}

export default App