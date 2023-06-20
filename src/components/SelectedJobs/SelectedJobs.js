import React from 'react';
import image from '../../assets/icons/minus.png';

const SelectedJobs = (props) => {
    return (
        <div>
            <button onClick={()=>props.removeJobsHandler(props.job)} className='py-2 px-3 my-1 mr-3 rounded-xl bg-[#E6EBE3] hover:bg-[#3F8825] focus:bg-[#3F8825]'> {props.job}<img className='inline ml-2' src={image} alt="icon" /></button>
        </div>
    );
};

export default SelectedJobs;