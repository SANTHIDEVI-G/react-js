import Student from './student'
//parent component
function Trainees(){
    let students = [{
        name: 'santhi',
        rollno: 6666
    }]
    return(
        <div className='App cellSpacing={0}' align="center" width={'500px'}>
            <h1>trainess</h1>
            {/* <Student name="kiran" rollno="12"/>
            <Student name="kiran" rollno="12"/>
            <Student name="kiran" rollno="12"/> */}
            <table border={1}>
                <tr>
                    <th>sno</th>
                    <th>name</th>
                    <th>rollno</th>
                </tr>
                {
                    students.map((ele,i,arr)=>{
                        return(<Student index={i} name={ele.name} rollno={ele.rollno}/>)
                    })
                }
                </table>

        </div>
    )
}
export default Trainees;