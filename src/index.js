import React from 'react'
import { render } from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorPage from './pages/errorPage/ErrorPage'
import Home from './pages/homePage/Home'
import Header from './components/Header/Header'
import './index.css'
import LocationPage from './pages/LocationPage/LocationPage'
import About from './pages/About/About'

render(
  <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/locations/:id' component={LocationPage} />
        <Route exact path='/about' component={About} />
        <Route component={ErrorPage} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals();