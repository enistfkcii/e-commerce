import SliderComp from "../components/home/SliderComp"
import Sorting from "../components/home/Sorting"
import Category from "../components/home/Category"
import Products from "../components/home/Products"
import { useState } from "react"
import React from "react"
import PropTypes from 'prop-types';


const Home = () => {

      

    const [sort,setSort] = useState('')
    const [category,setCategory] = useState('')
    

    return(
        <div>
            <SliderComp></SliderComp>
            <Sorting setSort = {setSort}></Sorting>
            <div className="flex">
                <Category setCategory={setCategory}></Category>
                <Products category={category} sort={sort}></Products>
            </div>
        </div>
    )
}

export default Home