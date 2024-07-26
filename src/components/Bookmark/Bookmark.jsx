import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 mt-6 rounded-xl'>
            <p className='text-3xl'>title : {title}</p>
        </div>
    );
};

export default Bookmark;