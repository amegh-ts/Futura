import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SideBar from './Components/User/Sidebar/SideBar';
import Login from './Components/Login/Login';
import { useSelector } from 'react-redux';
import Profile from './Components/Profile/Profile';
import AdminSidebar from './Components/Admin/Sidebar/AdminSidebar';
import Notification from './Components/User/Notification/Notification';

function App() {
  const reduxData = useSelector((state) => state.user.userInfo[0]);
  console.log('reduxdata', reduxData);
  
  let content;

  if (reduxData) {
    const token = reduxData.accessToken;
    console.log('The access token is', token);
    const id = reduxData.id;
    console.log('The id is', id);
    const type = reduxData.type;
    console.log('The type is', type);

    // Token and User type check
    if (token) {
      if (type === 'user') {
        content = <SideBar />;
      } else if (type === 'admin') {
        content = <AdminSidebar/>
      }
    } else {
      // If there's no token, redirect to login
      content = <Login />;
    }
  } else {
    // If there's no user data, redirect to login
    content = <Login />;
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: content,
    },
    {
      path: '/profile',
      element: <Profile />,
    },{
      path: '/noti',
      element: <Notification />,
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router}></RouterProvider>
      </header>
    </div>
  );
}

export default App;
