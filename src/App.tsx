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

export interface FormDataType {
  mood: string
  style: string
  genre: string
  mode: string
  numberOfNotes: string
  inspiration: string
}

const App: React.FC = () => {
  const handleSendMelody = (formData: FormDataType) => {
    const { mood, style, genre, mode, numberOfNotes, inspiration } = formData
    axios
      .post(
        'http://localhost:3000/sendosc',
        {
          mood,
          style,
          genre,
          mode,
          numberOfNotes,
          inspiration,
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
      <div
        style={{ height: 100, width: 500 }}
        className="d-flex justify-self-center"
      >
        <Illustration
          rotate={{ x: (Zdog.TAU * -15) / 360, y: (Zdog.TAU * 1) / 20 }}
          element="canvas"
          dragRotate={true}
        >
          <ZText
            text="SlapGPT"
            fontSize={50}
            font={font}
            stroke={4}
            color="#80bfff"
          />
        </Illustration>
      </div>

      <MusicForm handleSendMelody={handleSendMelody} />
    </div>
  )
}
export default App
