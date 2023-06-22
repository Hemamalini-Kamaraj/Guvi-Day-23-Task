// import { useState } from "react";

// const userData = [
//     {
//         ID:1,
//         Name:'Hema',
//         Email:'123@gmail.com',
//         Age:25,
//         City:'Coimbatore'
//     },
//     {
//         ID:2,
//         Name:'Sathish',
//         Email:'321@gmail.com',
//         Age:33,
//         City:'Kovilpatti'
//     },
//     {
//         ID:3,
//         Name:'Aaraa sri',
//         Email:'567@gmail.com',
//         Age:1,
//         City:'Kovilpatti'
//     }
// ]



// export default userData;


import React from 'react'
import { useState } from 'react'

function UserDetails() {

    const [userData, setUserData] =useState([{
        ID:1,
        Name:'Hema',
        Email:'123@gmail.com',
        Age:25,
        City:'Coimbatore'
    },
    {
        ID:2,
        Name:'Sathish',
        Email:'321@gmail.com',
        Age:33,
        City:'Kovilpatti'
    },
    {
        ID:3,
        Name:'Aaraa sri',
        Email:'567@gmail.com',
        Age:1,
        City:'Kovilpatti'
    }])
  return (
    <div>UserDetails</div>
  )
}

export default UserDetails