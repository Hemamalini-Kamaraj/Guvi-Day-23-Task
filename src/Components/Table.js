import Data from '../Data/userData';
function Table(){

// get table column
 const column = Object.keys(Data[0]);
 // get table heading data
 const ThData =()=>{
    
     return column.map((data)=>{
         return <th key={data}>{data.toUpperCase()}</th>
     })
 }
// get table row data
const tdData =() =>{
     return Data.map((data,index)=>{
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
