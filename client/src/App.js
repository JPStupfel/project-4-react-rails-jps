import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Teampage from './Teampage';



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/team" element={<Teampage/>} />
        <Route path="/projectlist" element={<>projectlist</>} />
        <Route path="/user-login" element={<>Login</>} />

      </Routes>
    

    </div>
  );
}

export default App;
