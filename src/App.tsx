import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import MainScreen from './screens/MainScreen/MainScreen'

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<MainScreen/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
