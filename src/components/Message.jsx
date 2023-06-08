import React from 'react'
import PropTypes from 'prop-types'
export function Message ({ textMessage = 'Algo ha ido mal' }) {
  return (
    <div className='relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded' role='alert'>
      <strong className='font-bold'>Error!</strong>
      <span className='block sm:inline'>{textMessage}</span>
    </div>
  )
}

Message.propTypes = {
  textMessage: PropTypes.string
}
