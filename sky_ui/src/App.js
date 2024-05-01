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
import UserDashboard from './Components/Dashboard/UserDashboard';
import ApprovedLoans from './Components/Banking/ApprovedLoans';
import Choice from './Components/Choice';
import AuditLogin from './Components/Employee/AuditLogin';
import Version from './Components/Employee/Version';
import About from './Components/Banking/About';

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
      <Route path="/" element={<PageTransition><Choice /></PageTransition>} />
        <Route path="/Home" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />

        <Route path="/loan" element={<PageTransition><Loan /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} />
        <Route path="/bonds" element={<PageTransition><Bonds /></PageTransition>} />
        <Route path="/loan-applications" element={<PageTransition><LoanApplications /></PageTransition>} />
        <Route path="/employee-login" element={<PageTransition><EmployeeLogin /></PageTransition>} />
        <Route path="/transaction" element={<PageTransition><Transaction /></PageTransition>} />
        <Route path="/dashboard" element={<PageTransition><UserDashboard /></PageTransition>} />
        <Route path="/approved-loans" element={<PageTransition><ApprovedLoans /></PageTransition>} />
        <Route path="/audit-logs" element={<PageTransition><AuditLogin /></PageTransition>} />
        <Route path="/version" element={<PageTransition><Version /></PageTransition>} />

      </Routes>
    </Router>
  );
}

export default App;
