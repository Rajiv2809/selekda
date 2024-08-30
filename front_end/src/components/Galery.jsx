import React from 'react'
import image1 from '../assets/MEDIA_FILES/IMAGES/images (12).jpg'
import image2 from '../assets/MEDIA_FILES/IMAGES/images (1).jpg'
import image3 from '../assets/MEDIA_FILES/IMAGES/images (11).jpg'
export default function Galery() {
    return (
        <div className="galery">
            <div>
                <img src={image1} alt="" width="377" height="243" />
                <p>⭐ 4.9</p>

            </div>
            <div>
                <img src={image2} width="377" height="243" alt="" />
                <p>⭐ 4.9</p>

            </div>
            <div>
                <img src={image3} width="377" height="243" alt="" />
                <p>⭐ 4.9</p>

            </div>
        </div>
    )
}
