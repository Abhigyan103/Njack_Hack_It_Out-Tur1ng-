import React from 'react'
import { NavLink } from 'react-router-dom';

const SuggestiveBlog = ({ blog }) => {
    console.log(blog)
    const BtnStyle = {
        color: '#fff',
        padding: '5px 10px',
        width: '65px',
        borderBottom: 'none',
        borderRadius: '6px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        cursor: 'pointer',
        border: "none",
        outline: "none",
    }
    return (
        <>
            <div className='content__pick'>
                <div className='content__author'><span style={{ fontWeight: 'bold' }}></span><span className='suggestive__content__author__name'>{blog.author}</span></div>
                <div className='content__description'>{blog.description.length > 100 ? blog.description.slice(0, 100) + '...' : blog.description}</div>
                <NavLink name='read__more__btn' to={`/blog/${blog._id}`} className='read__more__btn' style={{ ...BtnStyle, backgroundColor: "#2d2c39", fontSize: '.8rem', width: '95px', textDecoration: 'none' }} >READ MORE</NavLink>
            </div>
        </>
    )
}

export default SuggestiveBlog;