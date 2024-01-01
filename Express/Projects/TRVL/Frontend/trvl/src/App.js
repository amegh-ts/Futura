import './App.css';
import Home from './Components/Users/Home/Home';
import Navbar from './Components/Users/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
