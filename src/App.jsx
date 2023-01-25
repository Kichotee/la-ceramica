import { useState } from 'react'
import Hero from './components/hero'
import Nav from './components/nav'
import Popular from './components/popular'
import Store from './components/store'

function App() {
  

  return (
    <div className="App">
      <div className="font-sans text-[#0b4142] relative overflow-hidden">
      <Nav/>
       <Hero/>
       <Popular/>
       <Store/>
      </div>
    </div>
  )
}

export default App
