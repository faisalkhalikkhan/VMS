import { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Signup from './Components/SignUpPage/Signup';
import Login from './Components/LoginPage/Login';

import { Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser ] = useState(null)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={user == null ? <Login setUser={setUser} /> : <Dashboard user={user} />} />
        <Route path='/signup' element={<Signup /> } />
      </Routes>
    </div>
  );
}

export default App;
