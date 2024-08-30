import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/Context';

import Toast from '../components/Toast';
export default function GuestLayout() {
  const {userToken } = useStateContext();
  if (userToken) {
    return <Navigate to="/home" />;
  }
  return (
    <>
    <Toast/>
      <Outlet/>
    </>
  )
}
