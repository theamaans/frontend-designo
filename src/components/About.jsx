import React from 'react'
import Abt_Section1 from './Abt_Section1'
import Navbar from './Navbar'
import Abt_Section2 from './Abt_section2'
import Abt_Section3 from './Abt_Section3'
import Abt_Section4 from './Abt_Section4'
import Abt_Section5 from './Abt_Section5'
import Abt_Section6 from './Abt_Section6'
import Abt_Section7 from './Abt_Section7'

const About = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Abt_Section1 />
      <Abt_Section2 />
      <Abt_Section3 />
      <Abt_Section4 />
      <Abt_Section5 />
      <Abt_Section6 />
      <Abt_Section7 />
   
    </div>
  )
}

export default About
