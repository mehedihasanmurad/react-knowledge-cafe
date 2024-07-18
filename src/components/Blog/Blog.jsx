import React from 'react';
import PropTypes from 'prop-types'; 

const Blog = ({blog}) => {
    // console.log(blog)
    const{cover,author_img,reading_time,author,posted_date,title,hashtags} = blog;
    return (
        <div>
            <div>
                <img src={cover} alt="" />
            </div>

            <div className='flex justify-between items-center'>
                <div className='flex mt-4 mb-4'>
                    <div >
                        <img className='rounded-full h-16' src={author_img} alt="" />
                    </div>
                    <div className='mt-2 pl-4'>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h3>{title}</h3>
            <p>
                {
                    hashtags.map(hash => <span className='mr-7'><a href="">#{hash}</a></span> )
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;