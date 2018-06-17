import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
    <div className="top-bar" data-topbar role="navigation">
        <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
                <li className="menu-text">Site Title</li>
                <li>
                    <a>One</a>
                    <ul className="menu vertical">
                        <li><a>One</a></li>
                        <li><a>Two</a></li>
                        <li><a>Three</a></li>
                    </ul>
                </li>

                <li><NavLink exact to="/" activeClassName="selected">HomePage</NavLink></li>
                <li><NavLink exact to="/account" activeClassName="selected">Account</NavLink></li>
                <li><NavLink exact to="/transaction" activeClassName="selected">Transaction</NavLink></li>
                <li><NavLink exact to="/getData" activeClassName="selected">getAllUser</NavLink></li>
            </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
                <li><input type="search" placeholder="Search"/></li>
                <li>
                    <button type="button" className="button">Search</button>
                </li>
            </ul>
        </div>
    </div>
);

export default Nav;


