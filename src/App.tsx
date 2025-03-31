import { useEffect, useState } from 'react'
import './App.css'
import { fetchApi } from './utils/fetchApi'
import Card from './components/Card/Card'
import type { Listing } from './types'
import Navbar from './components/Navbar/Navbar'
import { Button } from './components/ui/button'

interface ResponseInterface {
  data: Listing[]
}

function App() {
  const [items, setItems] = useState<any[]>([])
  const [page, setPage] = useState<number>(1)
  const apiUrl = 'http://localhost:3000/items'
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const filters = {}
        const result = await fetchApi(apiUrl, page, filters)
        setItems(result.data)
      } catch (error) {
        console.log("Erro ao buscar dados:", error)
      }
    }
    fetchData()

  }, [])

  const fetchItems = async (page: number, filters = {}) => {
    try {
      const data = await fetchApi(apiUrl, page + 1, filters)
      if (Array.isArray(data.data)) {
        setItems((prevItems) => {
          if (!Array.isArray(prevItems)) {
            console.error("prevItems não é um array", prevItems);
            return [...data.data]; // Se não for um array, substitui o valor por data.data.
          }
          
          // Se for um array, faz o append
          setPage(page +1)
          return [...prevItems, ...data.data];
        });
      } else {
        console.error("Os dados recebidos não são um array.");
      }
    } catch (error) {
      console.log("erro ao adicionar itens")
    }
  }

  return ( 
    <div className='w-[100vw] max-w-screen text-white pb-10'>
      <Navbar></Navbar>
      <h1>CS-Float App</h1>
      <ul className='flex flex-wrap gap-4 justify-center p-4'>
        {items?.map((entry, index) => (
          <li key={index}>
            <Card listing={entry}></Card>
          </li>
        ))}
      </ul>
        <Button variant={'outline'} className="text-white bg-gray-800 border-white" onClick={() => fetchItems(page)}>Carregar mais</Button>
    </div>
  )
}

export default App
