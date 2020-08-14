
const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(process.env.POR || 5500, () => console.log('ok'))