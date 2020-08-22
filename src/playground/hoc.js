// Higher Order Component (hoc) a component that render another component

import React from 'react'
import ReactDOM from 'react-dom'



const Info = (props) => {
  // console.log('props:', props)
  const isAuthed = () => {
    console.log('props', props)
    if (!props.isAuthenticated) {
      console.log('true')
      return {
        ...props,
        isAuthenticated: false
      }
    } else {
      console.log('false')
      return {
        ...props,
        isAuthenticated: true
      }
    }
  }
  
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
      <button onClick={isAuthed}>Login</button>
    </div>

  )
}

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please do not share!</p> } 
      <WrappedComponent {...props} />
    </div>
  )
}

// const AdminInfo = withAdminWarning(Info)

// requireAuth
const requireAuth = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p>Login to view details</p>) }
    </div>
  )
}

const AuthInfo = requireAuth(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info='These are the details' />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info='These are the details' />, document.getElementById('app'))
