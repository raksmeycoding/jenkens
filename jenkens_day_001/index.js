const express = require('express')
const path = require('path')

const app = express()

const home = (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages', 'home.html'))
}

const about = (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages', 'about.html'))
}

const contact = (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages', 'contact.html'))
}

app.get('/', home)
app.get('/about', about)
app.get('/contact', contact)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
