import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Loading from './Components/Loading';
import Main from './Components/Main';
import Details from './Components/Details';
import { apiData } from './Components/API/api';
import Buy from './Components/Buy';
import Niha from './Components/Test/Niha';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Loading />,
    },
    {
      path: 'home',
      element: <Main />,
    },
    {
      path: 'details/:itemId',
      element: <Details items={apiData}/>,
    },
    {
      path:'buy',
      element:<Buy/>
    },{
      path:'niha',
      element:<Niha/>
    }
  ]);

  return (
    <RouterProvider router={router}>
      <Route path="/" element={router} />
    </RouterProvider>
  );
}

export default App;

