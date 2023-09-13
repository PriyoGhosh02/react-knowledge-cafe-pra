import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({ handelAddToBookmark, handelMarkAsRead }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length} </h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handelMarkAsRead={handelMarkAsRead}
                    handelAddToBookmark={handelAddToBookmark}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handelAddToBookmark: PropTypes.func.isRequired,
    handelMarkAsRead: PropTypes.func.isRequired
}

export default Blogs;