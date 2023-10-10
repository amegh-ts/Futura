import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dispatch1 from './Components/LocalStoreContext/Dispatch1';
import GetData from './Components/LocalStoreContext/GetData';


function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element:<Dispatch1/>
  },
  {
      path:'getdata',
      element:<GetData/>
  }
  ])
  return (
    
      <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
