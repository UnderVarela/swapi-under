import { useId, forwardRef } from 'react'
import PropTypes from 'prop-types'

/**
 * forwardRef le permite a tu componente exponer un nodo DOM al componente padre con una ref.
 * Referencia: https://es.react.dev/reference/react/forwardRef
 */
const CustomInput = forwardRef(({ children, ...props }, ref) => {
  const id = useId()
  return (
    <>
      {
        children &&
          (
            <label
              className='block mb-2 font-bold text-gray-700'
              htmlFor={id}
            >
              {children}
            </label>
          )
      }
      <input
        className='block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500'
        id={id}
        ref={ref}
        {...props}
      />
    </>
  )
})

CustomInput.propTypes = {
  children: PropTypes.any
}

// Para evitar el mensaje de depuración de eslint de react/display-name
// https://9to5answer.com/using-forwardref-with-proptypes-and-eslint
CustomInput.displayName = 'CustomInput'

export {
  CustomInput
}
