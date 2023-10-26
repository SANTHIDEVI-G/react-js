const getproductslist = ()=>{
    axios.get('https://fakestoreapi.com/products').then((response)=>{
       // console.log(response.data)
       let res = response.data
       if(selectcat === ''){
        setData(res)
       }else{
       // console.log(selectcat)
        let filtered_data = res.filter((ele)=>{
            return (ele.category === selectcat)
           })
        if(filtered_data.length == 0){
            setData(res)
        }else{
            setData(filtered_data)
        }               
       }           
    })
}