import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <a href='https://www.facebook.com' target='_blank' rel='noreferrer'><i className="fab fa-facebook-f"></i></a>
            <a href='https://www.instagram.com' target='_blank' rel='noreferrer'><i className="fab fa-instagram"></i></a>
            <a href='https://www.twitter.com' target='_blank' rel='noreferrer'><i className="fab fa-twitter"></i></a>
            <a href='https://www.pinterest.com' target='_blank' rel='noreferrer'><i className="fab fa-pinterest-p"></i></a>
            <p>
                <a href='https://zoltan.tech' target='_blank' rel='noreferrer'>Created by zoltan.tech</a>
            </p>
        </footer>
    );
};

export default Footer;