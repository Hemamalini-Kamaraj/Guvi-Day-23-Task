import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function CreateUser() {

    const [userData,setUserData] = useState('')
    const[userName,setUserName] = useState('')
    const[userEmail,setUserEmail] = useState('')
    const[userAge,setUserAge] = useState('')
    const[userCity,setUserCity] = useState('')

    const userNameRef = useRef(null)

    useEffect(()=>{
        axios
          .get('http://localhost:3001/users')
          .then(response=>setUserData(response.data))
      
      })

    let addUser = (event) => {
        event.preventDefault();

        let userObject = {
            id:userData.length+1,
            Name:userName,
            Email:userEmail,
            Age:userAge
        }

        axios
            .post('http://localhost:3001/users/',userObject);

            alert('User Added.. Please check View User to view')
            setUserName('');
            setUserEmail('');
            setUserAge('');
            userNameRef.current.focus();
    }

    let handleNameChange = (event) => {
        setUserName(event.target.value);
    }

    let handleEmailChange = (event) => {
        setUserEmail(event.target.value);
    }

    let handleAgeChange = (event) => {
        setUserAge(event.target.value);
    }

    let handleCityChange = (event) => {
        setUserCity(event.target.value);
    }

  return (
    <div className='createUser'>
        <h1>Create User</h1>
        <form onSubmit={addUser}>
                <div className='col-sm-6'>
                    <label form='userName'>Enter Name</label>
                    <input id='userName' type='text' ref={userNameRef} value={userName} onChange={handleNameChange}></input> 
                </div><br/>
                <div className='col-sm-6'>
                    <label form='userEmail'>Enter Email</label>
                    <input id='userEmail' type='text' value={userEmail} onChange={handleEmailChange}></input>
                </div><br/>
                <div className='col-sm-6'>
                    <label form='userAge'>Enter Age</label>
                    <input id='userAge' type='text' value={userAge} onChange={handleAgeChange}></input>
                </div><br/>
                <div className='col-sm-6'>
                    <label form='userCity'>Enter City</label>
                    <input id='userCity' type='text' value={userCity} onChange={handleCityChange}></input>
                </div><br/>
                <div className='col-sm-6'>
                    <button type='submit'>Add user</button>
                </div>
        </form>
    </div>
  )
}

export default CreateUser;