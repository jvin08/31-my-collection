import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>"Oops! You've reached a dead end! "</h1>
        <NavLink to="/" className="btn btn-primary">
          go back home
        </NavLink>
      </div>
    </section>
  )
}

export default Error
