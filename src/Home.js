import React from 'react'
import "./Home.css"
import Navbar from './Navbar'
import Title from './Title'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Title/>
        <div id="intro">Hello and welcome to MLB database! This websites focus is aimed towards the team stats and history of the MLB. </div>
    
    </div>
  )
}
