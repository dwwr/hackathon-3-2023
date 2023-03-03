import React from 'react'
import axios from 'axios'
const App: React.FC = () => {
  const handleSendMelody = () => {
    axios
      .post(
        'http://localhost:3000/sendosc',
        {
          mood: 'sad',
          style: 'jazz',
          genre: 'fugue',
          mode: 'modal',
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
      HELLO HACKATHON
    </div>
  )
}
export default App
