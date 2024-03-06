import { useState, lazy, Suspense  } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import DynamicParentContainer from './components/DynamicParentContainer';
import PaginationContextWrapper from './context/PaginationContextWrapper';
import NotFound from './components/NotFound';
import User from './components/User';
import Cart from './components/Cart';
import WIP from './components/WIP';
import Movies from './components/Movies';
import Login from './components/Login';
import TestRouteComponent from './components/TestRouteComponent';

const LazyLoadedSettingsComponent = lazy(() => import('./components/Settings'));

function App() {
  
  return(
    <>
      <PaginationContextWrapper>
      <Suspense fallback={<div>Loading settings component...</div>}>
        <Routes>
          <Route path="/home" element={<DynamicParentContainer></DynamicParentContainer>}></Route>
          <Route path="/user" element={<User></User>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          {/* default case */}
          <Route path="/" element={ <Navigate to="/login" />}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/settings" element={LazyLoadedSettingsComponent}></Route>
          <Route path="/wip" element={<WIP></WIP>}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/user/profile/settings" element={<TestRouteComponent></TestRouteComponent>}></Route>          
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        </Suspense>
      </PaginationContextWrapper>
    </>
  )
}

export default App
