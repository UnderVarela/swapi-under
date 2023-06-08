import { CustomButton } from './components/CustomButton'
import { useCounter } from './hooks/useCounter'

function CounterApp () {
  const [counter, incrementar, disminuir, reiniciar] = useCounter(4)
  const incremento = 4

  return (
    <>
      <h1 className='mb-5 text-5xl font-bold text-center'>Counter</h1>
      <strong className='block m-3 text-3xl text-center'>Incremento en {incremento}: {counter}</strong>
      <div className='flex justify-center gap-2'>
        <CustomButton onCustomClick={disminuir}>Disminuir</CustomButton>
        <CustomButton onCustomClick={reiniciar}>Reiniciar</CustomButton>
        <CustomButton onCustomClick={() => incrementar(incremento)}>Incrementar</CustomButton>
      </div>
    </>
  )
}

export default CounterApp
