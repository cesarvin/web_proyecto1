import React from 'react'

import logo from '../img/logotop.svg'

const Navbar = () => (
  <div className="head">
    <div className="navbar">
      <a className="logotop" href="https://bitcoin.org/es/">
        <img src={logo} alt="Bitcoin" />
      </a>
      <ul id="menusimple" className="menu">
        <li className="menuli">
          <a className="is-expand m10" href="https://bitcoin.org/es/">Introducción</a>
        </li>
        <li className="menuli">
          <a className="is-expand m10" href="https://bitcoin.org/es/">Recursos</a>
        </li>
        <li className="menuli">
          <a href="https://bitcoin.org/es/">Innovación</a>
        </li>
        <li className="menuli">
          <a className="is-expand m10" href="https://bitcoin.org/es/">Participe</a>
        </li>
        <li className="menuli">
          <a href="https://bitcoin.org/es/">FAQ</a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menuli">
          <a className="is-expand m10" href="https://bitcoin.org/es/">Español</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Navbar
