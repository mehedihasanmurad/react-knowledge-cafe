import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 pl-6">
            <h2 className='text-4xl'>Bookmarks list</h2>
            {
                bookmarks.map(bookmark => <Bookmark bookmark = {bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;