// import React, { useState } from 'react'

// function App() {
// const [counter, setCounter] = useState(0);

// setTimeout(
//   () => setCounter(counter+1) ,1000)

//   console.log("rendering..", counter)

//   return (
//     <div>{counter}</div>
//   )
// }

// export default App


import React, { useState } from 'react'

const Display = (props) => {
  return(
    <div>{props.counter}</div>
  )
}

function Button (props) {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

function App() {

  const [counter,setCounter] = useState(0);
  const [showButton, setShowButton] = useState(true);

  const handleIncrementClick = () => setCounter(counter+1);
  
  const handleDecrementClick = () => setCounter(counter-1);

  const handleZeroClick = () => setCounter(0);

  return (
    <div>
      <Display counter= {counter} />
      <Button text="plus" handleClick = {handleIncrementClick}/>&nbsp;
      <Button text="minus" handleClick = {handleDecrementClick}/>&nbsp;
      <Button text="zero" handleClick = {handleZeroClick}/>
      {/* <button onClick={handleIncrementClick}> Plus </button>&nbsp;
      <button onClick={handleDecrementClick}> Minus </button>&nbsp;
      <button onClick={handleZeroClick}> Zero </button> */}
      
    </div>
  )
}

export default App