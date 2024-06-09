import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage.jsx';
import Home from '../Components/Home/Home'
import LogIn from '../Pages/LogInPage/LogIn.jsx';
import Register from '../Pages/RegisterPage/Register.jsx';
import PopularContests from '../Pages/PopularContests/PopularContests.jsx';
import ContestDetails from '../Pages/ContestDetails/ContestDetails.jsx';
import AllContest from '../Pages/AllContest/AllContest.jsx';
import AdminDashboard from '../Layout/AdminDashboard.jsx';
import Admin from '../Components/Admin/Admin.jsx';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: 'login',
        element: <LogIn></LogIn>,
      },
      {
        path: 'popular/contest',
        element: <PopularContests></PopularContests>,
      },
      {
        path: 'allcontest/:id',
        element:
          <ContestDetails></ContestDetails>,
      },
      {
        path: 'all-contests',
        element: <AllContest></AllContest>,
      },
    
    ],
  },
  {
    path: 'admin-dashboard',
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: 'home',
        element: <Admin></Admin>
      }
    ]
  }
])


export default Routes;