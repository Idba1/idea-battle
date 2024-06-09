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
        path: 'manage-user',
        element: <ManageUser></ManageUser>,
        loader: () => fetch('http://localhost:9000/users')
      },
      {
        path: 'manage-contest',
        element: <ManageContest></ManageContest>,
        loader: () => fetch('http://localhost:9000/contests')
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