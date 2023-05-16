import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Layout from './components/Layout.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import About from './pages/About.jsx'
import Hobbies from './pages/Hobbies.jsx'
import Skills from './pages/Skills.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: '/hobbies',
        element: <Hobbies />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
