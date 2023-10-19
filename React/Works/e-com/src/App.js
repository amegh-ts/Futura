import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Loading from './Components/Loading';
import Main from './Components/Main';
import Details from './Components/Details';
import Cart from './Components/Cart';

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
      element: <Details />,
    },
    // {
    //   path:'/',
    //   element:<Cart/>
    // }
  ]);

  return (
    <RouterProvider router={router}>
      <Route path="/" element={router} />
    </RouterProvider>
  );
}

export default App;

