import React from 'react';

const CheckOutLeft = () => {
    return (
        <section className="w-full">
      <div className="overflow-x-auto shadow">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <CheckoutRow />
          </tbody>
        </table>
      </div>
    </section>
    );
};

export default CheckOutLeft;