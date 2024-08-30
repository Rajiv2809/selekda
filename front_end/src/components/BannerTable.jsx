import React, { useEffect, useState } from 'react';
import '../assets/bannerlist.css';
import axiosClient from '../axios';

export default function BannerTable() {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosClient.get('/banner')
            .then(({ data }) => {
                setBanners(data.banner);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.response.data.message);
            });
    }, []);

    const onDelete = (id) => {
        axiosClient.delete(`/banner/${id}`)
            .then(({ data }) => {
                const newBanners = banners.filter(item => item.id !== id);
                setBanners(newBanners);  
                console.log(data.message);  
            })
            .catch((err) => {
                console.log(err.response.data.message);  
            });
    };

    return (
        <div className="banner-container">
            <h2 className="banner-heading">Banner Information</h2>
            <a className='/button-update' href="/add-banner"></a>
            <table className="banner-table">
                <thead className="banner-table-head">
                    <tr>
                        <th className="banner-table-header">ID</th>
                        <th className="banner-table-header">Banner Title</th>
                        <th className="banner-table-header">Banner Image</th>
                        <th className="banner-table-header">Status</th>
                        <th className="banner-table-header">Date</th>
                        <th className="banner-table-header">Action</th>
                    </tr>
                </thead>
                <tbody className="banner-table-body">
                    {!loading && banners.length > 0 && banners.map((item, index) => (
                        <tr className="banner-table-row" key={index}>
                            <td className="banner-table-cell">{item.id}</td>
                            <td className="banner-table-cell">{item.banner_title}</td>
                            <td className="banner-table-cell">
                                <img className="img-banner" src={import.meta.env.VITE_STORAGE_URL + '/' + item.banner_image} alt="" />
                            </td>
                            <td className="banner-table-cell">{item.status}</td>
                            <td className="banner-table-cell">{item.date}</td>
                            <td className="banner-table-cell">
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
