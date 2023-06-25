import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

function UpdateForm({selectedOption}) {

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

    let handleNoteUpdate = (event) => {
        setIdContent(event.target.value)
    }

    let handleImpUpdate = (event) => {
        setIdRef(event.target.value)
    }

    const handleUpdateClick = () => {
        axios
            .put(`http://localhost:3001/notes/${selectedOption}`,{
                id:'',
                content:IdContent,
                important:IdRef
            })
            alert('Note Updated.. Please click Read Notes to view!')
    }

    return (
        <div>
          <form>
            <input
            value={IdContent} 
            onChange={handleNoteUpdate}
            /> <br /><br />
            
            <label form='dropdownNoteImportant'>Is Important: </label>
            <select
            value={IdRef}
            onChange={handleImpUpdate}
            id='dropdownNoteImportant'>
            <option>--Select--</option>
            <option>true</option>
            <option>false</option>
            </select>
            <br /><br />
            <button type='submit' onClick={handleUpdateClick}>Update Note</button>
        </form>
    </div>
    )
}

function EditNote() {
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const selectOptionRef = useRef(null)

    // get the id's from backend
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
            <h1>Edit Notes</h1>

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

export default EditNote;
