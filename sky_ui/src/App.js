import logo from './logo.svg';
import './App.css';
import Home from './Components/Banking/Home';
import Login from './Components/Banking/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Banking/Layout';
import Signup from './Components/Banking/Signup';
import Loan from './Components/Banking/Loan';
import Bonds from './Components/Bonds/Bonds';
import LoanApplications from './Components/Banking/LoanApplications';
import EmployeeLogin from './Components/Banking/EmployeeLogin';
import Transaction from './Components/Banking/Transaction';


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
        <Route path='/employee-login' Component={EmployeeLogin}/>
        <Route path='/transaction' Component={Transaction}/>


      </Routes>
    </Router>
  );
}

export default App;
