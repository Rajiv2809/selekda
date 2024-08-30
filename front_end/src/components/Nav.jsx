import React from 'react'
import Logo from '../assets/Vector.png'
export default function Nav() {
    return (
        <nav>
            <img src={Logo} alt="" width="70" height="70"/>
                <div class="nav-list">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>BLOGS</li>
                    <li>PORTIFOLIOS</li>
                </div>
                <button>Sign Up</button>
        </nav>
    )
}
