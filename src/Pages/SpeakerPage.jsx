import React from 'react'
import Footer from '../components/Footer/Footer'
import Speaker from '../components/Speaker/Speaker'

function SpeakerPage() {
    
  document.title = 'Speaker- Boult Audio';
  return (
    <div>
      <Speaker />
      <Footer />
    </div>
  )
}

export default SpeakerPage
