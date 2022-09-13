import React from 'react'
import Navigater from './components/navigater'
import CreateUser from './components/create_user'

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigater />
      <CreateUser />
    </div>
  )
}

export default App