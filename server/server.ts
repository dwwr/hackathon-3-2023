const express = require('express')
const cors = require('cors')
const app = express()
const { exec } = require('child_process')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(cors())

app.post('/sendosc', (req, res) => {
  // console.log('request', req.body)
  const ip = req.body.ip
  const port = req.body.port
  const address = req.body.address
  const typeTag = req.body.typeTag
  const args = req.body.args

  const command = `sendosc ${ip} ${port} ${address} ${typeTag} "${args}"`
  console.log('command', command)
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)
  })

  res.sendStatus(200)
})

app.listen(3000, () => console.log('Server running on port 3000'))
