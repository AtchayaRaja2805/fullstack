import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from './pages/home.jsx';
import Spinner from '/Users/atchayaraja/frontend/src/assets/components/spinner.jsx';
const LazyLogin = lazy(() => import('/Users/atchayaraja/frontend/src/pages/login.jsx'));
const LazySignup = lazy(() => import('/Users/atchayaraja/frontend/src/pages/SignUp.jsx'));
const LazyStudent = lazy(() => import('/Users/atchayaraja/frontend/src/pages/Student.jsx'));
// const LazyAbout = lazy(() => import('/Users/atchayaraja/frontend/src/pages/about.jsx'));
function App() {
  const router= createBrowserRouter([
    {
      path: '/home',
      element:<Suspense fallback={<Spinner/>}><Home/></Suspense>
    },
    {
      path:'/login',
      element:<Suspense fallback={<Spinner/>}><LazyLogin/></Suspense>
    }
    ,
    {
      path:'/signup',
      element:<Suspense fallback={<Spinner/>}><LazySignup/></Suspense>
    },
    {
      path:'/student',
      element:<Suspense fallback={<Spinner/>}><LazyStudent/></Suspense>
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
    
  )
}
export default App