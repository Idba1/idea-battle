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
import ManageUser from '../Pages/ManageUser/ManageUser.jsx';
import ManageContest from '../Pages/ManageContest/ManageContest.jsx';
import CreatorDashboard from '../Layout/CreatorDashboard.jsx';
import AddContest from '../Pages/Creator/AddContest/AddContest.jsx';
import MyCreatedContest from '../Pages/Creator/MyCreatedContest/MyCreatedContest.jsx';
import ContentSubmitted from '../Pages/Creator/ContentSubmited/ContentSubmitted.jsx';
import Testimonials from '../Pages/Testimonials/Testimonials.jsx';
import LeaderBoard from '../Pages/LeaderBoard/LeaderBoard.jsx';
import Blogs from '../Pages/Blogs/Blogs.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

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
        <PrivateRoute>
            <ContestDetails></ContestDetails>
        </PrivateRoute>,
      },
      {
        path: 'all-contests',
        element: <AllContest></AllContest>,
      },
      {
        path: 'testimonials',
        element: <PrivateRoute>
          <Testimonials></Testimonials>
        </PrivateRoute>,
      },
      {
        path: '/leader-board',
        element: <PrivateRoute>
          <LeaderBoard></LeaderBoard>
        </PrivateRoute>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
    
    ],
  },
  {
    path: 'admin-dashboard',
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: 'manage-user',
        element: <ManageUser></ManageUser>,
        loader: () => fetch('https://ideabattle-server.vercel.app/users')
      },
      {
        path: 'manage-contest',
        element: <ManageContest></ManageContest>,
        loader: () => fetch('https://ideabattle-server.vercel.app/contests')
      }
    ]
  },
  {
    path: 'creator-dashboard',
    element: <CreatorDashboard></CreatorDashboard>,
    children: [
      {
        path: 'add-contest',
        element: <AddContest></AddContest>
      },
      {
        path: 'my-created-contest',
        element: <MyCreatedContest></MyCreatedContest>,
      },
      {
        path: 'contest-submitted',
        element: <ContentSubmitted></ContentSubmitted>,
      }
    ]
  },
])


export default Routes;