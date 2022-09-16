import React from 'react';

const ProductTable = ({ products }) => {
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Buy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) =>
                                <tr key={product._id} className="hover">
                                    <td>
                                        <img
                                            src={product.thumbnail}
                                            alt={product.name}
                                            className="max-w-full w-16 shadow rounded-md p-2 object-cover"
                                        />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.color}</td>
                                    <td>
                                        {product.stock === "In Stock" ? (
                                            <span className="text-green-500 flex gap-x-2">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"
                                                        class="w-6 h-6"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span>In Stock</span>
                                            </span>
                                        ) : (
                                            <span className="text-red-500 flex gap-x-2">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"
                                                        class="w-6 h-6"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span>Out of Stock</span>
                                            </span>
                                        )}
                                    </td>
                                    <td>
                                        <span className="flex gap-x-1">
                                            <span>$</span>
                                            <span>{product.price}</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span className="flex gap-x-4 items-center">
                                            {/* input - cart */}
                                            <span className="flex gap-x-2 items-center">
                                                {/* input */}
                                                <span>
                                                    <input
                                                        type="text"
                                                        placeholder="Quantity"
                                                        className="input input-bordered input-sm max-w-[90px] rounded-sm"
                                                    />
                                                </span>

                                                {/* cart */}
                                                <span className="tooltip w-[90px] bg-[black] py-1 text-white flex justify-center rounded-sm" data-tip="Add to Cart">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"
                                                        class="w-6 h-6"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                                        />
                                                    </svg>
                                                </span>
                                            </span>

                                            {/* checkbox */}
                                            <span className="flex">
                                                <div className="tooltip text-white" data-tip="Select multiple">
                                                    <input type="checkbox" className="checkbox checkbox-sm shadow" />
                                                    {/* <button class="btn">Hover me</button> */}
                                                </div>
                                            </span>
                                        </span>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;