import logo from './logo.svg';
import './App.css';
import Home from './Components/Banking/Home';
import Login from './Components/Banking/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Banking/Layout';
import Signup from './Components/Banking/Signup';

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Login" Component={Login} />
        <Route path="/Signup" Component={Signup} />

      </Routes>
    </Router>
  );
}

export default App;
