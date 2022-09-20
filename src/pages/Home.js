import React from 'react'
import Herosection from '../components/Herosection'
import Contact from './Contact'
import Services from './Services'

const Home = () => {
  const data = {
    name: "Ummi",
    img: "hero.svg",
    para: "I'm a Front-end Developer and a freelancer based in Delhi.."
  }
  return (
    <>
  <Herosection {...data}/>
  <Services/>
  <Contact/>
  </>
  )
}

export default Home