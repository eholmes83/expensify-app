import React from 'react'
import PortfolioItem from '../components/PortfolioItem'
import { Route } from 'react-router-dom'

const PortfolioPage = () => {
  return (
    <div>
    <h1>My Work</h1>
    <p>Check out the things I've done</p>
    <PortfolioItem />
  </div>
  )
}

export default PortfolioPage 