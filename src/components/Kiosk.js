import { useState } from "react"

// rerendering 할 필요가 없어서 외부에 선언
const products = [
    {
        pno: 1,
        pname: 'Americano',
        price: 7000
    },

    {
        pno: 2,
        pname: 'Latte',
        price: 8500
    },

    {
        pno: 3,
        pname: 'Milk Tea',
        price: 6000
    },

    {
        pno: 4,
        pname: 'Green Tea',
        price: 9000
    }
]

const getTotal = (arr) => {

    if(!arr || arr.length === 0){
        return 0
    }
    let sum = 0
    //reduce
    for(const ele of arr){
        sum += (ele.price*ele.qty)
    }
    return sum

}


const Kiosk = () => {

    //Hooks 제약조건 반드시 Component 내에서 선언되어야한다.
    // items => Cart영역
    const [items, setItems] = useState([])

    const handleClickBuy = (product) => {

        console.log({ ...product, qty: 1 })

        const result = items.filter((ele) => ele.pno === product.pno)

        console.log("result", result)

        // 기존의 담은 상품이 없으면
        if (result.length === 0) {
            setItems([...items, { ...product, qty: 1 }])
            return
        }

        const cartItem = result[0]
        cartItem.qty += 1
        setItems([...items])

    }

    const handleClickQty = (pno, amount) => {

        console.log("pno" , pno, "amount", amount)

        const target = items.filter(item => item.pno === pno)[0]

        console.log(target)

        //increse
        if(amount === 1){
            target.qty += 1
            setItems([...items])
        }else{

            if(target.qty === 1){
                setItems(items.filter(ele => ele.pno !== pno))
            }else{
                target.qty -=1
                setItems([...items])
            }

        }
    }

    return (

        <div className=" w-full h-[100vh] bg-blue-300 flex">
            <div className="w-2/3 bg-white">
                <div className="text-4xl font-extrabold m-5 p-2">Products</div>

                <ul>
                    {/* Map으로 상품데이터를 뿌려줌 */}
                    {products.map(p =>
                        <li
                            key={p.pno}
                            className="text-2xl underline m-3 p-3 bg-red-100"
                            onClick={() => { handleClickBuy(p) }}>
                            {p.pno} - {p.pname} - {p.price}
                            <button className=" border-2 m-2 p-2 rounded-sm border-blue-300">BUY</button>
                        </li>
                    )}
                </ul>

            </div>
            <div className="w-1/3">
                <div className="text-4xl font-extrabold m-5 p-2">Cart</div>

                <ul>
                    {items.map((item, idx) =>
                        <li key={idx} className="border-2">
                            <div className="flex text-3xl text-white m-4 p-4">
                                <div>{item.pno}</div>
                                <div>{item.pname}</div>
                                <div>{item.price}</div>
                            </div>
                            <div className="flex justify-center text-2xl">
                                <button
                                    className="rounded-lg bg-orange-200 p-4 m-3"
                                    onClick={() => handleClickQty(item.pno, 1)}
                                >
                                    +
                                </button>

                                <p className="m-2 text-red-500 p-2">{item.qty}</p>

                                <button className="rounded-lg bg-orange-200 p-4 m-3"
                                    onClick={() => handleClickQty(item.pno, -1)}
                                >
                                    -
                                </button>
                            </div>
                        </li>
                    )}
                </ul>

                <div className="bg-pink-700 text-5xl ">
                    TOTAL {getTotal(items)}
                </div>

            </div>

        </div>

    );
}

export default Kiosk;