import React from 'react'
import image1 from '../assets/MEDIA_FILES/IMAGES/images (17).jpg'
export default function Service() {
  return (
    <>
    <section class="service">
        <h1>
            service
        </h1>
        <div>
            <img src={image1} width="377" height="243" alt=""/>
            <p>Consultation and Customization Wet Tech ID offers expert consultation to help you design and implement
                water management systems that are efficient, cost-effective, and environmentally friendly. We provide
                customized solutions that align with your operational goals and sustainability initiatives.</p>
            <p>Sustainable Irrigation Solutions Designed for agricultural sectors, our irrigation solutions promote
                water conservation while enhancing crop yield. We implement intelligent irrigation systems that adjust
                water delivery based on soil moisture, weather conditions, and plant needs.</p>
            <img src={image1} width="377" height="243" alt=""/>
        </div>
    </section>

    </>
  )
}
