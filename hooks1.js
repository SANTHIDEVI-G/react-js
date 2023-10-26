//  import React, {useState} from 'react'
//  function Hooks1(){
//     //let r = [1,2,3];
//     const [arr,setArr] = useState(['apple','biscut','santhi','hello'])
//     const [fruitname,setFruitname] = useState('')
//     const filterFruits = () =>{
//         console.log(fruitname)
//         console.log(arr)
//         let output = arr.filter((ele,i))=>{
//             return(ele===fruitname)
//         }
//           //console.log(output)
//     }
//     return(
//         <div>
//             <h1>react hooks</h1>
//             <input type="text" onChange={(e)=>setFruitname(e.target.value)}/>
//             <button onClick={filterFruits}>find</button>
//             <button>find</button>
//             <br/>
//             <ul style={{'display':'inline-block'}}>
//                 {
//                 arr.map((ele)=>{
//                  return(<li>{ele}</li>)
// })
//                 }
                    
 
// </ul>
// </div>
// )
//  }
// export default Hooks1;