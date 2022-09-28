// 
const express = require('express')
const app = express()

// ----------  ruta Me  ----------//

app.get('/me', (req, res) => {
  console.log(req.method)
  res.status(200).json({
    name: 'Julio Cesar',
    edad: 27,
    pais: 'México'
  })
})

// ---------- Ruta Goels  -----------//

app.post('/goels', (req, res) => {

  console.log(req.method)
  res.status(200).json({
    hobbies: [
      'I like Programming',
      'I enjoy playing the guitar',
      'I love listenning to music',
    ],
  })
})

app.patch('/goels', (req, res) => {
  console.log(req.method)
  res.status(200).json({
    learn: [
      'Back-end',
      'Angular'
    ]
  })
})

//---------- Ruta Business ------------//

app.put('/business', (req, res) => {
  console.log(req.method)
  res.status(200).json({
    companys: [
      'Globan',
      'Microsoft',
      'AI'
    ]
  })
})




// ---------- protocol TCP/IP---------//

app.listen(8000, () => {
  console.log('server started at post 8000')
})