import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from './pages/home.jsx';
import Spinner from '/Users/atchayaraja/frontend/src/assets/components/spinner.jsx';
const LazyLogin = lazy(() => import('/Users/atchayaraja/frontend/src/pages/login.jsx'));
const LazySignup = lazy(() => import('/Users/atchayaraja/frontend/src/pages/SignUp.jsx'));
const LazyStudent = lazy(() => import('/Users/atchayaraja/frontend/src/pages/Student.jsx'));
const LazyViewInstitute = lazy(() => import('/Users/atchayaraja/frontend/src/pages/view-institute.jsx'));
const LazyPayment = lazy(() => import('/Users/atchayaraja/frontend/src/pages/payment.jsx'));
const LazyPaymentHistory = lazy(() => import('/Users/atchayaraja/frontend/src/pages/payment-history.jsx'));
const LazyAdmissionStatus = lazy(() => import('/Users/atchayaraja/frontend/src/pages/admission-status.jsx'));
const LazyViewCourses = lazy(() => import('/Users/atchayaraja/frontend/src/pages/view-courses.jsx'));
const LazyProfile = lazy(() => import('/Users/atchayaraja/frontend/src/pages/profile.jsx'));
const LazyAdminDashboard = lazy(() => import('/Users/atchayaraja/frontend/src/pages/admin-dashboard.jsx'));
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
    },
    {
      path:'/view-institute',
      element:<Suspense fallback={<Spinner/>}><LazyViewInstitute/></Suspense>
    },
    {
      path:'/view-courses',
      element:<Suspense fallback={<Spinner/>}><LazyViewCourses/></Suspense>
    },
    {
      path:'/profile',
      element:<Suspense fallback={<Spinner/>}><LazyProfile/></Suspense>
    },
    {
      path:'/admission-status',
      element:<Suspense fallback={<Spinner/>}><LazyAdmissionStatus/></Suspense>
    },
    {
      path:'/payment-history',
      element:<Suspense fallback={<Spinner/>}><LazyPaymentHistory/></Suspense>
    },
    {
      path:'/admin-dashboard',
      element:<Suspense fallback={<Spinner/>}><LazyAdminDashboard/></Suspense>
    },
    {
      path:'/payment',
      element:<Suspense fallback={<Spinner/>}><LazyPayment/></Suspense>
    }
    
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
    
  )
}
export default App