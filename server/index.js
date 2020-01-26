const process = require('process')
const NODE_ENV = process.env.NODE_ENV

const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const util = require('util')
const exec = util.promisify(require('child_process').exec)

const path = require('path')

app.get('/api/demos', async (req, res) => {
  const { stdout, stderr } = await exec('cd ../../rpi-rgb-led-matrix/examples-api-use/; sudo ./demo -D1 --led-rows=64 --led-cols=64 --led-slowdown-gpio=1 --led-scan-mode=0 --led-pixel-mapper="Rotate:90" --led-brightness=10 --led-daemon ./strawberry.ppm -m 0')
  res.send(stdout)
})

if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server listening on port ${port}!`))
