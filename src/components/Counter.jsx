import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
        <div className='max-w-[85%] mx-auto mt-20'>
        <h1 className='mb-10'>Counter App</h1>
        <button className='bg-cyan-500 p-10' onClick={()=>  setCounter(counter+1)}>Increase</button>
        <button className='bg-cyan-500 p-10 ml-5' onClick={()=> setCounter(counter-1)}>Decrease</button>

        <h1 className='mt-10'>Counter: {counter}</h1>
    </div> 
        </div>
    );
};

export default Counter;