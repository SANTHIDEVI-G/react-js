// function Events(){
//     function fun(msg){
//         alert('clicked.'+msg)
//     }
//     let name='santhidevi';
//     function getname(event){
//         console.log(event.target.name)
//     }
//     return(
//         <div>
//             {/* <button onClick={fun}>click here</button> */}
//             {/* -----or--- */}
//             {/* <button onClick={()=>fun(test)}>click here</button> */}
//             {/* ------or-- */}
//             <button onClick={()=>fun(name)}>click here</button>
//             <br/>
//             <input type="text"name="fname"onChange={getname}></input>
//         </div>
//     )
// }
// export default Events;
// import React, { useState } from "react";


import './App.css';
import { useState } from 'react';
function App() {
  let yellow = '#ffc800';
  const [bgColor, setBgColor] = useState(yellow);
   const changeColor =()=>{
      let purple = '#A020F0';
      setBgColor(purple);
    }
    if(bgColor){
        return 
    }
  return (
    <div className="App">
      <header className="App-header" style={{background: bgColor}}>
        <button onClick={changeColor}>Change Color</button>
      </header>
    </div>
  );
}

export default App;
