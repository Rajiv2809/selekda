import React from 'react'
import image1 from '../assets/MEDIA_FILES/IMAGES/images (2).jpg'
export default function About() {
  return (
    <>
      <section class="about">
        <div class="text">
            <p>
                Wet Tech ID is at the forefront of water technology, providing innovative
                solutions to tackle global water challenges. Our website serves as a hub
                for information, research, and products focused on sustainable water
                management and advanced technologies that promote water efficiency,
                conservation, and purification.
                Wet Tech ID is at the forefront of water technology, providing innovative
                solutions to tackle global water challenges. Our website serves as a hub
                for information, research, and products focused on sustainable water
                management and advanced technologies that promote water efficiency,
                conservation, and purification.
                <br />
                <br />
                Wet Tech ID is at the forefront of water technology, providing innovative
                solutions to tackle global water challenges. Our website serves as a hub
                for information, research, and products focused on sustainable water
                management and advanced technologies that promote water efficiency,
                conservation, and purification.
            </p>
            <button>
                Learn more 
            </button>
        </div>
        <div class="image">
            <img src={image1} alt="" width="570" height="418"/>
        </div>
    </section>
    </>
  )
}
