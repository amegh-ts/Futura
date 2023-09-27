import './App.css';
import CartPage from './Components/CartPage';
import Home from './Components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'cartpage',
      element:<CartPage/>
    },
  ])
  return (
    <RouterProvider router={router}></RouterProvider>


    // <div className="App">
    //   {/* <Home/> */}
    //   {/* <CartPage/> */}
    // </div>

    
  );
}



export default App;
