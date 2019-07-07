import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PageLayout from './components/PageLayout'
import GradientsContextProvider from './contexts/GradientsContext'

const App = () => {
  return (
    <div className="App">
      <GradientsContextProvider>
        <Navbar />
        <PageLayout />
      </GradientsContextProvider>
    </div>
  )
}

export default App
