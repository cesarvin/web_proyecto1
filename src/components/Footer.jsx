import React from 'react'

import FooterIntroOps from './FooterIntroOps'
import FooterResources from './FooterResources'
import FooterParticipant from './FooterParticipant'
import FooterOther from './FooterOther'
import FooterSupport from './FooterSupport'
import FooterBottom from './FooterBottom'

import logofooter from '../img/logo-footer.svg'

const Footer = () => (
  <div className="footer">
    <div className="footercontainer">
      <a className="logo-footer" href="https://bitcoin.org/es/">
        <img src={logofooter} alt="Bitcoin" />
      </a>
      <div className="row footer-row">
        <FooterSupport />
        <div className="row footermenu">
          <FooterIntroOps />
          <FooterResources />
          <FooterParticipant />
          <FooterOther />
        </div>
      </div>
    </div>
    <FooterBottom />
  </div>
)

export default Footer
