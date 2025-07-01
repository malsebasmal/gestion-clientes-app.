import { useState, useEffect } from 'react'
import './App.css'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react"
import axios from "axios"

function App() {
  const URLAPI = "http://localhost:3000/clients"

  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    enterprise: ""
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URLAPI)
        setData(response.data)
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData()
  }, [])

  const handleChangeForm = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(URLAPI, formData)
      data.push(response.data)
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleDeleteForm = async (id) => {
    try {
      await axios.delete(`${URLAPI}/${id}`)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleSetUpdateForm = (id) => {
    setFormData(data.find((client) => client.id === id))
  }

  const handleUpdateForm = async () => {
    try {
      const response = await axios.put(`${URLAPI}/${id}`, formData)
      data.push(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <header className='mb-6'>
        <h1>
          Gestión de clientes
        </h1>
      </header>
      <main className='flex items-center justify-center gap-10'>
        <section className='w-full'>
          <form  onSubmit={handleSubmitForm} className="w-md p-8 rounded-xl flex flex-col items-center justify-center gap-6 bg-gray-100 shadow-gray-200 shadow-xl">
            <label className="w-full flex flex-col items-start justify-center gap-2">
              Nombre completo
              <input className='p-2 w-full border-2 border-solid border-blue-400 rounded-lg' type="text" name="name" value={formData.name} onChange={handleChangeForm} />
            </label>
            <label className="w-full flex flex-col items-start justify-center gap-2">
              Email
              <input className='p-2 w-full border-2 border-solid border-blue-400 rounded-lg' type="email" name="email" value={formData.email} onChange={handleChangeForm} />
            </label>
            <label className="w-full flex flex-col items-start justify-center gap-2">
              Teléfono
              <input className='p-2 w-full border-2 border-solid border-blue-400 rounded-lg' type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChangeForm} />
            </label>
            <label className="w-full flex flex-col items-start justify-center gap-2">
              Empresa
              <input className='p-2 w-full border-2 border-solid border-blue-400 rounded-lg' type="text" name="enterprise" value={formData.enterprise} onChange={handleChangeForm} />
            </label>
            <div className='w-full flex flex-col items-center justify-center gap-4'>
              <button className='bg-blue-500 text-xl text-white rounded-xl py-2 w-full cursor-pointer hover:bg-blue-700 transition-all ease-out duration-200' type="submit">
                Crear
              </button>
              <button onClick={handleUpdateForm} className='bg-green-500 text-xl text-white rounded-xl py-2 w-full cursor-pointer hover:bg-green-700 transition-all ease-out duration-200' type="button">
                Actualizar
              </button>
            </div>
          </form>
        </section>
        <section className='w-full'>
          <div className='w-full overflow-x-auto'>
            <Table className='w-full bg-gray-300 rounded-xl'>
              <TableHead className='w-full'>
              <TableRow className='w-full'>
                <TableHeadCell className='p-6'>Nombre completo</TableHeadCell>
                <TableHeadCell className='p-6'>Email</TableHeadCell>
                <TableHeadCell className='p-6'>Teléfono</TableHeadCell>
                <TableHeadCell className='p-6'>Empresa</TableHeadCell>
                <TableHeadCell className='p-6'>
                  <span className="sr-only">Edit</span>
                </TableHeadCell>
                <TableHeadCell className='p-6'>
                  <span className="sr-only">borrar</span>
                </TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y">
              {data.map((row, index) => (
                <TableRow key={index} className="bg-gray-100">
                  <TableCell className="py-6">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>{row.enterprise}</TableCell>
                  <TableCell>
                    <button onClick={() => handleSetUpdateForm(row.id)} className="font-medium text-blue-600 hover:underline pr-6 cursor-pointer">
                      Edit
                    </button>
                  </TableCell>
                  <TableCell>
                    <button onClick={() => handleDeleteForm(row.id)} className="font-medium text-red-600 hover:underline pr-6 cursor-pointer">
                      Borrar
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            </Table>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
