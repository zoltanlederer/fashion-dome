import React, {useEffect, useRef} from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const jumpRef = useRef(null);

    useEffect(() => {
      jumpRef.current.scrollIntoView();
    },);

    return (
        <div className='about' ref={jumpRef}>
            <h1>About Us</h1>
            <h2>Fashion Dome Store</h2>
            <p>
            Thanks so much for visiting our online store.
            Our team is excited to provide you with an impeccable online shopping experience and remains available to assist at any time. 
            If you have questions, comments or concerns about your order or the content found within this website, 
            please feel free to contact us via telephone or email and one of our experienced team members will get back to you right away. 
            Again, thanks for visiting our store and we look forward to serving you in the future.
            </p>
        </div>
    );
};

export default AboutUs;