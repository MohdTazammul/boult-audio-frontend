import React from 'react'
import Footer from '../components/Footer/Footer'
import Watches from '../components/Watches/Watches'

function WatchesPage() {
  document.title = 'Smart Watches - Boult Audio';
  return (
    <div>
      <Watches />
      <Footer />
    </div>
  )
}

export default WatchesPage