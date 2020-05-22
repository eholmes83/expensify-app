import React from 'react'

const PortfolioItem = () => {
  const items = ['Thing One', 'Thing Two']
  
  return (
    <div>
      {
        items.map((item) => {
          return(
          <ul>
            <li><a href="">{item}</a></li>
          </ul>
          )
        })
      }
      </div>
  )
}


export default PortfolioItem