import axios from "axios";
import { useEffect, useState } from "react";

// 비동기 전 => 최초 1번 랜더링할때 비어있는 데이터를 만든다. if(product.length ===0 )도 가능
const initState = {
    id: 0,
    pname: '',
    price: 0
}

const ProductDetail = ({ target, requestBuy }) => {

    const [product, setProduct] = useState(initState)

    useEffect(() => {

        console.log("useEffect...", target)

        const id = target.pno

        if (id !== 0) {

            axios.get(`http://localhost:80/products/${id}`)
                .then(res => {
                    console.log(res.data)
                    setProduct(res.data)
                })

        }

        // 객체가 아니면 랜더링이 안된다.
    }, [target])


    return (

        <div>
            <br></br>
            <div>Product Detail</div>
            <div>
                <div>ID : {product.id}</div>
                <div>Name : {product.pname}</div>
                <div>Price : {product.price}</div>
            </div>
            <div>
                <button
                onClick={() => requestBuy(product)}
                >Add Cart
                </button>
            </div>
        </div>

    );
}

export default ProductDetail;