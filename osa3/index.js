const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

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
const generateId = () => {
  const maxId = notes.length > 0 ? notes.map(n => n.id).sort().reverse()[0] : 1
  return maxId + 1
}
app.post('/api/persons', (request, response) => {
  const body = request.body
  if (body.name === undefined) {
    return response.status(400).json({ error: 'name missing' })
  } 
  
  const getNumber = () => {
    return Math.round(Math.random() * (9999999 - 0000000) + 0000000);
  }
  const person = {
    name: body.name,
    number: "040" + getNumber(),
    id: generateId()
  }
  notes = notes.concat(person)
  response.json(person)
})
app.get('/api/persons/:id', (request, response) =>  {
  const id = Number(request.params.id)
  const person = notes.find(person => person.id === id)
  if ( person ) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})
app.delete('api/persons/:id', (request, response) => {
  const delId = Number(request.params.id)
  notes = notes.filter(person => person.id !== delId)
  response.status(204).end()
})

app.get('/api/persons', (request, response) => {
  const notelist = notes.find(note => note.id!== 1)
  response.json(notes)
})  
app.get('/info', (request, response) => {
  let maxId = notes.length > 0 ? notes.map(n => n.id).sort().reverse()[0] : 1
  date = new Date()
  response.send( 'Puhelinluettelossa ' + maxId + ' henkilön tiedot' + '<p> </p>' + date)

})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})