import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({setCategory}) => {
    const dispatch = useDispatch()
    const {categories} = useSelector(state => state.categories) // Reduxu bir hook gibi kullanırken bu iki methodu kullanırız
    useEffect(() => {
        dispatch(getCategories())
    },[dispatch])
    return(
        <div className="w-1/6 bg-gray-100 p-5 max-h-screen">
            <div className=" font-bold text-xl pb-2 px-2 border-b">KATEGORİ</div>
            {
                categories?.map((category,i) => (
                    <div onClick={() => setCategory(category)} className="text-lg cursor-pointer hover:bg-red-200 p-2" key={i}>{category}</div>
                ))
            }
        </div>
    )
}

export default Category