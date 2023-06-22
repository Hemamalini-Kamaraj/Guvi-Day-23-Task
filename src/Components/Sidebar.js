import React from 'react';
import Hello from './Hello';
import { UserDetailContext } from '../Context/UserDetailContext';
import { Link, Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
import userData from '../Data/UserDetails';

function Home (){
  return <h1>Welcome to the world of Geeks!</h1>
}

function Sidebar() {
  return (
    <div id='wrapper'>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-text mx-3">CRUD TASK</div>
            </a>
            <hr className="sidebar-divider my-0"></hr>

                <li className="nav-item active">
                    <Link className="nav-link" to='/'>
                    <i className="fas fa-fw fa-dashboard"></i>
                    <span>Dashboard</span>
                    </Link>
                 </li>

            <hr className="sidebar-divider"></hr>
                
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to='/create-user' >
                        <i className="fas fa-fw fa-plus"></i>
                        <span>Create User</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to='/view-user' >
                        <i className="fas fa-fw fa-eye"></i>
                        <span>View User</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to='/edit-user' >
                        <i className="fas fa-fw fa-edit"></i>
                        <span>Edit User</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to='/delete-user' >
                        <i className="fas fa-fw fa-trash"></i>
                        <span>Delete User</span>
                        </Link>
                    </li>
                
                

        </ul>
      </div>
  )
}

export default Sidebar