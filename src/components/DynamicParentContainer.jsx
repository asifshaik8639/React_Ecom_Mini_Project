import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import debounce from '../utils/debounce';
import FilterLabel from './FilterLabel';
import { Skeleton } from '@mui/material';
import SideDrawer from './SideDrawer';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { usePaginationContext } from '../context/PaginationContextWrapper';

import Home from './Home';
import NotFound from './NotFound';
import User from './User';
import Settings from './Settings';
import Cart from './Cart';
import WIP from './WIP';
import Movies from './Movies';

const HomeComponent = () => <Home/>;
const NotFoundComponent = () => <NotFound/>;
const UserComponent = () => <User/>;
const SettingsComponent = () => <Settings/>;
const CartComponent = () => <Cart/>;
const WIPComponent = () => <WIP/>;
const MoviesComponent = () => <Movies/>;

const componentMap = {
    Home: HomeComponent,
    NotFound: NotFoundComponent,
    User: UserComponent,
    Settings: SettingsComponent,
    Cart: CartComponent,
    Movies: MoviesComponent,
    WIP: WIPComponent
};


function DynamicParentContainer() {
    let { 
        selectedComponent, 
        setSelectedComponent,
        isSideBarOpen
    } = usePaginationContext();

 const onIconClickHandler = (event) => {
    console.log(' onIconClickHandler ComponentToLoad => ', event.currentTarget.name);
    const componentKey = event.currentTarget.name || 'Home';
    // const ComponentToLoad = componentMap[componentKey];
    const ComponentToLoad = componentMap[componentKey];
    setSelectedComponent(<ComponentToLoad />);
  }

  console.log('value of isSideBarOpen',isSideBarOpen);
  let sidebarStyle = {
    flex: isSideBarOpen ? '25%' : 0
  };

  return (
          <div className='app-container'>

                <div id="appSideNav" style={sidebarStyle} className='fixed-side-bar-container'>
                    <SideDrawer onIconClickHandler={onIconClickHandler}></SideDrawer>
                </div>

                <div className='main-container'>
                    {selectedComponent && <>{selectedComponent}</>}
                </div>

          </div>

        );
}
export default DynamicParentContainer;