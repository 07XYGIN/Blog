import { lazy } from 'react'
import { createHashRouter } from 'react-router-dom'

const Index = lazy(() => import('../Page/Index'))
const About = lazy(() => import('../Page/About'))
const Second = lazy(() => import('../Page/Second'))
const Article = lazy(() => import('../Page/Article'))
const Demo = lazy(() => import('../Page/Demo'))
const Note = lazy(() => import('../Page/Note'))
const MySQL= lazy(() => import('../Page/Mysql'))
const Renew = lazy(() => import('../Page/Renew'))
const router = createHashRouter([
  {
    path: '/',
    element: <Index></Index>,
    isExact: true,
    children: [
      {
        index: true,
        element: <Second></Second>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/article',
        element: <Article></Article>
      },
      {
        path: '/demo',
        element: <Demo></Demo>,
      },
      {
        path: '/note',
        element: <Note></Note>
      },
      {
        path: '/renew',
        element: <Renew></Renew>
      },
      {
        path:'/MySQL',
        element:<MySQL></MySQL>
      }
    ]
  }
])
export default router
