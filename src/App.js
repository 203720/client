
import React from 'react';

//Importacion de rutas
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // NavLink
} from "react-router-dom";

//Importacion de componentes
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} /> 
          <Route path="/Profile" element={<Profile />} /> 
          <Route path='*' element={<div><h1>Not Found Page</h1></div>}></Route>
        </Routes>
    </Router>
  );
}


export default App;
