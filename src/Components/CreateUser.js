import React, { useState, useRef } from 'react';
import Data from '../Data/userData';

function CreateUser() {

    const [userData,setUserData] = useState(Data)
    const [userName,setUserName] = useState('')
    const [userEmail,setUserEmail] = useState('')
    const [userAge,setUserAge] = useState('')
    const [userCity,setUserCity] = useState('')

    const userNameRef = useRef(null)

    let addUser = (event) => {
        event.preventDefault();

        let userObject = {
            ID:userData.length+1,
            Name:userName,
            Email:userEmail,
            Age:userAge,
            City:userCity
        }

        let index = userData.length
        userData[index]=userObject;
        alert('User details Created.. Please click View User to view!')
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