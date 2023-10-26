
function Events(){
   // function getdata(res){
       // document.write(res);
        //console.log(res);
        // const arr = [10,20,30];
        const arr = [
            {
                name:'Harish',
                roll:'g2'
            },
            {
                name:'ndp',
                roll:'f6',
                class:'ece'
            },
            {
                name:'santhi',
                roll:408,
                class:'ece'
            },
            {
                name:'devi',
                roll:777,
                class:'ece'
            }
        ]
        function getdata(res){
            res.map((ele,i,arr)=>{
                document.write(ele.name+" "+ele.roll+""+ele.class);
            });
        }
    
   // function getdata(name){
       // alert("Name is:+name");
   // }
    return(
        <div>
            <h1>event</h1>
            {/* <button onClick={getdata('santhi')}>click here</button> */}
            {/* --------or----- */}
            {/* <button onClick={()=>getdata(arr)}>Click here</button> */}
              <button onClick={()=>getdata(arr)}>Click here</button> 

        </div>
    );
}
export default Events