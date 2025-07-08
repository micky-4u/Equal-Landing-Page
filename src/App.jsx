import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import CircaOrigin from "./sections/CircaOrigin";
import HowItWorks from "./sections/HowItWorks";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Hero />
        <Features />
        <CircaOrigin />
        <HowItWorks />
        <CallToAction />
        <Footer />
      </div>
     
    </>
  )
}

export default App
