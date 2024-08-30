import React from 'react'
import { useStateContext } from '../contexts/Context'
import { Navigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Nav from '../components/Nav';

export default function Dashboard() {
  const { currentUser,loading } = useStateContext();
  
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
            <div className="search-dashboard"></div>
            <div className="profile">
              {!loading && (
                <img src={`${import.meta.env.VITE_BASE_URL}${currentUser.profile_picture}`} alt="" />
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
