import React from 'react';
import Icon from '@material-ui/core/Icon';
import InventoryIcon from '@mui/icons-material/Inventory';
import Link from '@material-ui/core/Link';

function SideDrawer({onIconClickHandler}) {

  return (
    <div className='side-drawer-container'>

        <a href="#home" onClick={(e) => {onIconClickHandler(e); }}>
            <i className="fa fa-fw fa-home" /> Home
        </a>
        <a href="#services" onClick={(e) => {onIconClickHandler(e); }}>
            <i className="fa fa-fw fa-wrench" /> Services
        </a>
        <a href="#clients" onClick={(e) => {onIconClickHandler(e); }}>
            <i className="fa fa-fw fa-user" /> Clients
        </a>
        <a href="#contact"  onClick={(e) => {onIconClickHandler(e); }}>
            <i className="fa fa-fw fa-envelope" /> Contact
        </a>
    </div>
  )
}

export default SideDrawer;