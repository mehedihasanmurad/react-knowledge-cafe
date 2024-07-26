import React from 'react';
import PropTypes from 'prop-types'; 
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({blog,handleBookmarksAdd,handleMarkAsRead}) => {
    // console.log(blog)
    const{id,cover,author_img,reading_time,author,posted_date,title,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <div>
                <img className='w-full' src={cover} alt="" />
            </div>

            <div className='flex justify-between items-center'>
                <div className='flex mt-5'>
                    <div >
                        <img className='rounded-full h-16' src={author_img} alt="" />
                    </div>
                    <div className='pl-4'>
                        <h3 className='font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleBookmarksAdd(blog)} className='ml-3 text-2xl'><IoBookmarkOutline /></button>
                </div>
            </div>
            <h3 className='font-bold mt-5 mb-5'>{title}</h3>
            <p>
                {
                    hashtags.map(hash => <span className='mr-7'><a href="">#{hash}</a></span> )
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;