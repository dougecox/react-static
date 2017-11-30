import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'

import './app.css'

export default () => (
  <Router>
    <div>
      <nav>
        <span style={{ padding: '1em', margin: '2em' }}> Douglas Eldon Cox </span>
        <Link className="navLink" to="/">Home</Link>
        <Link className="navLink" to="/about">About</Link>
        <Link className="navLink" to="/blog">Blog</Link>
      </nav>
      <div className="content" style={{ margin: '0', padding: '0' }}>
        <Routes />
      </div>
    </div>
  </Router>
)
