import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Display from './components/display';
import Signup from './components/signup';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Signup/>
    },{
      path:'/display',
      element:<Display/>
    },
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
    // <div className="App">
    //   <Signup/>
    //   <Display/>
    // </div>
  );
}

export default App;
