/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { removeFromCart } from "../../utilities/useCart";
const CheckOutTable = () => {
    const [products,setProducts]=useState([]);
    const [deleteProduct,setDeleteProduct]=useState('')
    useEffect(()=>{
        const product = JSON.parse(localStorage.getItem("ProductListingCart"));
        setProducts(product)
    },[deleteProduct])
  
    return products?.map((product) => (
        <tr key={product._id} className="hover">
            <th>
                <span
                    className="tooltip tooltip-right"
                    data-tip="Remove from Cart"
                    onClick={() =>{
                        removeFromCart(product._id);
                        setDeleteProduct(product._id)

                    }}
                    role={"button"}
                >
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
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </span>
            </th>
            <th>
                <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="max-w-full w-12 shadow rounded-md p-1 object-cover"
                />
            </th>
            <td>{product.name}</td>
            <td>
                <span className="flex gap-x-2">
                    <span>$</span>
                    <span>{product.price}</span>
                </span>
            </td>
            <td>{product.quantity}</td>
            <td>
                <span className="flex gap-x-2">
                    <span>$</span>
                    <span>{product.price * product.quantity}</span>
                </span>
            </td>
        </tr>
    ));

};

export default CheckOutTable;