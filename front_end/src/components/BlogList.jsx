import React, { useEffect, useState } from 'react'
import axiosClient from '../axios'
import '../assets/blog.css'
export default function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axiosClient.get('/blog').then(({ data }) => {
            setBlogs(data.blogs);
            setLoading(false)
        }).catch((err) => {
            console.log(err);

        })
    }, [])
    return (
        <>
            {!loading && blogs.length > 0 && blogs.map((item, index )=> (
                <div key={index} class="blog">
                    <div class="author">
                        <h4><b>Author : {item.author}</b></h4>
                    </div>
                    <div class="content">
                        <img src={`http://127.0.0.1:8000/storage/${item.blog_image}`} alt="" width="472" height="321" />
                        <div class="text-blog">
                        <h1>{item.blog_title}</h1>

                            <p>{item.description}
                            </p>

                            <b>{item.date}</b>
                            <div class="info">
                                <h5>Comment: 12k</h5>
                                <h5>views : 12k</h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}
