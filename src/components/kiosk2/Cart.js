import { useEffect, useState } from "react";

let qty = 1;

// 상품은 spread로 들어오거나 객체로 들어온다.
const Cart = ({ id, pname, price }) => {

    const [items, setItems] = useState([])

    console.log("cart", id, pname, price)

    useEffect(() => {
        console.log("cart useEffect")

        //id가 undefiend거나 0일때
        if (!id || id === 0) {
            return
        }
            setItems([...items, { id, pname, price, qty: qty++ }])


    }, [id, pname, price])

    return (

        <div>
            <div className="text-5xl">Cart</div>
            <div>
                <ul>
                    {items.map((cartItem, idx) =>

                        <li key={idx}>{cartItem.id} - {cartItem.pname} - {cartItem.price} - {cartItem.qty}</li>

                    )}
                </ul>
            </div>
        </div>

    );
}

export default Cart;