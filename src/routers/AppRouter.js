import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContactPage from '../components/Contact'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import NotFoundPage from '../components/NotFound'
import PortfolioItem from '../components/PortfolioItem'
import PortfolioPage from '../components/PortfolioPage'

const AppRouter = () => (
  <BrowserRouter>
      <div>
          <Header />
          <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/portfolio/:id" component={PortfolioItem} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
        </Switch>
      </div>
  </BrowserRouter>
)

export default AppRouter