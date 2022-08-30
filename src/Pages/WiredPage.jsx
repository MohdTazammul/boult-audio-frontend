import React from 'react'
import Footer from '../components/Footer/Footer'
import Wired from '../components/Wired/Wired'

export default function WiredPage() {
  
  document.title = 'Wired - Boult Audio';
  return (
    <div>
      <Wired />
      <Footer />
    </ div>
  )
}
