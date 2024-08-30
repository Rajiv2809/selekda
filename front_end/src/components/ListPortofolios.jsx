import React, { useEffect, useState } from 'react'
import '../assets/portofolios.css'
import axiosClient from '../axios';
export default function ListPortofolios() {
    const [portofolios, setPortofolios] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axiosClient.get('/portofolio').then(({ data }) => {
            setPortofolios(data.portofolios);
            setLoading(false)

        }).catch((err) => {
            console.log(err);

        })
    }, [])
    return (
        <>


            {!loading && portofolios.length > 0 && portofolios.map((item, index) => (
                <div key={index} class="portofolio">
                    <div class="portofolio-content">
                        <img src={`http://127.0.0.1:8000/storage/${item.portofolio_image}`} width="309" height="185" alt="" />

                        <div class="portofolio-text">
                            <h4>{item.portofolio_title} </h4>
                            <p>{item.description}
                            </p>
                        </div>
                        <div class="stats">
                            <h4>Author: {item.author}</h4>
                            <div class="views">

                                <div class="views">
                                    <span>&#128065; 1200</span>
                                </div>
                                <div class="likes">
                                    <span>&#128077; 1200</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
