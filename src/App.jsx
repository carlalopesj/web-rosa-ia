import React from 'react';
import './App.css'
import { AppRoutes } from './Routes';
import { Footer } from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <AppRoutes />
    <Footer />
    </BrowserRouter>
  )
}

export default App;
