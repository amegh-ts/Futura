import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './Components/Pages/Login/SignUp';
import Test from './Components/Pages/Test/Test';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<SignUp/>
    },{
      path:'test',
      element:<Test/>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
