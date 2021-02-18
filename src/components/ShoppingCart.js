import React, {useEffect, useRef} from 'react';
import './ShoppingCart.css';
import { Link } from 'react-router-dom';

const ShoppingCart = ({productItemsInCart, removeFromCart, onPageChange}) => {
    const jumpRef = useRef(null);

    useEffect(() => {
      jumpRef.current.scrollIntoView();
    },);

    const content = () => {
        return (
            productItemsInCart.map(item => (
                <>           
                <li className='cart-item' key={item.itemCode}>      
                    <span onClick={() => onPageChange({ page: "product", id: item.itemCode }) }>
                        <Link to={`shopping/${item.category}/${item.itemCode}`}>
                        {item.category === 'sale' ? <span className='cart-item-sale'>sale</span> : '' }
                        <img className='cart-item-img'
                            src={`${process.env.PUBLIC_URL}/images/${item.image}`}
                            alt={item.brand}
                        />
                         </Link>    
                    </span>

                    <span className='cart-item-name'  onClick={() => onPageChange({ page: "product", id: item.itemCode }) }>
                        <Link to={`shopping/${item.category}/${item.itemCode}`}>
                        <p><span className='cart-item-name-bold'>{item.brand}</span><br></br>{item.description}</p>
                        </Link>
                    </span>
                    
                    <span>${item.price}</span>
                    <span className='cart-item-qty'> 
                    { item.orderedSizeSmall > 0 ? <span>{item.orderedSizeSmall} - Small<button className='delete-btn' onClick={() => removeFromCart(item, item.itemCode, 'Small')}>&nbsp; &#10006;</button></span>  : '' }
                    { item.orderedSizeSmall > 0 ? <br></br>  : '' }
                    
                    { item.orderedSizeMedium > 0 ? <span>{item.orderedSizeMedium} - Medium<button className='delete-btn' onClick={() => removeFromCart(item, item.itemCode, 'Medium')}>&nbsp; &#10006;</button></span>  : '' }
                    { item.orderedSizeMedium > 0 ? <br></br>  : '' }
                    
                    { item.orderedSizeLarge > 0 ? <span>{item.orderedSizeLarge} - Large<button className='delete-btn' onClick={() => removeFromCart(item, item.itemCode, 'Large')}>&nbsp; &#10006;</button></span>  : '' }
                    { item.orderedSizeLarge > 0 ? <br></br>  : '' }
                    </span>
                    <span>${ Math.round((item.ordered * item.price) * 100) / 100 }</span>
                </li>
                </>
            ))
        );
    };

    const total = () => {
        let totalPrice = 0;
        productItemsInCart.map(item => (
            totalPrice += Math.round((item.ordered * item.price) * 100) / 100,
             `${Math.round(totalPrice * 100) / 100}`
        ))

        return (
            <>
            <li className='cart-item'>
                <span className='cart-total'><h2>Total</h2><h1>${Math.round(totalPrice * 100) / 100}</h1></span>
            </li>
            </>
        );
    };

    if ( productItemsInCart.length === 0 ) {
        return (
            <div className='empty-cart' ref={jumpRef}><h1>Your shopping cart is empty.</h1></div>
        )
    } else {
        return (
            
            <div className='cart-container' ref={jumpRef}>
                <div className='cart-header'><p>Shopping Cart</p></div>
                <ul className='cart'>
                    <li className='cart-item cart-item-header' key='999'>
                        <span className='cart-name'>ITEMS</span>
                        <span className='cart-price'>PRICE</span>
                        <span className='cart-qty'>QTY</span>
                        <span className='cart-total'>TOTAL</span>
                    </li>
                    { content() }
                    { total() }
                </ul>
                <div className='cart-checkout'>
                    <h1><button className='cart-proceed-btn' onClick={() => removeFromCart('All')}>Proceed to checkout</button></h1>
                </div>
            </div>
        );    
    }

    
};

export default ShoppingCart;