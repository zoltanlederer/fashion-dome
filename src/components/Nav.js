import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = ({onPageChange, subPage, scrollTo}) => {

    const [navToggle, setNavToggle] = useState(true)

    let toggleBtn = navToggle ? 'nav-list nav-list-none' : 'nav-list nav-list-display';

    return (
      <header className="nav-header">
        <div>
          <h1>
          <Link to='/'>
            <button onClick={() => {
                  onPageChange({ page: "main" });
                  subPage("");
                  scrollTo('stop');
                }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/fashion-dome-logo.png`}
                alt="Fashion Dome"
              />
            </button>
          </Link>
          </h1>
        </div>
        <nav className="nav-nav">
          <button className="nav-toggle" onClick={() => setNavToggle(!navToggle)} ><i className="fas fa-bars "></i></button>
          <ul className={toggleBtn}>
            <li>
            <Link to='/'>
              <button
                onClick={() => {
                  onPageChange({ page: "main" });
                  subPage("");
                  scrollTo('stop');
                  setNavToggle(!navToggle);
                }}
              >
                Home
              </button>
            </Link>
            </li>
            <li>
            <Link to='/about'>
              <button 
                onClick={() => {
                  onPageChange({ page: "about" });
                  subPage("");
                  setNavToggle(!navToggle);
                }}>About Us</button>
            </Link>
            </li>
            <li>
            <Link to='/contact'>
              <button 
                onClick={() => {
                  onPageChange({ page: "contact" });
                  subPage("");
                  setNavToggle(!navToggle);
                }}>Contact Us</button>
            </Link>
            </li>
            <li>
            <Link to='/cart'>
              <button onClick={() => { 
                onPageChange({ page: "shoppingCart" })
                setNavToggle(!navToggle);
                }}
              >
                <i className="fas fa-shopping-cart"></i>
                &nbsp;Shopping Cart
              </button>
            </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
};

export default Nav;