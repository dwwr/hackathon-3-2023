import React from 'react'
import axios from 'axios'
const App: React.FC = () => {
  const handleSendMelody = () => {
    axios
      .post(
        'http://localhost:3000/sendosc',
        {
          ip: '192.168.86.30',
          port: '4560',
          address: '/melody',
          typeTag: 's',
          args: '[60, 60, 67, 67, 69, 69, 67, 65, 64, 64]',
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
