import React from 'react'
import PropTypes from 'prop-types';
import Link from "@mui/material/Link";
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AuthenticationService from '../../Service/AuthenticationService';
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
            <AppBar sx={{backgroundColor:'white'}}>
                <nav>
                    <a href='/'>
                        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="logo" />
                    </a>
                    <div id="mySidenav" className='sidenav'>
                        <button>New Donor</button>
                        <button>Login</button>
                    </div>
                </nav>
                <div>
                  {AuthenticationService.isUserLoggedIn() ? (
                    <div className='auth_menu'>
                      <hr style={{height:'1px', margin:'0 150px', border:'none', backgroundColor: '#cccccc' }} />
                      <section>
                        <Link className='item' href="/dashboard" variant="body2">
                          Dashboard
                        </Link>
                        <Link className='item' href="/" variant="body2">
                          Home
                        </Link>
                        <Link className='item' href="/About" variant="body2">
                          About Us
                        </Link>
                        <Link className='item' href="/setting" variant="body2">
                          Settings
                        </Link>
                      </section>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
            </AppBar>
        </HideOnScroll>
    )
}

