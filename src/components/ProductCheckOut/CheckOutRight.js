import React from 'react';

const CheckOutRight = () => {
    return (
        <section className="mx-auto">
            <div className="card w-96 bg-base-100 shadow-2xl rounded">
                <div className="card-body">
                    <h2 className="card-title flex justify-between items-center">
                        <span>Cart totals</span>
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
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                            </svg>
                        </span>
                    </h2>
                    <div className="my-4">
                        {/* subtotal */}
                        <div className="flex justify-between">
                            <span className="font-medium">Subtotal</span>
                            <span>$101.00</span>
                        </div>

                        <hr className="my-2" />

                        {/* total */}
                        <div className="flex justify-between">
                            <span className="font-medium text-xl">Total</span>
                            <span>$101.00</span>
                        </div>
                    </div>
                    <div className="card-actions justify-center">
                        <button
                            className="btn btn-wide text-white bg-[#1c3eaa] rounded-3xl border-0"

                        >
                            Proceed to checkout
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckOutRight;