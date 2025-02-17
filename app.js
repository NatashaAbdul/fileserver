const express = require('express')
const serveIndex = require('serve-index')

const app = express()

app.use('/ftp', express.static('public/ftp'),
    serveIndex('public/ftp', { icon: true }))

app.listen(3000, () => console.log('server is on port 3000'))