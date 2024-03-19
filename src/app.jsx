import React from 'react'
import Header from './components/layout/header'
import Banner from './components/layout/banner'
import About from './components/layout/about'
import Table from './components/layout/table'
import Menu from './components/layout/menu'
import Today from './components/layout/today'
import Kevin from './components/layout/kevin'
import People from './components/layout/people'
import Bite from './components/layout/Bite'
import Meal from './components/layout/Meal'
import Food from './components/layout/Food'
import Gallery from './components/layout/Gallery'
import Email from './components/layout/Footer'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div>
        <Header/>
        <Banner/>
        <About/>
        <Table/>
        <Menu/>
        <Today/>
        <Kevin/>
        <People/>
        <Bite/>
        <Meal/>
        <Food/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default App