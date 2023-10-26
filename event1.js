function Events1(){
    function getdata(e,arrg){
        // console.log(e.target.name+"value is:" +e.target.value);
        document.write(e.target.name+"value is:" +e.target.value+""+arrg);
    }
    return(
        <div>
            <h1>input event</h1>
            {/* <input type="text" name="firstname" onChange={getdata}/> */}
            <input
            type="text"
            name="firstname"
            //onChange={getdata}
            onChange={(e) => getdata(e, "santhi")}
            />
        </div>
    )
}
export default Events1;