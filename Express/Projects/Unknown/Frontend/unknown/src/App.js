import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SideBar from './Components/User/Sidebar/SideBar';
import Login from './Components/Login/Login';
import { useSelector } from 'react-redux';
import AdminSidebar from './Components/Admin/Sidebar/AdminSidebar';
import Notification from './Components/User/Notification/Notification';
import Recovery from './Components/Login/Recovery';
import Chat from './Components/Chat/Chat';
import Test from './Components/Test/Test';

function App() {
  const reduxData = useSelector((state) => state.user.userInfo[0]);
  // console.log('reduxdata', reduxData);

  let content;

  if (reduxData) {
    const token = reduxData.accessToken;
    // console.log('The access token is', token);
    const id = reduxData.id;
    // console.log('The id is', id);
    const type = reduxData.type;
    // console.log('The type is', type);

    // Token and User type check
    if (token) {
      if (type === 'user') {
        content = <SideBar />;
      } else if (type === 'admin') {
        content = <AdminSidebar />
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
    }, {
      path: '/noti',
      element: <Notification />,
    }, {
      path: '/rec',
      element: <Recovery />,
    }, {
      path: '/chat',
      element: <Chat />,
    }, {
      path: '/test',
      element: <Test />,
    },
  ]);

  return (
    <div className="App">
      <div className="App-header">
        <RouterProvider router={router}></RouterProvider>
      </div>
      <section className='App-invisible'>
        <div>
          Please Use a larger display <span>340px</span> or more
        </div>
      </section>
    </div>
  );
}

export default App;
