import React from 'react'
import logo1 from '../assets/MEDIA_FILES/SOCIAL_MEDIA/Black and White/facebook.png'
import logo2 from '../assets/MEDIA_FILES/SOCIAL_MEDIA/Black and White/reddit.png'
import logo3 from '../assets/MEDIA_FILES/SOCIAL_MEDIA/Black and White/youtube.png'
export default function Footer() {
  return (
    <footer>
    <div class="logo">
        <img src={logo1} alt=""/>
        <img src={logo2} alt=""/>
        <img src={logo3} alt=""/>
    </div>
    <div class="design">design by : RAJIV</div>

</footer>
  )
}
