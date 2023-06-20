import React, { useState } from 'react';

const JobCategory = (props) => {

    const {title, image} = props.category;

    return (
        <div>
            <button onClick={()=>props.jobsHandler(title)} className='py-2 px-3 my-1 mr-3 rounded-xl bg-[#E6EBE3] hover:bg-[#3F8825] focus:bg-[#3F8825]'> {title}<img className='inline ml-2' src={image} alt="" /></button>
        </div>
    );
};

export default JobCategory;