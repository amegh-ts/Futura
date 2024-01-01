import './App.css';
import Content from './Components/Users/Content/Content';
import Home from './Components/Users/Home/Home';
import Navbar from './Components/Users/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar/>
        <Home/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
