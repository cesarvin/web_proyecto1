import React from 'react'

const MainSection = () => (
  <div className="mainsection">
    <div className="contentsection">
      <p className="mainsummary">
        Bitcoin es una  innovadora red de pagos y una nueva clase de dinero.
      </p>
      <div className="mainbuttonscontainer">
        <a className="btn btn-bright btn-home" href="https://bitcoin.org/es/">Cómo comenzar a usar Bitcoin</a>
        <a className="btn btn-light btn-home" href="https://bitcoin.org/es/">Escoja su monedero</a>
        <a className="btn btn-light btn-home" href="https://bitcoin.org/es/">Buy Bitcoin</a>
      </div>
      <div className="mainvideo">
        <button type="button" className="playbutton">¿Qué es Bitcoin?</button>
      </div>
    </div>
  </div>
)

export default MainSection
