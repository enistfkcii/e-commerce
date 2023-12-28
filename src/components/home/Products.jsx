import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts, getProducts } from "../../redux/productSlice";
import Product from "./Product";
import Loading from "../Loading";
import ReactPaginate from "react-paginate";

const Products = ({category,sort}) => {
    const dispatch = useDispatch()
    const {products,productsStatus} = useSelector(state => state.products)
    const itemsPerPage = 6

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };
    useEffect(() => {
        if(category.category){
            dispatch(getCategoryProducts(category.category))
        }
        else{
            dispatch(getProducts())
        }
        
    },[dispatch,category])
    return(
        <div>
            {
                productsStatus == "LOADING" ? <Loading></Loading> : 
                <>
                    <div className=" -mt-2 flex flex-wrap">
                    {
                        currentItems?.sort((a,b) => sort == "inc" ? a.price-b.price : sort == "dec" ? b.price-a.price : null).map((product,i) => (
                            <Product key={i} product={product}></Product>
                        ))
                    }
                    </div>
                    <ReactPaginate
                    className="paginate"
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    />
                </>


            }
        </div>
    )
}

export default Products