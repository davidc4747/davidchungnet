import React from 'react'
import Link from 'gatsby-link'
import './navbar.css'

export default () => (
  <ul className="navbar">
    <Link to="/">
      <li className="navbar__item">
        <i className="navbar__icon fa fa-home" /> Home
      </li>
    </Link>
    <Link to="/resume/">
      <li className="navbar__item">
        <i className="navbar__icon fa fa-briefcase" /> Resume
      </li>
    </Link>
    {/* <Link to="/projects/">
      <li className="navbar__item">
        <i className="navbar__icon fa fa-code" /> Projects
      </li>
    </Link>
    <Link to="/faq/">
      <li className="navbar__item">
        <i className="navbar__icon fa fa-compass" /> FAQ
      </li>
    </Link> */}
  </ul>
)
