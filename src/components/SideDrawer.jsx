import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import ContactsIcon from '@mui/icons-material/Contacts';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';

function SideDrawer({onIconClickHandler}) {

  return (
    <div className='side-drawer-container'>
        <div className='side-drawer-item'>
            <Link name="Home" onClick={(e) => onIconClickHandler(e) } >
                <HomeIcon fontSize='large' />
                <label htmlFor=""> Home</label> 
            </Link>
            
        </div>

        <div className='side-drawer-item'>
            <Link name="User"  onClick={(e) => onIconClickHandler(e) }>
                <ContactsIcon fontSize='large'/>
                <label htmlFor=""> User Profile</label>
            </Link>
            
        </div>

        <div className='side-drawer-item'>
            <Link name="Cart"  onClick={(e) => onIconClickHandler(e) }>
                <ShoppingCartIcon fontSize='large'/>
                <label htmlFor=""> Cart</label>
            </Link>
            
        </div>

        <div className='side-drawer-item'>
            <Link name="Settings"  onClick={(e) => onIconClickHandler(e) }>
                <SettingsIcon fontSize='large'/>
                <label htmlFor=""> Settings</label>
            </Link>
            
        </div>
    </div>
  )
}

export default SideDrawer;