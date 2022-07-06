import React from 'react'
import { render } from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Error from './pages/errorPage/Error'
import Home from './pages/homePage/Home'
import Header from './components/header/Header'
import './index.css'
import LocationPage from './pages/locationPage/LocationPage'
import About from './pages/aboutPage/About'
render(
  <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/locations/:id' component={LocationPage} />
        <Route exact path='/about' component={About} />
        <Route component={Error} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals();