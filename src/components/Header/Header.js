import React, { useEffect, useState } from 'react';
import ProductTable from '../Table/ProductTable';
const Header = () => {
const [products,setProducts]=useState([])
useEffect(()=>{
    fetch("/products.json")
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])
console.log(products,"json products");
  
    return (
        <div className=''>
            <div className='container flex  justify-between mx-auto shadow-lg py-4 lg:px-0 px-4 rounded-sm '>
                {/* header right select choice and size */}
                <div className='header-left flex items-center gap-x-4  pl-5'>
                    <div className='dress-choice'>
                        <select class="select select-bordered select-sm w-full max-w-xs rounded-sm">
                            <option disabled selected>Choice</option>
                            <option>apparel</option>
                            <option>footwear</option>
                            <option>sportswear</option>
                            <option>traditional</option>
                            <option>fabric</option>
                            <option>haute</option>

                        </select>
                    </div>
                    <div className='size-choice'>
                        <select class="select select-bordered select-sm w-full max-w-xs rounded-sm">
                            <option disabled selected>Size</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>
                    <div>
                        <button>Reset</button>
                    </div>
                </div>

                {/* header right search and add to cart part        */}
                <div className="flex lg:flex-row md:flex-row flex-col gap-x-4 lg:gap-y-0 md:gap-y-0 gap-y-4 pr-5">
                    {/* search filter */}
                    <div className="flex items-center gap-x-2">
                        <span className="font-medium lg:block md:block hidden">Search:</span>
                        <input
                            type="text"
                            placeholder="Enter product name"
                            className="input input-bordered rounded-sm input-md max-w-xs"
                        />
                    </div>

                    {/* add to cart */}
                    <div>
                        <button className="btn text-white px-8 bg-[#00a0c0] border-0 rounded-sm">Add to cart</button>
                    </div>
                </div>
            </div>

            <div className='container mx-auto mt-3'>
                <ProductTable products={products}></ProductTable>
            </div>
        </div>
    );
};

export default Header;