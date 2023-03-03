import React from 'react'
import { Form, Button } from 'react-bootstrap'

export const MusicForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    mood: '',
    style: '',
    genre: '',
    mode: '',
    numberofNotes: '',
    inspiration: '',
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
    // Call OpenAI API with formData
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex flex-column justify-content-between align-items-center">
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
        <Form.Group className="w-50 ms-2">
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
        <Form.Group className="w-50 me-2">
          <Form.Label htmlFor="genre">Genre</Form.Label>
          <Form.Control
            type="text"
            id="genre"
            name="genre"
            onChange={handleChange}
            value={formData.genre}
          />
        </Form.Group>
        <Form.Group className="w-50 ms-2">
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
        <Form.Group className="w-50 ms-2">
          <Form.Label htmlFor="numberofNotes">Number of Notes</Form.Label>
          <Form.Control
            type="number"
            id="numberofNotes"
            name="numberofNotes"
            onChange={handleChange}
            value={formData.numberofNotes}
          />
        </Form.Group>
      </div>

      <div className="d-flex flex-column justify-content-between align-items-center">
        <Form.Group className="w-50 ms-2">
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
      <div className="mt-3 d-flex flex-column justify-content-between align-items-center">
        <Button className="w-50" type="submit">
          Generate Music
        </Button>
      </div>
    </Form>
  )
}
