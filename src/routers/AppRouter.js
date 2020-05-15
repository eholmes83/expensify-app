import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import Portfolio from '../components/Portfolio'
import PortfolioItem from '../components/PortfolioItem'

const AppRouter = () => (
  <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/portfolio' exact={true} component={Portfolio} />
          <Route path='/portfolio/:id' component={PortfolioItem} />
          <Route component={NotFound} />
        </Switch>
      </div>
  </BrowserRouter>
)

export default AppRouter