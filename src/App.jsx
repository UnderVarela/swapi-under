import { useState } from 'react'
import { CharacterForm } from './components/CharacterForm'
import { CharacterList } from './components/CharacterList'

function App () {
  const [users, setUsers] = useState([])
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
