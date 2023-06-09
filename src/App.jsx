import { CharacterForm } from './components/CharacterForm'
import { CharacterList } from './components/CharacterList'
import { useCharacters } from './hooks/useCharacters'

function App () {
  const { handleCharacter, isLoading, error, characters } = useCharacters()
  return (
    <>
      <h1>SWAPI</h1>
      <CharacterForm onAddCharacter={handleCharacter} />
      {isLoading && 'Cargando...'}
      {error && error?.message}
      <CharacterList characters={characters} />
    </>
  )
}

export default App
