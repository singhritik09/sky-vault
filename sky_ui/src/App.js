import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Banking/Layout';
import Home from './Components/Banking/Home';
import Login from './Components/Banking/Login';
import Signup from './Components/Banking/Signup';
import Loan from './Components/Banking/Loan';
import Bonds from './Components/Bonds/Bonds';
import LoanApplications from './Components/Banking/LoanApplications';
import EmployeeLogin from './Components/Banking/EmployeeLogin';
import Transaction from './Components/Banking/Transaction';
import PageTransition from './Components/PageTransition';
import TransactionHistory from './Components/Banking/TransactionHistory';

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/loan" element={<PageTransition><Loan /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} />
        <Route path="/bonds" element={<PageTransition><Bonds /></PageTransition>} />
        <Route path="/loan-applications" element={<PageTransition><LoanApplications /></PageTransition>} />
        <Route path="/employee-login" element={<PageTransition><EmployeeLogin /></PageTransition>} />
        <Route path="/transaction" element={<PageTransition><Transaction /></PageTransition>} />
        <Route path="/transaction-history" element={<PageTransition><TransactionHistory /></PageTransition>} />

      </Routes>
    </Router>
  );
}

export default App;
