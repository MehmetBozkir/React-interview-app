import { useState,useEffect } from 'react'
import './App.css'
import WeatherApp from './Component/WeatherApp';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function App() {


  return ( 
    <>
     
      <Navbar/>
      <WeatherApp/>
      <Footer/>
    </>
  )
}

export default App
