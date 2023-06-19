import React from 'react';

const FakeData = (props) => {
    return (
        <div>
            <button className='py-2 px-3 my-1 mr-3 rounded-xl bg-green-600'>{props.job}</button>
        </div>
    );
};

export default FakeData;