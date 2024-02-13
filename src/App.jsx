import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import DrawerList from './components/material-ui/DrawerList';
import UIGrid from './components/material-ui/UIGrid';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  )
}

export default App
