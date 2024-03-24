import logo from './logo.svg';
import './App.css';
import Home from './Components/Banking/Home';
import Login from './Components/Banking/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Banking/Layout';
import Signup from './Components/Banking/Signup';
import Loan from './Components/Banking/Loan';
import Bonds from './Components/Banking/Bonds';
import LoanApplications from './Components/Banking/LoanApplications';


function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path='/loan' Component={Loan}/>
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path='/bonds' Component={Bonds}/>
        <Route path='/loan-applications' Component={LoanApplications}/>


      </Routes>
    </Router>
  );
}

export default App;
