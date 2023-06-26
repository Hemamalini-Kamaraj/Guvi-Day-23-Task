import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'


function Delete({selectedOption}) {

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

    const handleUpdateClick = () => {
            axios
                .delete(`http://localhost:3001/users/${selectedOption}`)
                 alert('User details Deleted.. Please click Read Notes to view!')
    }

    return (
        <div>
          <form>
                <div className='col-sm-6'>
                    <label form='userName'>Enter Name</label>
                    <input id='userName' type='text' value={userName}></input> 
                </div><br/>
                <div className='col-sm-6'>
                    <label form='userEmail'>Enter Email</label>
                    <input id='userEmail' type='text' value={userEmail}></input>
                </div><br/>
                <div className='col-sm-6'>
                    <label form='userAge'>Enter Age</label>
                    <input id='userAge' type='text' value={userAge}></input>
                </div><br/>
                <div className='col-sm-6'>
                    <label form='userCity'>Enter City</label>
                    <input id='userCity' type='text' value={userCity}></input>
                </div><br/>
                <div className='col-sm-6'>
                    <button type='submit' onClick={handleUpdateClick}>Delete user</button>
                </div>
        </form>
    </div>
    )
}

function DeleteUser() {

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:3001/users/')
            .then(response => setOptions(response.data));
    }, []);

    let selectHandler = (event) => {
        setSelectedOption(event.target.value);
    }

  return (
    <div className='deleteUser'>
        <h1>Delete User</h1>

            <label>
                Select an ID to Delete &nbsp;&nbsp;
                <select value={selectedOption} onChange={selectHandler}>
                    <option value=''>Select an Option</option>
                    {
                        options.map(option => (
                            <option key={option.id}>{option.id}</option>
                        ))
                    }
                </select>  
            </label>
            <br /><br />
            {selectedOption && <Delete selectedOption={selectedOption} />}
      </div>
  )
}

export default DeleteUser