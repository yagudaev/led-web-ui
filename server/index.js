const process = require('process')
const NODE_ENV = process.env.NODE_ENV

const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const util = require('util')
const exec = util.promisify(require('child_process').exec)

const path = require('path')
const upload = require('jquery-file-upload-middleware')

const cors = require('cors')

app.use(cors())

app.post('/api/demos', async (req, res) => {
  const { stdout, stderr } = await exec('cd ../../rpi-rgb-led-matrix/examples-api-use/; sudo ./demo -D1 --led-rows=64 --led-cols=64 --led-slowdown-gpio=1 --led-scan-mode=0 --led-pixel-mapper="Rotate:90" --led-brightness=10 --led-daemon ./strawberry.ppm -m 0')
  res.send(stdout)
})

upload.configure({
  uploadDir: path.join(__dirname, 'public', 'uploads'),
  uploadUrl: '/api/uploads'
})

/// Redirect all to home except post
app.get('/api/upload', function( req, res ){
  res.redirect('/')
})

app.put('/api/upload', function( req, res ){
  res.redirect('/')
})

app.delete('/api/upload', function( req, res ){
  res.redirect('/')
})

app.use('/api/upload', function(req, res, next){
  upload.fileHandler({
    uploadDir: function () {
      console.log('upload dir is', path.join(__dirname, 'public', 'uploads'))
      return path.join(__dirname, 'public', 'uploads')
    },
    uploadUrl: function () {
      return '/uploads'
    }
  })(req, res, next);
})

if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
  app.use(express.static(path.join(__dirname, 'public')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server listening on port ${port}!`))
