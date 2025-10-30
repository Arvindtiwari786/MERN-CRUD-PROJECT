import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Insert from './Insert';
import Display from './Display';
import Search from './Search';
import Update from './Update';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='insert' element={<Insert/>} />
          <Route path='display' element={<Display/>} />
          <Route path='search' element={<Search/>} />
          <Route path='update/:id' element={<Update/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App