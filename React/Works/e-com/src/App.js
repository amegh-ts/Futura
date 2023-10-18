import './App.css';
import Loading from './Components/Loading';
import Main from './Components/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Loading/>
    },{
      path:'home',
      element:<Main/>
    }
])
  return (
    <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
