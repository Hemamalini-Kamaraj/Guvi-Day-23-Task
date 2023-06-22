import React, { useContext } from 'react'
import { UserDetailContext } from '../Context/UserDetailContext'
import Table from './Table'

function ViewUser() {
    return(
        <div className='tableDiv'>
            <Table/>
        </div>
        
    );
}

export default ViewUser