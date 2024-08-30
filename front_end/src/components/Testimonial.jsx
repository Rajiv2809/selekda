import React from 'react'
import image from '../assets/MEDIA_FILES/IMAGES/images (5).jpg'
export default function Testimonial() {
    return (
        <section className="testimonial">
            <div className="kotak">
                <img src={image} width="377" height="243" alt="" />
                <p>
                    "Working with Wet Tech ID has been an absolute pleasure. They transformed our vision into a stunning,
                    responsive website that perfectly reflects our brand. The wet design concept really brought our site to
                    life, making it dynamic and engaging. Our customers love the smooth user experience!"
                </p>
            </div>
            <div className="segitiga"></div>
        </section>
    )
}
