import { useEffect,useState } from "react";
import axios from "axios"; // npm i axios
import './products.css';

function Products1(){
    const [data,setData] = useState([]) // const data=[]
    const [sData,SetData] = useState({})
    const [cnt,setCnt] = useState(0) // const cnt=0
    const api = 'https://fakestoreapi.com/products';
    useEffect(()=>{
        getProductlist()
    },[cnt])
    //way1 .without [] means multiple times
    //way2. [] means one time
    //way3. [cnt] means inside the function call based on "cnt" value 
    const getProductlist = () =>{
        axios.get(api+'/15').then((response) => {
            // console.log(response)
            SetData(response.data);            
        });
    }
    return (
        <>
        <h1>new product list</h1>
            <p>{cnt}</p>
            <button onClick={()=>setCnt(cnt+1)}>count</button>
            <div className="products-list">
            {
                // data.map((ele,i)=>{
                //     return(
                //         <div className="card">
                //             <img src={ele.image} />
                //             <p>{ele.title}</p>
                //             <p>{ele.price}</p>
                //             <p>{ele.category}</p>
                //         </div>                        
                //     )
                // })

            }
            <div className="card">
                             <img src={sData.image} />
                            <p>{sData.title}</p>
                             <p>{sData.price}</p>
                             <p>{sData.category}</p>
                         </div>  
            </div>
        </>
    )
}
export default Products1;
