import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartComp = (cart) => {
    const dispatch = useDispatch()
    return (
        <div className="my-10 flex items-center justify-between">
            <img className="w-[150px] h-[150px] object-cover" src={cart?.cart.image}></img>
            <div className="w-[300px]">
                <div className="text-xl">{cart?.cart.title}</div>
                <div>{cart?.cart.description}</div>
            </div>
            <div className="font-bold text-2xl">{cart?.cart.price}<span className=" text-sm">TL</span></div>
            <div>{cart?.cart.quantity}</div>
            <div onClick={() => dispatch(removeFromCart(cart?.cart.id))} className="bg-red-500 rounded-md text-white w-[200px] h-16 flex items-center justify-center text-2xl cursor-pointer">Ürünü Kaldır</div>
        </div>
    )
}

export default CartComp