import React from 'react';

const Header = () => {
    return (
        <div className=''>
            <div className='container flex justify-between mx-auto'>
                <div className='header-left flex items-center'>
                    <div className='dress-choice'>
                        <select class="select select-bordered w-full max-w-xs">
                            <option disabled selected>Choice</option>
                            <option>Hoodies</option>
                            <option>Shirt</option>
                        </select>
                    </div>
                    <div className='size-choice'>
                        <select class="select select-bordered w-full max-w-xs">
                            <option disabled selected>Size</option>
                            <option>Sm</option>
                            <option>Lg</option>
                            <option>XL</option>
                        </select>
                    </div>
                    <div>
                        <button>Reset</button>
                    </div>
                </div>
                <div className='header-right flex'>
                
                        <span> Search: <input type="text" placeholder="Type here" class="input input-bordered  max-w-xs" /></span>
                    
                        <button className='btn'>Add to Cart</button>
                   
                </div>
            </div>
        </div>
    );
};

export default Header;