import {Link} from "react-router-dom"

function Menu(){
    return(
      <div>
            <Link to="/">Home</Link>  |
            <Link to="/about">About</Link> |
            <Link to="/service">Services</Link> |
            <Link to="/contact">Contact</Link> |
            <Link to="/trainees">Trainees</Link> |
            <Link to="/student">Student</Link> |
            <Link to="/Events">Events</Link> |
            <Link to="/Event1">Event1</Link> |
            <Link to="/Events2">Events2</Link> |
            <Link to="/count">count</Link> |
            <Link to="/hooks">Hooks</Link> |
            {/* <Link to="/hooks1">Hooks1</Link> | */}
            <Link to="/form">Form</Link> |
            <Link to="/form1">Form1</Link> |
            <Link to="/products1">Products1</Link> |
            <Link to="/Newproduct">Newproduct</Link> |
            <Link to="/image">Image</Link>
            {/* <link to="/getproduct">Getproduct</link> */}

            
            
      </div>
    )
    
}
export default Menu;