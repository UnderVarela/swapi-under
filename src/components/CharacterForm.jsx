import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from '../hooks/useForm'
import { Message } from './Message'

export function CharacterForm ({ onAddCharacter }) {
  const { nombre, peso, altura, handleChange } = useForm({ nombre: '', peso: 0, altura: 0 })
  const [isEmptyName, setIsEmptyName] = useState(false)
  const nombreRef = useRef(null)
  const handleSubmit = (event) => {
    event.preventDefault()
    setIsEmptyName(false)
    if (!nombre.trim().length) {
      setIsEmptyName(true)
      // poner cursor en su sitio. En JS: document.querySelector('#nombre').focus()
      // en React:
      nombreRef.current.focus()

      return
    }
    // console.log(`Nombre: ${nombre}, Peso: ${peso}, Altura: ${altura}`)
    onAddCharacter({ id: uuidv4(), name: nombre, mass: peso, height: altura })
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-lg mx-auto'>
      <div className='mb-4'>
        <label htmlFor='nombre' className='block mb-2 font-bold text-gray-700'>
          Nombre
          {
            isEmptyName && <Message textMessage='El campo no puede estar vacío' />
          }
        </label>
        <input
          ref={nombreRef}
          type='text'
          id='nombre'
          name='nombre'
          onChange={handleChange}
          value={nombre}
          placeholder='Introduce tu nombre'
          className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='peso' className='block mb-2 font-bold text-gray-700'>
          Peso (kg)
        </label>
        <input
          type='number'
          id='peso'
          name='peso'
          onChange={handleChange}
          value={peso}
          placeholder='Introduce tu peso'
          className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='altura' className='block mb-2 font-bold text-gray-700'>
          Altura (cm)
        </label>
        <input
          type='number'
          name='altura'
          id='altura'
          onChange={handleChange}
          value={altura}
          placeholder='Introduce tu altura'
          className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
        />
      </div>
      <button
        type='submit'
        className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
      >
        Enviar
      </button>
    </form>
  )
}

CharacterForm.propTypes = {
  onAddCharacter: PropTypes.func.isRequired
}
