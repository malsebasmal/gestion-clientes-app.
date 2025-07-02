import express from "express"
import CLIENTS from "./clients.js"
import cors from "cors"
import crypto from "node:crypto"

const PORT = 3000
const app = express()
app.use(cors())
app.use(express.json())

app.get("/clients", (req, res) => {
  res.json(CLIENTS)
})

app.post("/clients", (req, res) => {
  const result = req.body

  const newClient = {
    id: crypto.randomUUID(),
    ...result
  }

  CLIENTS.push(newClient)

  res.status(201).json({newClient})
})

app.put("/clients/:id", (req, res) => {
  const {id} = req.params
  const clientId = CLIENTS.findIndex(client => client.id === id)

  const result = req.body

  const updateClient = {
    ...CLIENTS[clientId],
    ...result
  }

  CLIENTS[clientId] = updateClient

  res.status(202).json(updateClient)
})

app.delete("/clients/:id", (req, res) => {
  const {id} = req.params
  const client = CLIENTS.findIndex(client => client.id === id)
  CLIENTS.splice(client, 1)
  res.json({message: "movie deleted"})
})

app.listen(PORT, () => {
  console.log(`Listen in http://localhost:${PORT}`)
})