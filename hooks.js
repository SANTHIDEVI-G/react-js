import { useState} from "react"
function Hooks(){
    //let Cnt = 0
    //let Cnt = userState(0)
    const [cnt,setCnt]=useState(0)//--const cnt=0 clickfunction setcnt(0)
    const [name,setName] = useState('')
    //const [cnt,setCnt] = useState(10)//--const=10 functionname setcnt(10)
    //count getcount = (count)=>{
       // cnt= ++count
        //console.log(cnt)
        return(
            <div>
                <h1>react hook</h1>
                <p>count is{cnt}</p>
                {/*<button onClick={()=>getcount(cnt)}>count</button>*/}
                <button onClick={()=>setCnt(cnt+1)}>Count</button>
                <br/>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                <h2>Name is:{name}</h2>
            </div>
        )

    }
export default Hooks