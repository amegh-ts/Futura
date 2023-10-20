import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Loading from './Components/Loading';
import Main from './Components/Main';
import Details from './Components/Details';
import { apiData } from './Components/API/api';
import Buy from './Components/Buy';
import Login from './Login signup/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/loading',
      element: <Loading />,
    },
    {
      path: 'home',
      element: <Main />,
    },
    {
      path: 'details/:itemId',
      element: <Details items={apiData} />,
    },
    {
      path: '/buy',
      element: <Buy />
    },
    {
      path: '/',
      element: <Login />
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Route path="/" element={router} />
    </RouterProvider>
  );
}

export default App;

