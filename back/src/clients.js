import crypto from "node:crypto"

const CLIENTS = [
  {
    id: crypto.randomUUID(),
    name: "Antonio",
    email: "antonio@gmail.com",
    phoneNumber: "999000222",
    enterprise: "Amazon"
  },
  {
    id: crypto.randomUUID(),
    name: "Marcos",
    email: "marcos@gmail.com",
    phoneNumber: "999000222",
    enterprise: "Aliexpress"
  },
  {
    id: crypto.randomUUID(),
    name: "Pepe",
    email: "Pepe@gmail.com",
    phoneNumber: "999000222",
    enterprise: "Temu"
  }
]

export default CLIENTS