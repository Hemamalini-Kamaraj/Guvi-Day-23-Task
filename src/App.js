import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from './Components/Sidebar';
import { Link, Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
import Hello from './Components/Hello';
import ViewUser from './Components/ViewUser';
import { UserDetailContext } from './Context/UserDetailContext';
import { useContext } from 'react';

function App() {

  const userData = useContext(UserDetailContext)
  console.log(userData)
  
  return (
   <Router>
      <div id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              <div className='container-fluid'>
              <UserDetailContext.Provider value={userData}>
                  <Routes>
                    <Route path='/' element={<Hello/>}/>
                    <Route path='/view-user' element={<ViewUser/>}/>
                  </Routes>
                </UserDetailContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
   </Router>
  );
}

export default App;