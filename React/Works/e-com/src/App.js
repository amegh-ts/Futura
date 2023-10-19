import './App.css';
import Cart from './Components/Cart';
import Loading from './Components/Loading';
import Main from './Components/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



function App() {
  const router=createBrowserRouter([
    // {
    //   path:'/',
    //   element:<Loading/>
    // },
    {
      path:'home',
      element:<Main/>
    },{
      path:'/',
      element:<Cart/>
    }
])
  return (
    <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
