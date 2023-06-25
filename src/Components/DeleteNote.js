import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Delete({selectedOption}) {

    const [IdContent,setIdContent] = useState('');
    const [IdRef,setIdRef] = useState('')

    useEffect(()=>{
        axios
            .get(`http://localhost:3001/notes/${selectedOption}`)
            .then(function(response){
                setIdContent(response.data.content)
                setIdRef(response.data.important)
            })
    },[selectedOption])

    const handleUpdateClick = () => {
        axios
            .delete(`http://localhost:3001/notes/${selectedOption}`)
             alert('Note Deleted.. Please click Read Notes to view!')
    }

    return (
        <div>
          <form>
            <input value={IdContent}></input> <br /><br />
            
            <label form='dropdownNoteImportant'>Is Important: </label>
            <select
            id='dropdownNoteImportant'>{IdRef}
            <option>--Select--</option>
            <option>true</option>
            <option>false</option>
            </select>
            <br /><br />
            <button type='submit' onClick={handleUpdateClick}>Delete Note</button>
        </form>
    </div>
    )
}

function DeleteNote() {
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:3001/notes/')
            .then(response => setOptions(response.data));
    }, []);

    let selectHandler = (event) => {
        setSelectedOption(event.target.value);
    }

  return (
    <div>
        <h1>Delete Notes</h1>

        <label>
            Select an ID to Delete &nbsp;&nbsp;
            <select onChange={selectHandler} value={selectedOption}>
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

export default DeleteNote;