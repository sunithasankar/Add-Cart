import { useEffect, useState } from "react";
import Cart from "./Cart";
import axios from "axios";

function Products(){
    const[products, setProducts] = usestate({})
useEffect(() =>{
axios.get("https://fakestoreapi.com/products").then((res)=>(
    console.log(res.data)
)
)
}
)
return(
    <div className='border border-4 border-info p-2 w-100 '>
    <h1>Products</h1>
    <div>
        {products.lenth>0 && (
            products.map((products) => {
                return <li>{products.title}</li>
            })
        )}
        </div>  
    <Cart></Cart>
  </div>

)


}
export default Products;