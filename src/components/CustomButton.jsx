import PropTypes from 'prop-types'
import React from 'react'

export function CustomButton ({ onCustomClick, children }) {
  const handleClick = () => {
    onCustomClick()
  }
  return (
    <button
      onClick={() => handleClick()}
      className='px-3 py-1 text-white transition duration-1000 ease-in-out bg-blue-300 rounded hover:bg-blue-800'
    >
      {children}
    </button>
  )
}

CustomButton.propTypes = {
  children: PropTypes.any,
  onCustomClick: PropTypes.func
}
