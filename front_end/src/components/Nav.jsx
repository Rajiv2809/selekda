import React from 'react'
import Logo from '../assets/Vector.png'
import { useStateContext } from '../contexts/Context'
export default function Nav() {
    const {currentUser, loading} = useStateContext()
    
    
    return (
        <nav>
            <img src={Logo} alt="" width="70" height="70"/>
                <div className="nav-list">
                    <li><a href="/home">HOME</a></li>
                    <li>ABOUT</li>
                    <li><a href="/blogs">BLOGS</a></li>
                    <li><a href="/portofolios">PORTIFOLIOS</a></li>
                    {!loading && currentUser.data.role == 'admin' ? <li><a href="/dashboard">DASHBOARD</a></li> : '' }
                </div>
                <button>Profile</button>
        </nav>
    )
}
