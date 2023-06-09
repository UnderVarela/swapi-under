import { useEffect, useState } from 'react'
async function fetchDog () {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await response.json()
  return data
}

function FetchApp () {
  const [data, setData] = useState({})
  const [counter, setCounter] = useState(0)
  // Una forma:
  const getData = async () => {
    const dataDog = await fetchDog()
    setData(dataDog)
  }

  // Otra forma 
  useEffect(() => {
    getData()
    //fetchDog().then(setData)
  }, [counter])

  const { message } = data
  return (
    <>
      <h1 className='text-4xl'>Fetch</h1>
      <img className='w-96' src={message} alt={message} />
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </>
  )
}

export default FetchApp
