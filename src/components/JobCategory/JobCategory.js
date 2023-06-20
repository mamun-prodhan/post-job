import React, { useState } from 'react';

const JobCategory = (props) => {

    const {title, image} = props.category;

    return (
        <div>
            <button  onClick={()=>props.jobsHandler(title)} className='py-2 px-3 my-1 mr-3 rounded-xl bg-green-600'> {title}<img className='inline' src={image} alt="" /></button>
        </div>
    );
};

export default JobCategory;