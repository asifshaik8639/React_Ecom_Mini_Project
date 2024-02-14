import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import PaginationContextWrapper from './context/PaginationContextWrapper';
import NotFound from './components/NotFound';
import User from './components/User';
import Cart from './components/Cart';
import Settings from './components/Settings';
import WIP from './components/WIP';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaginationContextWrapper>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/user" element={<User></User>}></Route>
          <Route path="/home" element={ <Navigate to="/" />}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/settings" element={<Settings></Settings>}></Route>
          <Route path="/wip" element={<WIP></WIP>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </PaginationContextWrapper>
    </>
  )
}

export default App
