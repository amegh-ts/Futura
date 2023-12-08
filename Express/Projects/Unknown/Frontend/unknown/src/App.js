import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import SideBar from './Components/Sidebar/SideBar';
import Login from './Components/Login/Login';
import { useSelector } from 'react-redux';
import Profile from './Components/Profile/Profile';


function App() {
  const reduxData = useSelector((state) => state.user.userInfo[0])
  console.log('reduxdata', reduxData);

  if (reduxData) {
    var Token = reduxData && reduxData.accessToken
    console.log("The access token is", Token);
    var id = reduxData && reduxData.id
    console.log('the id is', id);
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: Token ? <SideBar /> : <Login />
    },{
      path:'/profile',
      element:<Profile/>
    }
  ])
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router}></RouterProvider>

        {/* <SideBar/> */}
      </header>
    </div>
  );
}

export default App;
