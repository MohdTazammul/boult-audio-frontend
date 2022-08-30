import React from 'react'
import Footer from '../components/Footer/Footer'
import Neckband from '../components/Neckband/Neckband'

function NeckbandPage() {
  
  document.title = 'Neckband - Boult Audio';
  return (
    <div>
      <Neckband />
      <Footer />
    </div>
  )
}

export default NeckbandPage
