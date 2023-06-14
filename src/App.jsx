import { useState } from 'react'

import { Navbar, About } from './components';
//import { Events, Footer } from './containers';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen max-w-7xl mx-auto">
          <About />
      </div>
    </>
  )
}

export default App


