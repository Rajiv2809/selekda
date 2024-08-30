import React, { useEffect, useState } from 'react';
import '../assets/portfolio.css';
import axiosClient from '../axios';

export default function PortfolioTable() {
    const [portfolios, setPortfolios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosClient.get('/portofolio')
            .then(({ data }) => {
                setPortfolios(data.portofolios);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.response.data.message);
            });
    }, []);

    const onDelete = (id) => {
        axiosClient.delete(`/portofolio/${id}`)
            .then(({ data }) => {
                const newPortfolios = portfolios.filter(item => item.id !== id);
                setPortfolios(newPortfolios);
                console.log(data.message);
            })
            .catch((err) => {
                console.log(err.response.data.message);
            });
    };

    return (
        <div className="portfolio-container">
            <h2 className="portfolio-heading">Portfolio Information</h2>
            <a className="button-update" href="/add-portfolio">Add New Portfolio</a>
            <table className="portfolio-table">
                <thead className="portfolio-table-head">
                    <tr>
                        <th className="portfolio-table-header">ID</th>
                        <th className="portfolio-table-header">Title</th>
                        <th className="portfolio-table-header">Image</th>
                        <th className="portfolio-table-header">Description</th>
                        <th className="portfolio-table-header">Author</th>
                        <th className="portfolio-table-header">Action</th>
                    </tr>
                </thead>
                <tbody className="portfolio-table-body">
                    {!loading && portfolios.length > 0 && portfolios.map((item) => (
                        <tr className="portfolio-table-row" key={item.id}>
                            <td className="portfolio-table-cell">{item.id}</td>
                            <td className="portfolio-table-cell">{item.portofolio_title}</td>
                            <td className="portfolio-table-cell">
                                <img className="img-portfolio" src={`${import.meta.env.VITE_STORAGE_URL}/${item.portofolio_image}`} alt={item.portofolio_title} />
                            </td>
                            <td className="portfolio-table-cell">{item.description}</td>
                            <td className="portfolio-table-cell">{item.author}</td>
                            <td className="portfolio-table-cell">
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
