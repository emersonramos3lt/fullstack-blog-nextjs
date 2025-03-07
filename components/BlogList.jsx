import { blog_data } from '@/assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';

const BlogList = () => {

    const [menu, setMenu] = useState("All");
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs);
        console.log(response.data.blogs);
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

  return (
    <div>
        <div className='flex justify-center gap-6 sm:gap-8 my-10'>
            <button onClick={()=> setMenu('All')} className={menu==="All" ? 'text-blue-700 rounded-full bg-blue-100 px-2 py-1.5':""}>All</button>
            <button onClick={()=> setMenu('Technology')} className={menu==="Technology" ? 'text-blue-700 rounded-full px-2 py-1.5 bg-blue-100':""}>Technology</button>
            <button onClick={()=> setMenu('Startup')} className={menu==="Startup" ? 'text-blue-700 rounded-full px-2 py-1.5 bg-blue-100':""}>Startup</button>
            <button onClick={()=> setMenu('Lifestyle')} className={menu==="Lifestyle" ? 'text-blue-700 rounded-full px-2 py-1.5 bg-blue-100':""}>Lifestyle</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blogs.filter((item)=> menu==="All"?true:item.category===menu ).map((item, index) => {
                return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
            })}
        </div>
    </div>
  )
}

export default BlogList