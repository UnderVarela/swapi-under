import PropTypes from 'prop-types'
export function CharacterList ({ characters = [] }) {
  return (
    <ul className='bg-white divide-y divide-gray-200 rounded-md shadow-md overflow-hidden mt-4'>
      {
        characters.map(({ id, name, mass, height }) => (
          <li key={id} className='px-6 py-4'>
            <p className='text-gray-900 font-semibold'>{name}</p>
            <p className='text-gray-500'>Peso: {mass} /Altura: {height}</p>
          </li>
        ))
      }
    </ul>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.array
}
