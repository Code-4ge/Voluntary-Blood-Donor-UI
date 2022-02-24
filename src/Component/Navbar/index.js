import React from 'react'
import PropTypes from 'prop-types';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar'

import './Navbar.css'

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
  };

export default function Navbar() {

    return (
        <HideOnScroll>
            <AppBar>
                <nav>
                    <a href='#'>
                        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="logo" />
                    </a>
                    <div id="mySidenav" className='sidenav'>
                        <button>New Donor</button>
                        <button>Login</button>
                    </div>
                </nav>
            </AppBar>
        </HideOnScroll>
    )
}

