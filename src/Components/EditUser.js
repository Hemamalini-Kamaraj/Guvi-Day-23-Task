import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function UpdateForm({selectedOption}) {

    const [userName,setUserName] = useState('');
    const [userEmail,setUserEmail] = useState('');
    const [userAge,setUserAge] = useState('');
    const [userCity,setUserCity] = useState('');

    useEffect(()=>{
        axios
            .get(`http://localhost:3001/users/${selectedOption}`)
            .then(function(response){
                setUserName(response.data.Name);
                setUserEmail(response.data.Email);
                setUserAge(response.data.Age);
                setUserCity(response.data.City)
            })
    },[selectedOption])

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

    const handleUpdateClick = () => {
        axios
            .put(`http://localhost:3001/users/${selectedOption}`,{
                id:'',
                Name:userName,
                Email:userEmail,
                Age:userAge,
                City:userCity
            })
            alert('User details Updated.. Please click View User to view!')
    }

    return (
        <div>
          <form>
                <div className='col-sm-6'>
                    <label form='userName'>Enter Name</label>
                    <input id='userName' type='text' value={userName} onChange={handleNameChange}></input> 
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

    const [options,setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const selectOptionRef = useRef(null)

    useEffect(() => {
        axios
            .get('http://localhost:3001/users/')
            .then(response => setOptions(response.data));
    }, []);

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
                            <option key={option.id}>{option.id}</option>
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