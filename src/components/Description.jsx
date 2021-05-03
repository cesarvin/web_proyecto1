import React from 'react'

import mainicoinstant from '../img/main_ico_instant.svg'
import mainicoworldwide from '../img/main_ico_worldwide.svg'
import mainicolowfee from '../img/main_ico_lowfee.svg'
import bitcoinimg from '../img/bitcoin-img.svg'

const Description = () => (
  <div className="maindesc">
    <div className="descriptioncontainer">
      <p className="section-title center home-title" id="maindesc-title">Cómo comenzar a usar Bitcoin</p>
      <div className="row maindesc-row">
        <div>
          <p className="maindesc-text">
            Bitcoin usa tecnología peer-to-peer o entre pares para operar sin una autoridad
            central o bancos; la gestión de las transacciones y la emisión de bitcoins es
            llevada a cabo de forma colectiva por la red.
            <b>
            &nbsp;Bitcoin es de código abierto; su diseño es público, nadie es dueño o controla
              Bitcoin y
              &nbsp;
              <a className="alink" href="https://bitcoin.org/es/">todo el mundo puede participar</a>
            </b>
            . Por medio de sus muchas propiedades únicas, Bitcoin permite usos interesantes
            no contemplados por ningún sistema de pagos anterior.
          </p>
          <ul className="mainlist">
            <li className="mainlist-item">
              <img src={mainicoinstant} alt="Icon" />
              <p>
                Rápidas operaciones
                <br />
                entre pares
              </p>
            </li>
            <li className="mainlist-item">
              <img src={mainicoworldwide} alt="Icon" />
              <p>
                Pagos en
                <br />
                todo el mundo
              </p>
            </li>
            <li className="mainlist-item">
              <img src={mainicolowfee} alt="Icon" />
              <p>
                Comisiones muy
                <br />
                bajas o inexistentes
              </p>
            </li>
          </ul>
        </div>
        <img className="maindesc-img" src={bitcoinimg} alt="Bitcoin" />
      </div>
      <div className="btn-container">
        <a className="btn btn-dark btn-home center" href="https://bitcoin.org/es/">Cómo comenzar a usar Bitcoin</a>
      </div>
    </div>
  </div>
)

export default Description
