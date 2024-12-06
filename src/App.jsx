import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RecipeDetails from './pages/RecipeDetails'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/food-item/:id' element={<RecipeDetails />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
