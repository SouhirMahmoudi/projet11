import React from 'react';
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './pages/homePage/Home'
import LocationPage from './pages/locationPage/LocationPage'
import About from './pages/aboutPage/AboutPage'
import '../src/pages/base.scss'
import ErrorPage from './pages/errorPage/ErrorPage';


const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/locations/:id' element={<LocationPage/>} />
        <Route path='/about/' element={<About/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
  </Router>
  </React.StrictMode>
);

reportWebVitals();