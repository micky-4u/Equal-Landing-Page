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
      <div className="fixed bottom-0 right-0 p-4">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App
