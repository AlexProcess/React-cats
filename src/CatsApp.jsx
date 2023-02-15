import React from 'react'
import './CatsApp.css'
import { CatImage } from './Components/CatImage'
import { Header } from './Components/Header'

function CatsApp() {

  return (
   <section className='container__app'>
    <Header/>
    <CatImage/>
   </section> 
  )
}

export default CatsApp
