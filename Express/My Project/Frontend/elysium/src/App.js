import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Pages/Signin-Signup/Login';

function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
