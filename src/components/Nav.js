import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = ({onPageChange, subPage, scrollTo}) => {
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
          <ul>
            <li>
            <Link to='/'>
              <button
                onClick={() => {
                  onPageChange({ page: "main" });
                  subPage("");
                  scrollTo('stop');
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
                }}>About Us</button>
            </Link>
            </li>
            <li>
            <Link to='/contact'>
              <button 
                onClick={() => {
                  onPageChange({ page: "contact" });
                  subPage("");
                }}>Contact Us</button>
            </Link>
            </li>
            <li>
            <Link to='/cart'>
              <button onClick={() => onPageChange({ page: "shoppingCart" })}>
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