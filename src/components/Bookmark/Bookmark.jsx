import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <p>title : {title}</p>
        </div>
    );
};

export default Bookmark;