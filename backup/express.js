var express = require('express')

var app = express()

app.get('/', (req, res) => {
  res.send('Hello 赵!')
})

app.listen(8080)