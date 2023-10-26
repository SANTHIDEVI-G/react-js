// function Services(){
//     let ss = {
//         background:'red',
//         color:'green',
//         fontSize:'50px'
//     }
//     return(
//         <div style={ss}>
//         <h1 >This is services component</h1>
//         </div>
//     )
// }
// export default Services;
import React, { Component } from 'react'
class Services extends Component{
    render(){
        return(
            <div>
                <h>this is service page with class {this.props.name}</h>
            </div>
        )
    }
}
export default Services
