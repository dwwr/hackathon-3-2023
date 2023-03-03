import React from 'react'
import axios from 'axios'
const App: React.FC = () => {
  axios
    .post(
      'http://localhost:3000/sendosc',
      {
        ip: '192.168.86.30',
        port: '4560',
        address: '/melody',
        typeTag: 's',
        args: '60 62 64 65 67 69 71',
      },
      {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
      }
    )
    .then(response => console.log(response))
    .catch(error => console.error(error))

  return <div className="app">HELLO HACKATHON</div>
}
export default App
