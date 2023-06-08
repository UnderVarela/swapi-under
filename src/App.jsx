import { useState } from 'react'
import { CharacterForm } from './components/CharacterForm'
import { CharacterList } from './components/CharacterList'
import { v4 as uuidv4 } from 'uuid'

function App () {
  const [users, setUsers] = useState([])
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
      setUsers(data2)
    })
  function handleCharacter (payload) {
    setUsers([
      payload,
      ...users
    ])
  }
  return (
    <>
      <h1>SWAPI</h1>
      <CharacterForm onAddCharacter={handleCharacter} />
      <CharacterList characters={users} />
    </>
  )
}

export default App
