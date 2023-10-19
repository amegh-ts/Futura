import './App.css';
import Cart from './Components/Cart';
import Details from './Components/Details';
import Loading from './Components/Loading';
import Main from './Components/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Loading/>
    },
    {
      path:'home',
      element:<Main/>
    },
    {
      path:'details',
      element:<Details/>
    }
])
  return (
    <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
