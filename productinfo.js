import { useParams } from "react-router-dom";
function Productinfo(){
    const { id } =useParams();
    const {data, setData} = userState([])
    //console.log(id)
    const api  = 'https://fakestoreapi.com/products/1' +id
    return(
        <div>
            <h1>Single Product</h1>
            {api}
        </div>
    )
}
export default Productinfo;