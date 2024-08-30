import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextProvider } from './contexts/Context.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
  </React.StrictMode>,
)
