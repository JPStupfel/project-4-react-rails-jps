import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from "react-dom/client";



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/team" element={<>team</>} />
        <Route path="/projectlist" element={<>projectlist</>} />
      </Routes>
    

    </div>
  );
}

export default App;
