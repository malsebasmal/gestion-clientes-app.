import express from "express"
import CLIENTS from "./clients.js"
import cors from "cors"

const PORT = 3000
const app = express()
app.use(cors())

app.get("/clients", (req, res) => {
  res.json(CLIENTS)
})

app.post("/clients", (req, res) => {
  const {name, email, phoneNumber, enterprise} = req.body
  res.json({
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    enterprise: enterprise
  })
})

app.put("/clients:id", (req, res) => {
  
})

app.delete("/clients:id", (req, res) => {
  
})

app.listen(PORT, () => {
  console.log(`Listen in http://localhost:${PORT}`)
})