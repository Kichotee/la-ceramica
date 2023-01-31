import { useEffect, useState } from 'react'
import Hero from './components/hero'
import Nav from './components/nav'
import Popular from './components/popular'
import Products from './components/products'
import Store from './components/store'
import Footer from './components/Footer'
import Feedback from './components/Feedback'
import Sale from './components/sale'
import FormPage from './components/FormPage'

function App() {
  
  
  
  
  // 1.5  * default_scroll_speed
  
  
  

useEffect(()=>{

})

  return (
    <div id='App' className="App">
      <div className="font-sans text-complementary relative overflow-hidden scroll-smooth tracking-wide">
      <Nav/>
       <Hero/>
       <Popular />
       <Store/>
       {/* <Products/> */}
       <Feedback/>
       <Sale/>
       <FormPage/>
       <Footer/>
      </div>
    </div>
  )
}

export default App
