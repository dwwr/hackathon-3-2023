import React from 'react'
import axios from 'axios'
import { MusicForm } from './Form'
import { ZText } from './components/Ztext'
import { Illustration } from 'react-zdog'
import Zfont from 'zfont'
import Zdog from 'zdog'
import '../src/components/fonts'
import NotoSans from './components/NotoSans-Regular.ttf'
Zfont.init(Zdog)
const font: Zdog.Font = new Zdog.Font({
  src: NotoSans,
})
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
    <div className="app h-100">
      {/* <h1 onClick={() => handleSendMelody()}>HELLO HACKATHON</h1> */}
      <div
        style={{ height: 125, width: 300 }}
        className="d-flex justify-self-center"
      >
        <Illustration
          rotate={{ x: (Zdog.TAU * -15) / 360, y: (Zdog.TAU * 1) / 20 }}
          element="canvas"
          dragRotate={true}
        >
          <ZText
            text="SlapGPT"
            fontSize={40}
            font={font}
            stroke={4}
            color="#80bfff"
          />
        </Illustration>
      </div>

      <MusicForm />
    </div>
  )
}
export default App
