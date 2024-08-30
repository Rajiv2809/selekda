import React from 'react'
import { useStateContext } from '../contexts/Context'
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
  const {currentuser} = useStateContext();
  console.log(currentuser);
  
    // if(currentuser.role == 'user'){
    //   <Navigate to='/home'/>
    // }
  return (
  <div>Dashboard</div>
  )
}
