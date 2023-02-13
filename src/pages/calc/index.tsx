import { ChangeEvent, useState } from 'react'
import { normalizeCurrency, priceFormatter } from '../../utils'

const Calc = () => {
  const [range, setRange] = useState<string>('')
  const [andar, setAndar] = useState<string>('')
  const [caixa, setCaixa] = useState<string>('')
  const [parcelaCaixa, setParcelaCaixa] = useState<string>('')
  const [entrada, setEntrada] = useState<string>('')
  const [parcelaDaConstrutora, setParcelaDaConstrutora] = useState('')

  const parseAndar = andar ? parseInt((andar).replace(/[^0-9]/g, '')) / 100 : 0
  const parseCaixa = caixa ? parseInt((caixa).replace(/[^0-9]/g, '')) / 100 : 0
  const parseEntrada = entrada ? parseInt((entrada).replace(/[^0-9]/g, '')) / 100 : 0
  const valorParcelaCaixa = parcelaCaixa ? parseInt((parcelaCaixa).replace(/[^0-9]/g, '')) / 100 : 0
  const parseParcelaDaConstrutora = Number(parcelaDaConstrutora)
  const taxaDeEvolucaoDeObra = Number(range)

  const calcValue =
    ((parseAndar - parseCaixa - parseEntrada) / parseParcelaDaConstrutora) +
    (valorParcelaCaixa * (taxaDeEvolucaoDeObra / 100))
    const totalValue = isNaN(calcValue)
      ? 0
      : calcValue

  return (
    <div className="bg-zinc-800 border-2 grid grid-cols-2">

      <div className='mx-3 my-3'>
        <h1 className="ml-1 mt-2">Calculo de Parcelas</h1>

        <div className="mt-3 ml-3 grid">
          <label htmlFor="">Insira o valor do imóvel</label>
          <input
            type="text"
            className='bg-zinc-200 text-zinc-900 text-center h-6 w-44'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setAndar(normalizeCurrency(e.target.value))
            }}
            placeholder='R$ 0,00'
            value={andar && `R$ ${andar}`}
          />
        </div>

        <div className="mt-3 ml-3 grid">
          <label htmlFor="">Insira o valor da Caixa</label>
          <input
            type="text"
            className='bg-zinc-200 text-zinc-900 text-center h-6 w-44'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setCaixa(normalizeCurrency(e.target.value))
            }}
            placeholder='R$ 0,00'
            value={caixa && `R$ ${caixa}`}
          />
        </div>

        <div className="mt-3 ml-3 grid">
          <label htmlFor="">Insira o valor da PC</label>
          <input
            type="text"
            className='bg-zinc-200 text-zinc-900 text-center h-6 w-44'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setParcelaCaixa(normalizeCurrency(e.target.value))
            }}
            placeholder='R$ 0,00'
            value={parcelaCaixa && `R$ ${parcelaCaixa}`}
          />
        </div>

        <div className="mt-3 ml-3 grid">
          <label htmlFor="">Insira da entrada</label>
          <input
            type="text"
            className='bg-zinc-200 text-zinc-900 text-center h-6 w-44'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEntrada(normalizeCurrency(e.target.value))
            }}
            placeholder='R$ 0,00'
            value={entrada && `R$ ${entrada}`}
          />
        </div>

        <div className="mt-3 ml-3 grid">
          <label htmlFor="">Insira parcelas da cons.</label>
          <input
            type="text"
            className='bg-zinc-200 text-zinc-900 text-center h-6 w-44'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setParcelaDaConstrutora(e.target.value)
            }}
            placeholder='Em meses, ex.: 27'
          />
        </div>
      </div>

      <div className='mt-11 border-l-2'>
        <div className="mt-3 ml-3 grid">
          <label htmlFor="">Valor das Parcelas</label>
          <input
            type="text"
            placeholder='R$ 0,00'
            value={priceFormatter.format(totalValue)}
            className='cursor-not-allowed bg-zinc-400 text-zinc-900 text-center h-6 w-44'
          />
        </div>

        <div className="mt-3 ml-3 grid">
          <label htmlFor="">Valor da construtora</label>
          <input
            type="text"
            placeholder='R$ 0,00'
            value={priceFormatter.format(parseAndar - parseCaixa)}
            className='cursor-not-allowed bg-zinc-400 text-zinc-900 text-center h-6 w-44'
          />
        </div>
        <div className='text-center grid mt-5'>
          <label htmlFor="">Evolução de obra</label>
          <div>
            <span>30%</span>
            <input
              type="range"
              min='30'
              max='80'
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setRange(e.target.value)
              }} />
            <span>80%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calc
