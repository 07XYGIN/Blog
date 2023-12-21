import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import router from './Router/route'
import { RouterProvider} from 'react-router-dom'
import RouterView from "react-router-waiter";
import './main.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense>
    <RouterProvider router={router}></RouterProvider>
  </Suspense>
)
