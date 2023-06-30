import { useState } from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

const Kiosk2 = () => {
    
    //useEffect가 일어나야하므로 {pno:0} 으로 선언 
    const[target, setTarget] = useState({pno:0})
    const [wanted, setWanted] = useState(null)

    const requestViewProduct = (id) => {

        console.log('reqeustView'+id)
        // useEffect가 일어나야하므로새로운 객체  => ex) 게시물 조회 수?
        setTarget({pno:id})

    }
    

    const requestBuy = (product) => {

        console.log("requestBuy")
        console.log(product)
        setWanted(product)
    }

    return ( 

        <div>
            <ProductList requestViewProduct={requestViewProduct}></ProductList>
            <ProductDetail target={target} requestBuy={requestBuy} ></ProductDetail>
            <Cart {...wanted}></Cart>
        </div>

     );
}
 
export default Kiosk2;