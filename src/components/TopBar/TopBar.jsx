import * as React from 'react';
import './topbar.css'
import { MuiDrawer } from '../MuiDrawer';
import { MuiShoppingCart } from '../MuiShoppingCart';
import { MuiLoginIcon } from '../MuiLoginIcon'

function TopBar() {

    return (
        <header className='header' role='banner'>
            <div className='logo-container'>
                <a href="" className='logo' >
                    <img src="" alt="logo" />
                    <p alt="monogram logo" >Mi Ecommerce</p>
                </a>
            </div>

            <nav className='nav'>
                <ul className='nav-list'>
                    <li><a href="/">Mujer</a></li>
                    <li><a href="/">Hombre</a></li>
                    <li><a href="/">Niños</a></li>
                </ul>
            </nav>

            <div className='options'>
                <MuiLoginIcon />
                <MuiShoppingCart />
                <MuiDrawer />
            </div>
        </header>
    )
}

export default TopBar;