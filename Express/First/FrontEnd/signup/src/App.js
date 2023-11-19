import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Display from './components/display';
import Signup from './components/signup';
import SignIn from './components/signin';
import Profile from './components/profile';
import Animation1 from './components/Animations/Animation1/Animation1';
import Animation2 from './components/Animations/Animation2/Animation2';

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
    },{
      path:'/animation1',
      element:<Animation1/>
    },{
      path:'/animation2',
      element:<Animation2/>
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
