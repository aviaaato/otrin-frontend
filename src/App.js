import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Accueil from './component/Accueil';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Footer from './component/Footer';
import Preloader from './component/Preloader';
import AddPrice from './component/AddPrice';

function App() {
  return (
    <div className="App">
      <Router>
        <Preloader/>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Accueil/>} />
          <Route path="/sign_in" element={<SignIn/>} />
          <Route path="/sign_up" element={<SignUp/>} />
          <Route path="/add_price" element={<AddPrice/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
