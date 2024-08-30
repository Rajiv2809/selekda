import React from 'react'
import { useStateContext } from '../contexts/Context'
import '../assets/toast.css'
export default function Toast() {
    const {toast} = useStateContext()
  return (
    <>
    {toast.show && (
        <div className='toast' style={{backgroundColor: 'blue'}}>{toast.message}</div>
    )}
    
    </>
    // <div className='toast'>Toast</div>
     )
}
