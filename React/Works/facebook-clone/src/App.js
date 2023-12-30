import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Pages/Login/Login';


function App() {
  const router = createBrowserRouter([
     {
      path: '/',
      element: <Login />,
    }, 
  ]);
  return (
    <div className="App">
      <div className="App-header">
      <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
