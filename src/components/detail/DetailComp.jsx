import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = (productDetail) => {
    const dispatch = useDispatch()
    const [quantity,setQuantity] = useState(0)

    const decrement = () => {
        if(quantity != 0) {
        setQuantity(quantity-1)
        }      
    }

    const increment = () => {
        if(quantity < productDetail?.productDetail.rating.count){
            setQuantity(quantity+1)
        }        
    }
    const addBasket = () => {
        dispatch(addToCart({id : productDetail?.productDetail.id , title : productDetail?.productDetail.title , image : productDetail?.productDetail.image , 
        price : productDetail?.productDetail.price , quantity : quantity }))
    }

    return (
        <div className="flex gap-48">
            <img className="w-[400px] h-[400px] object-cover" src={productDetail?.productDetail.image} alt=""></img>
            <div className="">
                <div className="text-3xl font-bold">{productDetail?.productDetail.title}</div>
                <div className="mt-4">{productDetail?.productDetail.description}</div>
                <div className="text-lg text-red-500">Raiting : {productDetail?.productDetail.rating?.rate}</div>
                <div className="text-lg text-red-500">Count : {productDetail?.productDetail.rating?.count}</div>
                <div className="text-3xl font-bold">{productDetail?.productDetail.price} <span className="text-sm">TL</span></div>
                <div className="flex gap-5 items-center my-4 w-[112px] bg-gray-300">
                    <div onClick={decrement} className="text-5xl cursor-pointer hover:bg-red-300 text-white bg-red-400">-</div>
                    <input className="text-4xl font-bold text-center w-12 bg-transparent" type="text" value={quantity}></input>
                    <div onClick={increment} className="text-5xl cursor-pointer hover:bg-red-300 text-white  bg-red-400">+</div>
                </div>
                <div onClick={addBasket} className="border w-[200px] my-4 bg-red-400 text-white h-16 flex items-center justify-center rounded-md cursor-pointer hover:bg-red-300">Sepete Ekle</div>
            </div>
        </div>
    )
}

export default DetailComp