const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { exec } = require('child_process')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

app.post('/sendosc', async (req, res) => {
  console.log('request', req.body)
  const { mood, style, genre, mode, numberOfNotes, inspiration } = req.body
  let completion
  try {
    completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Please write me a melody for sonic pi. This melody should be in a ${mood} mood, with a ${style} style, in a ${mode} mode, in the ${genre} genre. The number of notes must be ${numberOfNotes} and may not under any circumstances exceed 40. The melody should be inspired by the works of ${inspiration}. The notes must be within the range 20 to 100 and may not under any circumstances exceed 100. Your response must not contain any words and must be in the form of an array of numbers satisfying the stated conditions.`,
      temperature: 0.75,
      max_tokens: 1024,
      n: 2,
    })
  } catch (error) {
    return error
  }
  const args =
    completion?.data?.choices[0]?.text + completion?.data?.choices[1]?.text
  console.log(args)

  const command = `sendosc 192.168.86.30 4560 /melody s "${args}"`
  exec(command, error => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
  })

  res.sendStatus(200)
})

app.listen(3000, () => console.log('Server running on port 3000'))
