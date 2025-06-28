import express from "express"
import CLIENTS from "./clients.js"
import cors from "cors"

const PORT = 3000
const app = express()
app.use(cors())
app.use(express.json())

app.get("/clients", (req, res) => {
  res.json(CLIENTS)
})

app.post("/clients", (req, res) => {
  const {name, email, phoneNumber, enterprise} = req.body

  const newClient = {
    id: CLIENTS.length + 1,
    name,
    email,
    phoneNumber,
    enterprise
  }

  CLIENTS.push(newClient)

  res.status(201).json({newClient})
})

app.put("/clients/:id", (req, res) => {
  const {id} = req.params
  const clientId = CLIENTS.findIndex(client => client.id === Number(id))

  const {name, email, phoneNumber, enterprise} = req.body

  CLIENTS[clientId] = {
    id,
    name,
    email,
    phoneNumber,
    enterprise
  }

  res.status(202).json(CLIENTS[clientId])
})

app.delete("/clients/:id", (req, res) => {
  const {id} = req.params
  const client = CLIENTS.findIndex(client => client.id === Number(id))
  CLIENTS.splice(client, 1)
  res.json({message: "movie deleted"})
})

app.listen(PORT, () => {
  console.log(`Listen in http://localhost:${PORT}`)
})