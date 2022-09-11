import React from 'react'
import Navigater from './components/navigater'


// type Item = {
//     id: number
//     title: string
// }

// type Props = {
//   number: string
//   children: React.ReactNode
// }

// const Child: React.FC<Props> = ({ number, children }) => {
//   return (
//     <p>{ number }の{ children }</p>
//   )
// }

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigater />
    </div>
  )
}

export default App