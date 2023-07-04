import React from 'react'
import SideNavBar from './SideNavBar'

function Home() {
  return (
    <>
     <div className='dashboardHeading'>
        <h1 className='fw-bold text-dark'>User Application</h1>
    </div>
     <div>
      <div id="page-top">
        <div id="wrapper">
          <SideNavBar />
        </div>
      </div>
   </div>
    </>
   
  )
}

export default Home