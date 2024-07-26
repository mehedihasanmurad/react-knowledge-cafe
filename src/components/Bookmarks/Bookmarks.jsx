import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 mt-3 p-4 ml-3">
            <div>
                <h1 className="text-2xl">Reading Time : {readingTime}</h1>
            </div>
            <h2 className='text-4xl text-center'>Bookmarks list {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark bookmark = {bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;