import React from 'react';
import ReactDOM from "react-dom";
import {render} from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Error from './pages/errorPage/Error'
import Home from './pages/homePage/Home'
import LocationPage from './pages/locationPage/LocationPage'
import About from './pages/aboutPage/About'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/locations/:id' element={<LocationPage/>} />
        <Route path='/about/' element={<About/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
  </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();