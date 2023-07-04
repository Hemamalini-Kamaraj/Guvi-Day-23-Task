import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SideNavBar from './Components/SideNavBar';
import {Link,BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ViewUser from './Components/ViewUser';
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';
import DeleteUser from './Components/DeleteUser';
import Home from './Components/Home';
import EditNotebyId from './Components/EditNotebyId';


function App() {
  
  return (
    <Router>

      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/view-user' element={<ViewUser/>}/>
            <Route path='/create-user' element={<CreateUser/>}/>
            <Route path='/edit-user' element={<EditUser/>}/>
            <Route path='/delete-user' element={<DeleteUser/>}/>
            <Route path='/edit-user/:id' element={<EditNotebyId/>}/>
        </Routes>
    </Router>
  //  <div>
  //     <div id="page-top">
  //       <div id="wrapper">
  //         <SideNavBar />
  //       </div>
  //     </div>
  //  </div>
  );
}

export default App;