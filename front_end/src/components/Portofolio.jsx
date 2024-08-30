import React from 'react'
import image from '../assets/MEDIA_FILES/IMAGES/images (3).jpg'
export default function Portofolio() {
  return (
    <section class="portofolios">
        <img src={image} width="591" height="822" alt=""/>
        <div>
            <p>
            <h1>Webtech ID</h1>
            <br/>

            Creating Fluid Web Experiences
            At Wet Tech ID, we specialize in crafting web designs that flow seamlessly, just like water. Our approach
            ensures that every website is adaptable, responsive, and visually striking, ensuring the best user
            experience across all devices.
            From the initial design concept to the final implementation, we focus on fluid aesthetics and dynamic
            functionality. Our recent projects include:



            </p>

            <ul>
                <li>
                    AquaNow - A modern e-commerce site for water sports equipment, featuring immersive, water-themed
                    animations.
                </li>
                <li>
                    FlowFit - A fitness app with a sleek, flowing interface that adapts perfectly to mobile and desktop
                    environments.
                </li>
                <li>
                    BlueWave Agency - A digital marketing agency website that uses gentle motion and liquid-like
                    transitions to
                    create a captivating user journey.
                </li>
            </ul>
            <p>With Wet Tech ID, we aim to transform the web into a fluid, adaptable environment where form meets
                function in perfect harmony.</p>
        </div>
    </section>
  )
}
