import { useState } from 'react'
import Hero from './components/hero'
import Nav from './components/nav'
import Popular from './components/popular'
import Products from './components/products'
import Store from './components/store'
import Footer from './components/Footer'
import Feedback from './components/Feedback'
import Sale from './components/sale'

function App() {
  

  return (
    <div className="App">
      <div className="font-sans text-complementary relative overflow-hidden">
      <Nav/>
       <Hero/>
       <Popular/>
       <Store/>
       <Products/>
       <Feedback/>
       <Sale/>
       <Footer/>
      </div>
    </div>
  )
}

export default App
