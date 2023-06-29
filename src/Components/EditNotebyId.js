import React from 'react';
import Data from '../Data/userData';
import  { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditNotebyId() {

    const id = useParams().id;

    const [userData,setUserData] = useState('');
    const [userName,setUserName] = useState('');
    const [userEmail,setUserEmail] = useState('');
    const [userAge,setUserAge] = useState('');
    const [userCity,setUserCity] = useState('');

    const userNameRef = useRef(null)

    useEffect(() => {
        setUserData(Data)
    },[])

    useEffect(() => {
        const userObject = userData.find(user => user.ID == id);
        if (userObject) {
            setUserName(userObject.Name);
            setUserEmail(userObject.Email);
            setUserAge(userObject.Age);
            setUserCity(userObject.City)
        }
      }, [id, userData]);

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

    const handleUpdateClick = (event) => {

            event.preventDefault();
    
            let userObject = {
                ID:Number(id),
                Name:userName,
                Email:userEmail,
                Age:userAge,
                City:userCity
            }

            let changeUsers = [...userData];

            for (var index = 0; index < changeUsers.length; index++){
                if (changeUsers[index].ID == id) {
                    break;
                }
            }

            userData[index] = userObject;

            alert('User details Updated.. Please click View User to view!')
            setUserName('');
            setUserEmail('');
            setUserAge('');
            userNameRef.current.focus();   
    }

  return (
    <div className='editUser'>
        <h1>Edit User</h1>
          <form>
                <div className='col-sm-6'>
                    <label form='userName'>Enter Name</label>
                    <input id='userName' ref={userNameRef} type='text' value={userName} onChange={(handleNameChange)}></input> 
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
                    <button type='submit' onClick={handleUpdateClick}>Update user</button>
                </div>
        </form>
    </div>
  )
}

export default EditNotebyId