import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 mt-3 p-4 ml-3">
            <div>
                <h1 className="text-2xl text-center border border-indigo-600 rounded-xl p-4 mb-3 text-blue-800">Spent time on read : {readingTime} min</h1>
            </div>
            <h2 className='text-4xl text-center'>Bookmarks list {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark bookmark = {bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;