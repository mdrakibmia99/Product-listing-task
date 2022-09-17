import React, { useEffect, useState } from 'react';
import ProductTable from '../Table/ProductTable';
const Header = () => {
    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    const [searchProduct, setSearchProduct] = useState('')
    const [filterProduct, setFilterProduct] = useState([]);
    const [category, setCategory] = useState('Category');
    const [size, setSize] = useState('Size')

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setAllProducts(data))


    }, [])

    useEffect(() => {
        if (category === 'Category' && size === "Size") {
            setProducts(allProducts)
            setFilterProduct(allProducts)
        } else if (category !== 'Category' && size === "Size") {
            const selectProduct = allProducts.filter((product) => product.category.toLowerCase().includes(category.toLowerCase()));
            setProducts(selectProduct);
            setFilterProduct(selectProduct)
        } else if (category === 'Category' && size !== "Size") {
            const selectProduct = allProducts.filter((product) => product.size.toLowerCase().includes(size.toLowerCase()));
            setProducts(selectProduct)
            setFilterProduct(selectProduct)
        } else if (category !== 'Category' && size !== "Size") {
            const selectProduct = allProducts.filter((product) => product.category.toLowerCase().includes(category.toLowerCase())
                &&
                product.size.toLowerCase().includes(size.toLowerCase()));
            setProducts(selectProduct);
            setFilterProduct(selectProduct)
        }
        if (searchProduct !== '') {
            const selectProduct = filterProduct.filter((product) => product.name.toLowerCase().includes(searchProduct.toLowerCase()));
            setProducts(selectProduct);

        }


    }, [allProducts, category, searchProduct, size])


    return (
        <div className=''>
            <div className='container flex  justify-between mx-auto shadow-lg py-4 lg:px-0 px-4 rounded-sm lg:flex-row md:flex-row flex-col'>
                {/* header right select choice and size */}
                <div className='header-left flex items-center gap-x-4  pl-5'>
                    <div className='dress-choice'>
                        <select
                            defaultValue={category}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="select select-bordered select-sm w-full max-w-xs rounded-sm">
                            <option value={category} disabled selected>{category}</option>
                            <option>apparel</option>
                            <option>footwear</option>
                            <option>sportswear</option>
                            <option>traditional</option>
                            <option>fabric</option>
                            <option>haute</option>

                        </select>
                    </div>
                    <div className='size-choice'>
                        <select
                            defaultValue={size}
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="select select-bordered select-sm w-full max-w-xs rounded-sm">
                            <option value={size} disabled selected>{size}</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>
                    <div>
                        <button
                            className="btn btn-sm text-[#009ebe] rounded-sm flex gap-x-2 bg-white"
                            onClick={() => {
                                setCategory("Category");
                                setSize("Size");
                                setSearchProduct('');
                            }}
                        >
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                    />
                                </svg>
                            </span>
                            <span>Reset</span>
                        </button>
                    </div>
                </div>

                {/* header right search and add to cart part        */}
                <div className="flex flex-row mt-5 lg:mt-0 md:mt-0 gap-x-4 lg:gap-y-0 md:gap-y-0 gap-y-4 pr-5">
                    {/* search filter */}
                    <div className="flex items-center gap-x-2">
                        <span className="font-medium lg:block md:block hidden">Search:</span>
                        <input
                            onChange={(e) => setSearchProduct(e.target.value)}
                            type="text"
                            value={searchProduct}
                            placeholder="Enter product name"
                            className="input input-bordered rounded-sm input-md max-w-xs"
                        />
                    </div>

                    {/* add to cart */}
                    <div>
                        <button className="btn text-white lg:px-8 md:px-8 px-3 bg-[#00a0c0] border-0 rounded-sm whitespace-nowrap">Add to cart</button>
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