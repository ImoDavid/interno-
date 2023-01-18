import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './containers/Homepage';
import { AboutPage } from './containers/Aboutpage';
import {ServicesPage} from './containers/Servicespage';
import { ErrorPage } from './containers/Errorpage';
import {Navbar }from './components/navbar';
import {Footer} from './components/footer';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
   <Footer/>
    </>
  );
}

export default App;
