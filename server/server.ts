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
  let completion
  try {
    completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt:
        'Please write me a melody for sonic pi. The number of notes must be between 10 and 40 and may not under any circumstances exceed 40. The notes must be within the range 20 to 100 and may not under any circumstances exceed 100. Your response must not contain any words and must be in the form of an array of numbers satisfying the stated conditions.',
      temperature: 0.5,
      max_tokens: 1024,
      n: 2,
    })
  } catch (error) {
    return error
  }
  // console.log(completion?.data?.choices)
  const args =
    completion?.data?.choices[0]?.text + completion?.data?.choices[1]?.text
  console.log(args)
  const ip = req.body.ip
  const port = req.body.port
  const address = req.body.address
  const typeTag = req.body.typeTag

  const command = `sendosc ${ip} ${port} ${address} ${typeTag} "${args}"`
  exec(command, error => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
  })

  res.sendStatus(200)
})

app.listen(3000, () => console.log('Server running on port 3000'))
