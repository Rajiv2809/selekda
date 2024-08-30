import React, { useEffect } from 'react'
import axiosClient from '../axios'
import { useStateContext } from '../contexts/Context';
import { Navigate } from 'react-router-dom';



export default function DefaultLayout() {
  const {showToast, setToken, userToken, setCurrentUser, currentUser} = useStateContext();
  useEffect(() => {
    axiosClient.get('/me').then(({data}) => {
      setCurrentUser(data)
    }).catch(({res}) => {
      showToast(res.data.message, 'red')
    })
  },[])
  if(!userToken){
    return <Navigate to="/login" />
  }
  return (
    <div>DefaultLayout</div>
  )
}
