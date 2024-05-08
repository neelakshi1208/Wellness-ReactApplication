import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CoachSignup from './components/CoachSignup';
import CoachLogin from './components/CoachLogin';
import UserSignup from './components/UserSignup';
import UserLogin from './components/UserLogin';
import Footer from './components/Footer';
import Navigation from './components/Navigation';


const App = () => {
    return (
        <Router>
            <Navigation/>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/coachsignup' element={<CoachSignup />}></Route>
              <Route path='/coachlogin' element={<CoachLogin />}></Route>
              <Route path='/usersignup' element={<UserSignup />}></Route>
              <Route path='/userlogin' element={<UserLogin />}></Route>
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;