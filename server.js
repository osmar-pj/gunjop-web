const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/api', (req, res) => {
  try {
    console.log(req.query.ip, req.query.gtw, req.query.sbt, req.query.dns)
    res.json({
        saved: true 
    })
  } catch (error) {
      res.status(404).json({
          message: 'error'
      })
  }
})

app.listen(3000)