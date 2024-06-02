import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main';

const Routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement:<h1>error page</h1> ,
      children: [

      ],
    },
  ])


export default Routes;