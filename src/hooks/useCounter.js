import { useState } from 'react'
export function useCounter (initialValue) {
  const [counter, setCounter] = useState(initialValue)
  const disminuir = (incremento = 1) => setCounter(counter - incremento)
  const reiniciar = (incremento = 0) => setCounter(incremento)
  const incrementar = (incremento = 1) => setCounter(counter + incremento)
  return [
    counter,
    incrementar,
    disminuir,
    reiniciar
  ]
}
