import React, { useEffect, useState } from 'react';
import '../assets/bloglist.css';
import axiosClient from '../axios';

export default function BlogTable() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosClient.get('/blog')
            .then(({ data }) => {
                setBlogs(data.blogs);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.response.data.message);
            });
    }, []);

    const onDelete = (id) => {
        axiosClient.delete(`/blog/${id}`)
            .then(({ data }) => {
                const newBlogs = blogs.filter(item => item.id !== id);
                setBlogs(newBlogs);  
                console.log(data.message); 
            })
            .catch((err) => {
                console.log(err.response.data.message);  
            });
    };

    return (
        <div className="blog-container">
            <h2 className="blog-heading">Blog Information</h2>
            <table className="blog-table">
                <thead className="blog-table-head">
                    <tr>
                        <th className="blog-table-header">ID</th>
                        <th className="blog-table-header">Blog Image</th>
                        <th className="blog-table-header">Blog Title</th>
                        <th className="blog-table-header">Description</th>
                        <th className="blog-table-header">Author</th>
                        <th className="blog-table-header">Tags</th>
                        <th className="blog-table-header">Date</th>
                        <th className="blog-table-header">Action</th>
                    </tr>
                </thead>
                <tbody className="blog-table-body">
                    {!loading && blogs.length > 0 && blogs.map((item, index) => (
                        <tr className="blog-table-row" key={index}>
                            <td className="blog-table-cell">{item.id}</td>
                            <td className="blog-table-cell">
                                <img className="img-blog" src={import.meta.env.VITE_STORAGE_URL + '/' + item.blog_image} alt={item.blog_title} />
                            </td>
                            <td className="blog-table-cell">{item.blog_title}</td>
                            <td className="blog-table-cell">{item.description}</td>
                            <td className="blog-table-cell">{item.author}</td>
                            <td className="blog-table-cell">{item.tags}</td>
                            <td className="blog-table-cell">{item.date}</td>
                            <td className="blog-table-cell">
                                <button className="button-delete" onClick={() => onDelete(item.id)}>Delete</button>
                                <button className="button-update">Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
