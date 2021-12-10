import logo from './logo.svg';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';

import Login from './pages/Login';
import Otp from './pages/Otp';

export const SessionState = React.createContext({
    session: {},
    setSession: () => {}
});

function App() {
  const [session, setSession] = useState(false);

  return (
    <SessionState.Provider value={{session, setSession}}>
      <Router>
        <Routes>
          <Route index path='login' element={<Login />}/>
        </Routes>
        <Routes>
          <Route index path='otp' element={<Otp />}/>
        </Routes>
      </Router>
    </SessionState.Provider>
  );
}

export default App;
