// 
const express = require('express')
const app = express()

// ----------  Ruta Me  ----------//

app.get('/me', (req, res) => {
  console.log(req.method)
  res.status(200).json({
    name: 'Julio Cesar',
    edad: 27,
    pais: 'México',
    messege: req.method
  })
})

// ---------- Ruta Goels  -----------//

app.post('/metas', (req, res) => {

  console.log(req.method)
  res.status(200).json({
    hobbies: [
      'I like Programming',
      'I enjoy playing the guitar',
      'I love listenning to music',
    ],
    messege: req.method
  })
})

app.patch('/metas', (req, res) => {
  console.log(req.method)
  res.status(200).json({
    learn: [
      'Back-end',
      'Svelte'
    ],
    messege: req.method
  })
})

//---------- Ruta Business ------------//

app.put('/business', (req, res) => {
  console.log(req.method)
  res.status(200).json({
    companys: [
      'Globant',
      'Company_2',
      'AI'
    ],
    messege: req.method
  })
})




// ---------- protocol TCP/IP---------//

app.listen(8000, () => {
  console.log('server started at post 8000')
})