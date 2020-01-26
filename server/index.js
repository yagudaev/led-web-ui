const express = require('express')
const app = express()
const port = 3001

const util = require('util')
const exec = util.promisify(require('child_process').exec)

app.get('/api/demos', async (req, res) => {
  const { stdout, stderr } = await exec('cat index.js')
  res.send(stdout)
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))
