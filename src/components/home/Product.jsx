import React from "react";
import { useNavigate } from "react-router-dom";

const Product = (product) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`products/${product?.product.id}`)} className=" w-[315px] p-3 m-2 px-5 border-gray-200 border rounded-md relative cursor-pointer">
            <div className="text-2xl font-bold absolute rounded-md top-0 right-0 bg-slate-500 text-white p-2 m-1">
                {product.product.price}
                <span className="text-sm">TL</span>
            </div>
            <img className="w-[200px] h-[200px] object-cover m-auto" src={product?.product.image} alt=""></img>
            <div className="text-lg font-bold text-center mt-3">{product?.product.title}</div>
        </div>
    )
}

export default Product