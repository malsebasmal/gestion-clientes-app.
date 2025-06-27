import { useState, useEffect } from 'react'
import './App.css'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react"
import axios from "axios"

function App() {
  const [data, setData] = useState([])
  const [name, setName] = useState("none")
  const [email, setEmail] = useState("none")
  const [phoneNumber, setPhoneNumber] = useState("none")
  const [enterprise, setEnterprise] = useState("none")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/clients')
        setData(response.data)
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData()
  }, [])


  return (
    <>
      <header className='mb-6'>
        <h1>
          Gestión de clientes
        </h1>
      </header>
      <main className='flex items-center justify-center gap-10'>
        <section className='w-full'>
          <form action="" className="w-md p-8 rounded-xl flex flex-col items-center justify-center gap-6 bg-gray-100 shadow-gray-200 shadow-xl">
            <label htmlFor="" className="w-full flex flex-col items-start justify-center gap-2">
              Nombre completo
              <input className='p-2 w-full border-2 border-solid border-blue-400 rounded-lg' type="text" name="Nombre completo" id="" />
            </label>
            <label htmlFor="" className="w-full flex flex-col items-start justify-center gap-2">
              Email
              <input className='p-2 w-full border-2 border-solid border-blue-400 rounded-lg' type="email" name="" id="" />
            </label>
            <label htmlFor="" className="w-full flex flex-col items-start justify-center gap-2">
              Teléfono
              <input className='p-2 w-full border-2 border-solid border-blue-400 rounded-lg' type="tel" name="" id="" />
            </label>
            <label htmlFor="" className="w-full flex flex-col items-start justify-center gap-2">
              Empresa
              <input className='p-2 w-full border-2 border-solid border-blue-400 rounded-lg' type="text" name="" id="" />
            </label>
            <div className='w-full flex flex-col items-center justify-center gap-4'>
              <button className='bg-blue-500 text-xl text-white rounded-xl py-2 w-full' type="button">
                Crear
              </button>
              <button className='bg-green-500 text-xl text-white rounded-xl py-2 w-full' type="button">
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
              <TableRow className="bg-gray-100">
                <TableCell className="py-6">
                  Marcos
                </TableCell>
                <TableCell>marcos@gmail.com</TableCell>
                <TableCell>999 999 999</TableCell>
                <TableCell>Amazon</TableCell>
                <TableCell>
                  <a href="#" className="font-medium text-blue-600 hover:underline pr-6">
                    Edit
                  </a>
                </TableCell>
                <TableCell>
                  <a href="#" className="font-medium text-red-600 hover:underline pr-6">
                    Borrar
                  </a>
                </TableCell>
              </TableRow>
              {data.map((row, index) => (
                <TableRow key={index} className="bg-gray-100">
                  <TableCell className="py-6">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>{row.enterprise}</TableCell>
                  <TableCell>
                    <a href="#" className="font-medium text-blue-600 hover:underline pr-6">
                      Edit
                    </a>
                  </TableCell>
                  <TableCell>
                    <a href="#" className="font-medium text-red-600 hover:underline pr-6">
                      Borrar
                    </a>
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
