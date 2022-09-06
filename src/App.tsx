import React, { useState, useCallback } from 'react'
import Child_Out_Of_File from './Child'
import { Child1, Child2 } from './Children'

type Item = {
    id: number
    title: string
}

type Props = {
  number: string
  children: React.ReactNode
}

const Child: React.FC<Props> = ({ number, children }) => {
  return (
    <p>{ number }の{ children }</p>
  )
}

const App: React.FC = () => {
  const [ count, setCount ] = useState<number>(0)

  const handleIncrement = useCallback(() => {
    setCount(prev => prev +1)
  }, [])

  const handleDecrement = useCallback(() => {
    setCount(prev => prev -1)
  }, []);
  const greet: string = 'こんにちは React!!'
  const items: Item[] = [
    {
      id: 1,
      title: 'カップラーメン'
    }, {
      id: 2,
      title: '冷凍食品'
    }
  ]
  return (
    <div className="App">
      <div>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        <p>{ count }</p>
      </div>
      <Child1 />
      <Child2 />
      <Child_Out_Of_File />
      <Child number="1">子のコンポーネント</Child>
      <Child number="2">子のコンポーネント</Child>
      <ul>
      { items.map((item: Item) => (
          <li key={item.id}>{ item.title }</li>
      )) }
      </ul>
      <p>{ greet }</p>
    </div>
  )
}

export default App