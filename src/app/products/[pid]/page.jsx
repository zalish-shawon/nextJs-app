import React from 'react';

const SingleProduct = ({params}) => {
    console.log(params.pid);
    return (
        <div>
           <h1>This is a single :{params.pid}</h1>
        </div>
    );
};

export default SingleProduct;