import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({onPageChange, subPage, scrollTo}) => {

    return (
      <header className="header">
        <div className="header-medium" >
          <img
            src={`${process.env.PUBLIC_URL}/images/header.jpg`}
            alt="Forever Classic Style"
          />
        </div>

        <div className="header-small header-small-left" onClick={() => { onPageChange({ page: "main" }); subPage('streetwear'); scrollTo('start') } }>
        <Link to='/shopping/streetwear'>
          <img
            src={`${process.env.PUBLIC_URL}/images/streetwear.jpg`}
            alt="Streetwear"
          />
          <h1>Streetwear</h1>
        </Link>
        </div>

        <div className="header-small header-small-right" onClick={() => { onPageChange({ page: "main" }); subPage('outwear'); scrollTo('start') } }>
        <Link to='/shopping/outwear'>  
          <img
            src={`${process.env.PUBLIC_URL}/images/outwear.jpg`}
            alt="Outwear"
          />
          <h1>Outwear</h1>
        </Link>
        </div>
        
        <div className="header-small header-small-left" onClick={() => { onPageChange({ page: "main" }); subPage('summer'); scrollTo('start') } }>
        <Link to='/shopping/summer'>
          <img
            src={`${process.env.PUBLIC_URL}/images/summer.jpg`}
            alt="Summer"
          />
          <h1>Summer</h1>
        </Link>
        </div>
        
        <div className="header-small header-small-right" onClick={() => { onPageChange({ page: "main" }); subPage('sale'); scrollTo('start') } }>
        <Link to='/shopping/sale'>
          <img src={`${process.env.PUBLIC_URL}/images/sale.jpg`} alt="Sale" />
          <h1>Sale</h1>
        </Link>
        </div>
      </header>
    );
};

export default Header;