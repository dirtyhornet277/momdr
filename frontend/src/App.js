import React from 'react'
import Header from './components/Header'
import Create from './components/Create'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Mom from './components/Mom';
import Error from './components/Error';
import Yeah from './components/Yeah';
const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create/>} />
        <Route path='/mom' element={<Mom />} />
        <Route path='/error' element={<Error />} />
        <Route path='/yeah' element={<Yeah />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
