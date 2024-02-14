import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import ContactsIcon from '@mui/icons-material/Contacts';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';

function SideDrawer() {

   const onIconClickHandler = (event) => {
        console.log('onIconClickHandler',event);
   }

  return (
    <div className='side-drawer-container'>
        <div className='side-drawer-item'>
            <Link component={RouterLink} to="/home" relative="path" onClick={(e) => onIconClickHandler(e) } >
                <HomeIcon fontSize='large' /> 
            </Link>
            <label htmlFor="">Home</label>
        </div>

        <div className='side-drawer-item'>
            <Link component={RouterLink} to="/wip" relative="path" onClick={(e) => onIconClickHandler(e) }>
                <ContactsIcon fontSize='large'/> 
            </Link>
            <label htmlFor="">User Profile</label>
        </div>

        <div className='side-drawer-item'>
            <Link component={RouterLink} to="/wip" relative="path" onClick={(e) => onIconClickHandler(e) }>
                <ShoppingCartIcon fontSize='large'/> 
            </Link>
            <label htmlFor="">Cart</label>
        </div>

        <div className='side-drawer-item'>
            <Link component={RouterLink} to="/wip" relative="path" onClick={(e) => onIconClickHandler(e) }>
                <SettingsIcon fontSize='large'/> 
            </Link>
            <label htmlFor="">Settings</label>
        </div>
    </div>
  )
}

export default SideDrawer;