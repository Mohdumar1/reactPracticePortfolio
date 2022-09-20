import React from 'react'
import Herosection from '../components/Herosection'

const About = () => {

  const data = {
    name: "MOHD UMAR",
    img: "about1.svg",
    para: "I am a 21 year old self tought guy live in Delhi,I have a knowledge of Html(5), Css(3) with its framwork like Bootstrap and Tailwind, Javascript with react and I know how to built your ideas and designs into website with mobile friendly layouts."
  }

  return (
    <Herosection {...data} />
  )
};

export default About