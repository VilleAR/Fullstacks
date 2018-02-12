const express = require('express')
const app = express()

let notes = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Martti Tienari",
    number: "040-123456",
    id: 2
  },
  {
    name: "Arto Järvinen",
    number: "040-123456",
    id: 3
  },
  {
    name: "Lea Kutvonen",
    number: "040-123456",
    id: 4
  },
  {
    name: "uudelleen käynnistys",
    number: "monta",
    id: 5
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})
app.get('/api/persons', (request, response) => {
  const notelist = notes.find(note => note.id!== 1)
  response.json(notes)
})

app.get('/api/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note =>note.id === id) 
  console.log(note)
  response.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})