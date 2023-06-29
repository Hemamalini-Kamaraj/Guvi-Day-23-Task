import React from 'react'
import { useState, useEffect } from 'react';
import Data from '../Data/userData';


function Delete({selectedOption}) {

    const [userData,setUserData] = useState(Data);
    const [userName,setUserName] = useState('');
    const [userEmail,setUserEmail] = useState('');
    const [userAge,setUserAge] = useState('');
    const [userCity,setUserCity] = useState('');

    useEffect(() => {
        const userObject = userData.find(user => user.ID == selectedOption);
        if (userObject) {
            setUserName(userObject.Name);
            setUserEmail(userObject.Email);
            setUserAge(userObject.Age);
            setUserCity(userObject.City)
        }
      }, [selectedOption, userData]);

            let removeUser = (event) => {
                event.preventDefault();

                let changeUsers = [...userData];
                
                for (var index = 0; index < changeUsers.length; index++){
                            if (changeUsers[index].ID == selectedOption) {
                                break;
                            }
                        }
                userData.splice(index,1)
                alert('User details Deleted.. Please click View User to view!');
            }

    return (
        <div>
          <form>
                <div className='col-sm-6'>
                    <label form='userName'>Enter Name</label>
                    <input id='userName' type='text' value={userName} onChange={()=>{}}></input> 
                </div><br/>
                <div className='col-sm-6'>
                    <label form='userEmail'>Enter Email</label>
                    <input id='userEmail' type='text' value={userEmail} onChange={()=>{}}></input>
                </div><br/>
                <div className='col-sm-6'>
                    <label form='userAge'>Enter Age</label>
                    <input id='userAge' type='text' value={userAge} onChange={()=>{}}></input>
                </div><br/>
                <div className='col-sm-6'>
                    <label form='userCity'>Enter City</label>
                    <input id='userCity' type='text' value={userCity} onChange={()=>{}}></input>
                </div><br/>
                <div className='col-sm-6'>
                    <button type='submit' id={selectedOption} onClick={removeUser}>Delete user</button>
                </div>
        </form>
    </div>
    )
}

function DeleteUser() {

    const [options, setOptions] = useState(Data);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        setOptions(Data)
    });

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
                            <option key={option.ID}>{option.ID}</option>
                        ))
                    }
                </select>  
            </label>
            <br /><br />
            {selectedOption && <Delete selectedOption={selectedOption} />}
      </div>
  )
}

export default DeleteUser;