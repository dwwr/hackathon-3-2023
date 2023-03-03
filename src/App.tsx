import React from 'react'
import axios from 'axios'
import { MusicForm } from './Form'
const App: React.FC = () => {
  const handleSendMelody = () => {
    axios
      .post(
        'http://localhost:3000/sendosc',
        {
          mood: 'sad',
          style: 'jazz',
          genre: 'fugue',
          mode: 'minor',
          numberOfNotes: 10,
          inspiration: 'gershwin',
        },
        {
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
          },
        }
      )
      .then(response => console.log(response))
      .catch(error => console.error(error))
  }

  return (
    <div className="app" onClick={() => handleSendMelody()}>
      <h1 className="mb-5">HELLO HACKATHON</h1>
      <MusicForm />
    </div>
  )
}
export default App
