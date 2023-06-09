import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export function useCharacters () {
  const [characters, setCharacters] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(data => {
        const { results } = data
        const data2 = results.map(({ name, mass, height }) => {
          return {
            id: uuidv4(),
            name,
            mass,
            height
          }
        })
        setCharacters(data2)
        setisLoading(false)
      })
      .catch(setError)
      // .catch(setError)
  }, [])

  function handleCharacter (payload) {
    setCharacters([
      payload,
      ...characters
    ])
  }
  return {
    characters,
    isLoading,
    error,
    handleCharacter
  }
}
