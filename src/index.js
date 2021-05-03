/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'

import './layout/style.css'

import DonationContainer from './components/DonationContainer'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import Overview from './components/Overview'
import Description from './components/Description'
import Footer from './components/Footer'

const App = () => (
  <div>
    <DonationContainer />
    <Navbar />
    <MainSection />
    <Overview />
    <Description />
    <Footer />
  </div>
)

ReactDOM.render(
  <App />,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
)
