import React from 'react'

import icoindividuals from '../img/ico_individuals.svg'
import icobusiness from '../img/ico_business.svg'
import icodevelopers from '../img/ico_developers.svg'
import icoarrowdown from '../img/ico_arrow_down.svg'

const Overview = () => (
  <div className="overviewsection">
    <div className="overviewcontainer">
      <div className="mainoverview-title">O vea una guía rápida para</div>
      <a href="https://bitcoin.org/es/" className="maincard">
        <img className="maincard-img" src={icoindividuals} alt="Icon" />
        <div>
          <p className="maincard-title">Personas</p>
          <p className="maincard-link">Learn more</p>
        </div>
      </a>
      <a href="https://bitcoin.org/es/" className="maincard">
        <img className="maincard-img" src={icobusiness} alt="Icon" />
        <div>
          <p className="maincard-title">Empresas</p>
          <p className="maincard-link">Learn more</p>
        </div>
      </a>
      <a href="https://bitcoin.org/es/" className="maincard">
        <img className="maincard-img" src={icodevelopers} alt="Icon" />
        <div>
          <p className="maincard-title">Desarrolladores</p>
          <p className="maincard-link">Learn more</p>
        </div>
      </a>
    </div>
    <a className="btn-down" href="https://bitcoin.org/es/">
      <img src={icoarrowdown} alt="Link" />
    </a>
  </div>
)

export default Overview
