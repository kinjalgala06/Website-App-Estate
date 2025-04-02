import React from 'react'

import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonials from './Testimonials'
import Contact from './Components/Contact'
import { ToastContainer} from 'react-toastify';
import Footer from './Components/Footer'

function App() {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
      

  )
}

export default App