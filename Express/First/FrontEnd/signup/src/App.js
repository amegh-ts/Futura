import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Display from './components/display';
import Signup from './components/signup';
import SignIn from './components/signin';
import Profile from './components/profile';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<SignIn/>
    },{
      path:'/display',
      element:<Display/>
    },{
      path:'/signup',
      element:<Signup/>
    },{
      path:'/profile',
      element:<Profile/>
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
