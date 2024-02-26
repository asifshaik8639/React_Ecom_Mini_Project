import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import DynamicParentContainer from './components/DynamicParentContainer';
import PaginationContextWrapper from './context/PaginationContextWrapper';
import NotFound from './components/NotFound';
import User from './components/User';
import Settings from './components/Settings';
import Cart from './components/Cart';
import WIP from './components/WIP';
import Movies from './components/Movies';
import Login from './components/Login';

function App() {

   console.log('In App jsx ');

  return (
    <>
      <PaginationContextWrapper>
        <Routes>
          <Route path="/home" element={<DynamicParentContainer></DynamicParentContainer>}></Route>
          <Route path="/user" element={<User></User>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          {/* default case */}
          <Route path="/" element={ <Navigate to="/login" />}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/settings" element={<Settings></Settings>}></Route>
          <Route path="/wip" element={<WIP></WIP>}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </PaginationContextWrapper>
    </>
  )
}

export default App
