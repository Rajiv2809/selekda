import React from 'react'
import '../assets/Sidebar.css';
import Logo from '../assets/Vector.png'
export default function SideBar() {
  return (
    <>
        <div className='sidebar'>
            <div className="logo-side">
                <img src={Logo} alt=""  />
                <h2>WEBTECH ID</h2>
            </div>
            <div className="list-sidebar">
                <ul>
                    <li>USER</li>
                    <li>Blog</li>
                    <li>PortoFolio</li>
                </ul>
            </div>
        </div>
    
    </>
  )
}
