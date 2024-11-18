import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Blog from './Blogs/Blog.jsx'
import SingleBlog from './Blogs/SingleBlog.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/blog',
    element:<Blog/>,
  },
  {
    path:'/blog/:id',
    element:<SingleBlog/>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
