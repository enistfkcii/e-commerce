import React, { useEffect } from "react"
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
const NavbarRight = () => {
    const dispatch = useDispatch()
    const {carts} = useSelector(state => state.carts)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCartTotal())
    },[dispatch])

    console.log(carts,"cartDetail");

    return (
        <div className="flex items-center gap-8">
            <div className="flex items-center border p-3 rounded-xl">
                <input value="" className=" outline-none" type="text" placeholder="Arama Yapınız..."></input>
                <FaSearch size={25}></FaSearch>
            </div>
            <FaRegHeart size={25}></FaRegHeart>
            <div onClick={() => navigate("cart")} className="relative">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 items-center justify-center flex">{carts?.length}</div>
                <SlBasket size={25}></SlBasket>
            </div>
        </div>
    )
}

export default NavbarRight