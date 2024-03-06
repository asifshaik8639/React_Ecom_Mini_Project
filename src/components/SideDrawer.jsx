import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import ContactsIcon from '@mui/icons-material/Contacts';
// import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import ShopIcon from '@mui/icons-material/Shop';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { CDN_IMAGE_URL } from  '../utils/Constants' ; // '../utils/Constants';

function SideDrawer({onIconClickHandler}) {

  return (
    <div className='side-drawer-container'>

        <div className='side-drawer-cdn-bg-image'>
            {/*  this is added to add the background  */}
        </div>
        <div className='side-drawer-item'>
            <Link name="Home" onClick={(e) => onIconClickHandler(e) } >
                <ShopIcon fontSize='large' />
                <label htmlFor=""> Shopping</label> 
            </Link>
        </div>

        <div className='side-drawer-item'>
            <Link name="Movies" onClick={(e) => onIconClickHandler(e) } >
                <LocalMoviesIcon fontSize='large' />
                <label htmlFor=""> Movies</label> 
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