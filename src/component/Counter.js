import React from 'react'

import { useSelector } from 'react-redux';
const Counter = () =>{
    const count=useSelector((state) =>state.counter)
    return(
        <div>
            <h2>{count}</h2>
        </div>
    )
};
export default Counter;