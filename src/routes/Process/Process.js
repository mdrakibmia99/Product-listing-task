import React from 'react';
import { useNavigate } from 'react-router-dom';

const Process = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h1 className='text-5xl font-bold '>Thank you!!</h1>
            <button
            onClick={()=>navigate("/home")}
             className="btn text-white lg:px-8 md:px-8 px-3 bg-[#00a0c0] border-0  whitespace-nowrap mt-5 rounded-md"> Home</button>
        </div>
    );
};

export default Process;