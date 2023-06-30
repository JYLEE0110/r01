import axios from "axios";
import { useEffect, useState } from "react";

const ProductList = ({requestViewProduct}) => {

    const [obj, setObj] = useState([])

    console.log(obj)

    useEffect(() => {

        // async awit 못쓴다.
        axios.get('http://localhost/products')
        .then(res => {
            console.log("effect" + res.data)

            // 비동기 호출하면서 계속해서 무한 랜더링
            setObj(res.data)
        })

    }, [])


    if(obj.length === 0){
        return(
            <div className="text-4xl">Loading..........</div>
        )
    }


    return (

        <ul>
            {/* 최초 랜더링 시 obj가 비어있으므로 무시하고 비동기 통신 후 화면에 데이터를 뿌린다. */}
            {obj.map(p => 
            <li key={p.id}
            onClick={() => requestViewProduct(p.id)}>
                {p.id} - {p.pname} - {p.price}
            </li>)}
        </ul>

    );


}

export default ProductList;