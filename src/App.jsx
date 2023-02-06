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
import Show from './components/Show'
import Loader from './components/loader'

function App() {

let [isLoading, setIsLoading]= useState(false)

setTimeout(() => {
  setIsLoading(true)
}, 6000)
  return (
   
   
   isLoading ==false ? (
   <>
      <Loader />
   </>): (
    <div id='App' className="App">
      <div className="font-sans text-complementary relative overflow-hidden scroll-smooth tracking-wide">
      <Nav/>
       <Hero/>
       <Popular />
       <Store/>
       <Feedback/>
       <Sale/>
       <FormPage/>
       <Show/>
       <Footer/>
      </div>
    </div>)
  )
}

export default App
