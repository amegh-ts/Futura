import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from './Components/Index/Index';
import Main from './Components/api-fetch/Main';
import Table from './Components/api-fetch/Table';
import Home from './Components/Hospital-Management/Home';
import Login from './Components/login-register/Login';


function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Index/>}, {
            path: 'api',
            element: <Main/>}, {
            path: 'api-table',
            element: <Table/>},
            {
              path:'hospital',
              element:<Home/>
            },{
              path:'login',
              element:<Login/>
            },
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default App;
