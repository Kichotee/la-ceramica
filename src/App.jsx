import { useEffect, useState } from 'react'
import Hero from './components/hero'
import Nav from './components/nav'
import Popular from './components/popular'
import Products from './components/products'
import Store from './components/store'
import Footer from './components/Footer'
import Feedback from './components/Feedback'
import Sale from './components/sale'

function App() {
  
  
  function changeWheelSpeed(container, speedY) {
    var removed = false;
    var scrollY = 0;
    var handleScrollReset = function() {
      scrollY = container.scrollTop;
    };
    var handleMouseWheel = function(e) {
      e.preventDefault();
      scrollY += speedY * e.deltaY
      if (scrollY < 0) {
        scrollY = 0;
      } else {
        var limitY = container.scrollHeight - container.clientHeight;
        if (scrollY > limitY) {
          scrollY = limitY;
        }
      }
      container.scrollTop = scrollY;
    };
    container.addEventListener('mouseup', handleScrollReset, false);
    container.addEventListener('mousedown', handleScrollReset, false);
    container.addEventListener('mousewheel', handleMouseWheel, false);
    return function() {
      if (removed) {
        return;
      }
      container.removeEventListener('mouseup', handleScrollReset, false);
      container.removeEventListener('mousedown', handleScrollReset, false);
      container.removeEventListener('mousewheel', handleMouseWheel, false);
      removed = true;
    };
  }
  useEffect(()=>{
    // changeWheelSpeed(document.getElementById('App'),5)
      

      
  })

  return (
    <div id='App' className="App">
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
