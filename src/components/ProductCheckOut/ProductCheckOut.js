import React, { useState } from 'react';
import CheckOutLeft from './CheckOutLeft';
import CheckOutRight from './CheckOutRight';

const ProductCheckOut = () => {
  const [deleteProduct,setDeleteProduct]=useState(0)
    return (
        <section className="py-4 lg:px-0 md:px-0 px-4">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col justify-between lg:gap-x-4 gap-y-4">
            <CheckOutLeft setDeleteProduct={setDeleteProduct} deleteProduct={deleteProduct}/>
            <CheckOutRight deleteProduct={deleteProduct}/>
          </div>
        </div>
      </section>
    );
};

export default ProductCheckOut;