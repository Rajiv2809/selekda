import React, { useEffect } from 'react'
import axiosClient from '../axios'
import { useStateContext } from '../contexts/Context';
import { Navigate, Outlet } from 'react-router-dom';
import Toast from '../components/Toast';



export default function DefaultLayout() {
  const {showToast, setToken, userToken, setCurrentUser, currentUser, setLoading} = useStateContext();
  useEffect(() => {
    axiosClient.get('/me').then(({data}) => {
      setCurrentUser(data)
      setLoading(false)
    }).catch(({res}) => {
      showToast(res.data.message, 'red')
    })

    
  },[])
  
  if(!userToken){
    return <Navigate to="/login" />
  }
  return (
    <div>
      <Toast/>
      <Outlet/>
    </div>
  )
}
