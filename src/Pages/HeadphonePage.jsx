import React from 'react'
import Footer from '../components/Footer/Footer'
import Headphones from '../components/Headphone/Headphone'

function HeadphonePage() {
  
  document.title = 'Headphones - Boult Audio';
  return (
    <div>
      <Headphones />
      <Footer />
    </div>
  )
}

export default HeadphonePage
