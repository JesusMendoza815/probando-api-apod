import { useState, useEffect } from 'react'
import Form from './components/Form'
import './App.scss'
import ParticlesBg from './components/ParticlesBg'

const { VITE_NASA_KEY } = import.meta.env

function App() {
  const [date, setDate] = useState('')
  const [dateInfo, setDateInfo] = useState({})
  const [loading, setLoading] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const getDateInfo = async () => {
      setLoading(true)
      setImageLoaded(false)
      const url = `https://api.nasa.gov/planetary/apod?api_key=${VITE_NASA_KEY}&date=${date}`
      const data = await fetch(url)
      const response = await data.json()
      setDateInfo(response)
      setLoading(false)
    }
    getDateInfo()
  }, [date])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }
  console.log(imageLoaded)
  return (
    <>
      {
        (loading && !imageLoaded)
        ? <ParticlesBg />
        : <img
        onLoad={handleImageLoad}
        src={dateInfo.url}
        alt='Universe image'
        className='absolute z-[-1] object-cover w-screen'
      />
      }
      
      
      <main className='flex w-100 md:w-[26.5rem]'>
        <aside className='p-8'>
          <span>
            <h1 className='font-bold text-6xl'>The Universe</h1>
            <h3 className='text-3xl'>When you Born</h3>
          </span>
          <Form setDate={setDate} date={date} />
          <h4 className='text-2xl mt-6'>Picture details</h4>
          <p className='text-[#5B8FB9]'>
            <span className='text-white font-bold'>Title: </span>
            {dateInfo.title}
          </p>
          <p className='text-[#5B8FB9] explanation my-1'>
            <span className='text-white font-bold'>Explanation: </span>
            {dateInfo.explanation}
          </p>
          <p className='text-[#5B8FB9]'>
            <span className='text-white font-bold'>Author: </span>
            {dateInfo.copyright || 'Nasa'}
          </p>
        </aside>
      </main>
    </>
  )
}

export default App
