import React from 'react'
import { useStateContext } from '../contexts/Context'
import { Navigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Bannertable from '../components/Bannertable';
import BlogTable from '../components/BlogTable';
import PortofolioTable from '../components/PortofolioTable';

import '../assets/Sidebar.css'
import ListPortofolios from '../components/ListPortofolios';

export default function Dashboard() {
  const { currentUser, loading } = useStateContext();

  console.log();

  if (currentUser.role == 'user') {
    <Navigate to='/home' />
  }
  return (
    <>
      <div className='dashboard-content'>
        <SideBar />
        <div className='dashboard-item'>
          <div className="nav-sidebar">
            <div></div>
            <div className="search-dashboard">
              <section class="searchs">
                <input className='search-input' type="text" />
                <button className='search-button'>SEARCH</button>
              </section>
            </div>
            <div className="profile">
              {/* {!loading && (
                <img src={`${import.meta.env.VITE_BASE_URL}${currentUser.profile_picture}`} alt="" />
              )} */}
            </div>
          </div>
          <div className='isi-dashboard'>

            <Bannertable />
            <BlogTable/>
            <PortofolioTable/>
          </div>
        </div>
      </div>
    </>
  )
}
