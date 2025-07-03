import { useState } from 'react'
import { Navbar } from './Component/navbar/navbar'
import { Hero } from './Component/hero/hero'
import { About } from './Component/about/about'
import { Services } from './Component/services/service'
import { MyWork } from './Component/myWork/myWork'
import { Contact } from './Component/contact/contact'
import { Footer } from './Component/footer/footer'





function App() {
 
  return (
    
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}

export default App
