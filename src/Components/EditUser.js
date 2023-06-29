import React, { useState, useEffect, useRef } from 'react';
import Data from '../Data/userData';

function UpdateForm({selectedOption}) {

    const [userData,setUserData] = useState('');
    const [userName,setUserName] = useState('');
    const [userEmail,setUserEmail] = useState('');
    const [userAge,setUserAge] = useState('');
    const [userCity,setUserCity] = useState('');

    const userNameRef = useRef(null)

    useEffect(()=>{
        setUserData(Data)
    },[])

    useEffect(() => {
        const userObject = Data.find(user => user.ID === Number(selectedOption));
        if (userObject) {
            setUserName(userObject.Name);
            setUserEmail(userObject.Email);
            setUserAge(userObject.Age);
            setUserCity(userObject.City)
        }
      }, [selectedOption]);

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
                ID:Number(selectedOption),
                Name:userName,
                Email:userEmail,
                Age:userAge,
                City:userCity
            }

            let changeUsers = [...userData];

            for (var index = 0; index < changeUsers.length; index++){
                if (changeUsers[index].ID === Number(selectedOption)) {
                    break;
                }
            }

            userData[index] = userObject;

            alert('User details Updated.. Please click View User to view!')
            setUserName('');
            setUserEmail('');
            setUserAge('');
            setUserCity('');
            userNameRef.current.focus();   
    }

    return (
        <div>
          <form>
                <div className='col-sm-6'>
                    <label form='userName'>Enter Name</label>
                    <input id='userName' ref={userNameRef} type='text' value={userName} onChange={handleNameChange}></input> 
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

function EditUser() {

    const [options,setOptions] = useState(Data);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(()=>{
        setOptions(Data)
    },[])

    const selectOptionRef = useRef(null)

    let selectHandler = (event) => {
        setSelectedOption(event.target.value);
    }

  return (
    <div className='editUser'>
        <h1>Edit Users</h1>

            <label>
                Select an ID to Edit &nbsp;&nbsp;
                <select ref={selectOptionRef} onChange={selectHandler} value={selectedOption}>
                    <option value=''>Select an Option</option>
                    {
                        options.map(option => (
                            <option key={option.ID}>{option.ID}</option>
                        ))
                    }
                </select>  
            </label>
            <br /><br />
            {selectedOption && <UpdateForm selectedOption={selectedOption} />}
      </div>
  )
}

export default EditUser