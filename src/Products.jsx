import { useEffect, useState } from "react";
import Cart from "./Cart";
import axios from "axios";

function Products() {
    const[products, setProducts] = useState([]);
    const[cart, setCart] = useState([])
useEffect(() =>{
axios.get("https://fakestoreapi.com/products").then((res)=>{
   setProducts(res.data)
})
},[])
function addToCart(product){
    setCart([...cart,{...product}])
}
function isProductInCart(product){
    var x=cart.find(function(cp){
        if(cp.title===product.title){
            return true
        }
        else{
            return false
        }

    })
console.log(x)
}
return (
    <div className='d-flex flex-wrap border border-4 border-info p-2 w-100 '>
       <div className="w-75">
        {products.length>0 && (
            products.map((product)=>{
                return <li className="d-flex">
                    <img src={product.image} width="100px" alt=""/>
                   <div className="p-4"> 
                    <h4>{product.title}</h4>
                   <h3>{product.price}</h3>
                   <button onClick={()=>{addToCart(product)}}>Add to Cart</button>
                   <button onClick={()=>{isProductInCart(product)}}>Go to Cart</button>
                   </div> 
                </li>
            })
        )}
        </div>
        <div className="w-25">
        <Cart cart={cart}></Cart>
            </div>  
    
  </div>

)
}
export default Products;