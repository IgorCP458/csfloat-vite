import { useEffect, useState } from 'react'
import './App.css'
import { fetchApi } from './utils/fetchApi'
import Card from './components/Card/Card'
import type { itemType } from './types'

interface dataType {
  listingId: string,
  state: string,
  price: string
  item: itemType,
}

interface ResponseInterface {
  data: dataType[]
}

function App() {
  const [response, setResponse] = useState<ResponseInterface>({data: []})
  const apiUrl = 'http://localhost:3000/items'
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchApi(apiUrl)
        setResponse(result)
      } catch (error) {
        console.log("Erro ao buscar dados:", error)
      }
    }
    fetchData()
  }, [])

  return ( 
    <div className='w-[100vw] max-w-screen'>
      <h1>CS-Float App</h1>
      <ul className='flex flex-wrap gap-4 justify-center p-4'>
        {response?.data?.map((entry, index) => (
          <li key={index}><Card listing={entry}></Card></li>
        ))}
      </ul>
    </div>
  )
}

export default App
