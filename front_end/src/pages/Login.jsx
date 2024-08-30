import React, { useState } from 'react'
import { useStateContext } from '../contexts/Context';
import '../assets/login.css'
import axiosClient from '../axios';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {showToast, setToken} = useStateContext();
    const login = (e) => {
      e.preventDefault();
      axiosClient.post('/login',{
            username: username,
            password: password,
            }).then(({data}) => {
            setToken(data.token)
            showToast('login success');
        }).catch((err) => {
            showToast(err.response.data.message, 'red');
        })
    }
  return (
    <form method='post' onSubmit={login}>
        <input value={username} onInput={e => setUsername(e.target.value)} type="text" placeholder="Username"/>
        <input value={password} onInput={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
        <input  type="submit" value="Login"/>
        <a href="/register">Register</a>
    </form>
  )
}