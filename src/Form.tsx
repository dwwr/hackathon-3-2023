import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { FormDataType } from './App'

export const MusicForm: React.FC<{
  handleSendMelody: (formData: any) => void
}> = ({ handleSendMelody }) => {
  const [formData, setFormData] = React.useState<FormDataType>({
    mood: '',
    style: '',
    genre: '',
    mode: '',
    numberOfNotes: '',
    inspiration: '',
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <Form>
      <div className="d-flex flex-column justify-content-between align-items-center mt-5">
        <Form.Group className="w-50 me-2">
          <Form.Label htmlFor="mood">Mood</Form.Label>
          <Form.Control
            type="text"
            id="mood"
            name="mood"
            onChange={handleChange}
            value={formData.mood}
          />
        </Form.Group>
        <Form.Group className="w-50 my-2">
          <Form.Label htmlFor="style">Style</Form.Label>
          <Form.Control
            type="text"
            id="style"
            name="style"
            onChange={handleChange}
            value={formData.style}
          />
        </Form.Group>
      </div>

      <div className="d-flex flex-column justify-content-between align-items-center">
        <Form.Group className="w-50 my-2">
          <Form.Label htmlFor="genre">Genre</Form.Label>
          <Form.Control
            type="text"
            id="genre"
            name="genre"
            onChange={handleChange}
            value={formData.genre}
          />
        </Form.Group>
        <Form.Group className="w-50 my-2">
          <Form.Label htmlFor="mode">Mode</Form.Label>
          <Form.Control
            type="text"
            id="mode"
            name="mode"
            onChange={handleChange}
            value={formData.mode}
          />
        </Form.Group>
      </div>

      <div className="d-flex flex-column justify-content-between align-items-center">
        <Form.Group className="w-50 my-2">
          <Form.Label htmlFor="numberOfNotes">Number of Notes</Form.Label>
          <Form.Control
            type="text"
            id="numberOfNotes"
            name="numberOfNotes"
            onChange={handleChange}
            value={formData.numberOfNotes}
          />
        </Form.Group>
      </div>

      <div className="d-flex flex-column justify-content-between align-items-center">
        <Form.Group className="w-50 my-2">
          <Form.Label htmlFor="inspiration">Inspiration</Form.Label>
          <Form.Control
            type="text"
            id="inspiration"
            name="inspiration"
            onChange={handleChange}
            value={formData.inspiration}
          />
        </Form.Group>
      </div>
      <div className="mt-4 d-flex flex-column justify-content-between align-items-center">
        <Button className="w-50" onClick={() => handleSendMelody(formData)}>
          Generate Music
        </Button>
      </div>
    </Form>
  )
}
