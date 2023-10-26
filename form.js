import React, { useState } from "react";
function From(){
    const[rollno,setRollno] = useState('');
    const[name,setName] =useState('');
    function handleSumbit(event){
        event.preventDefault();
        alert("My roll no. is "+rollno);
        alert("Name is "+name)
        
    }
    //console.log(rollno)
    return(
        <div>
            <h1>this from page</h1>
            <form onSubmit={handleSumbit}>
                <label>Roll.no</label>
                <input type="text" name="rollno" onChange={(e) => setRollno(e.target.value)}/>
                <br/>
                <label>Name</label>
                <input type="text" name="fullname" onChange={(e) => setName(e.target.value)}/>
                <br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default From;