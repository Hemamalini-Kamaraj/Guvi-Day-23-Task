import { useContext, useEffect } from "react";
import { UserDetailContext } from "../Context/UserDetailContext";
import UserDetails from "../Data/UserDetails";
function Table(){

// get table column
 const column = Object.keys(userData[0]);
 // get table heading data
 const ThData =()=>{
    
     return column.map((data)=>{
        // console.log(data.ID)
         return <th key={data}>{data}</th>
     })
 }
// get table row data
const tdData =() =>{
   
     return userData.map((data,index)=>{
       return(
           <tr key={index}>
                {
                   column.map((v)=>{
                       return <td key={data[v]}>{data[v]}</td>
                   })
                }
           </tr>
       )
     })
}
  return (
    <div>
        <h3 className="text-center fw-bold text-dark" style={{ marginTop:"80px"}}>User Details</h3>
        <table className="table">
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
    </div>
      
  )
}
export default Table;