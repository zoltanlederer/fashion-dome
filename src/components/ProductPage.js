import React, {useContext, useEffect, useRef} from 'react';
import {ProductContext} from './ProductContext';
import './ProductPage.css';

const ProductPage = ({onPageChange, onSubPageChange, productItem, onAddToCart, scrollDown, scrollTo}) => {
    const [products, setProducts] = useContext(ProductContext);
    const jumpRef = useRef(null); 

    // Update url to direct product page
    const category = window.location.pathname.split('/');
    useEffect(() => {
      onPageChange({ page: "product", id: category[3] });
      onSubPageChange(category[2]);
    },[])


    // Site scroll to the product
    useEffect(() => {
      scrollTo('start');
      if(scrollDown === 'stop'){
        return
      }
      if(scrollDown === 'start'){
        jumpRef.current.scrollIntoView();
      }
    },);

    // Update quantity and size
    let counter = 1;
    const setQty = (e) => {
      if(e){  
        counter = e.target.value;
      }
    };

    let orderedSize = '';
    const setSize = e => {
      if(e.target.value !== 'noSize'){
        orderedSize = e.target.value;
      }
    }

    const addToCart = (counter, product, orderedSize) => {
      for (let i = 0; i < counter; i++) {
        onAddToCart(product, orderedSize)
      }
    };
  

    const content = () => (  
      
        products.map(product => {
          
          // Alert customization
          
          const sizeCheck = () => {
            const sizeClass = document.querySelector('.size');
            const qtyClass = document.querySelector('.qty');
            if (sizeClass.value === 'noSize') {
              alert('You need to select a size');
            }
            if (sizeClass.value === 'Small' ||
                sizeClass.value === 'Medium' ||
                sizeClass.value === 'Large') {
                addToCart(counter, product, orderedSize);
                alert('Your selected item is in the shopping cart');
                qtyClass.value = 1;
                sizeClass.value = 'noSize';
              }  
          } 
          
          if (productItem === product.itemCode) {
              return (
                <div className="product-page" key={product.itemCode} ref={jumpRef}>
                  <ul className="product-page-list">
                    <div className="product-page-list-part1">
                    {product.category === 'sale' ? <span className='product-page-sale'>sale</span> : '' }
                      <li className="product-page-list-item product-img">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/${product.image}`}
                          alt={product.brand}
                        />
                      </li>
                    </div>
                    <div className="product-page-list-part2">
                      <li className="product-page-list-item">
                        <h1>{product.brand}</h1>
                      </li>
                      <li className="product-page-list-item">
                        <h2>{product.description}</h2>
                      </li>
                      <li className="product-page-list-item">
                        ${product.price}
                      </li>
                      <li className="product-page-list-item product-page-list-stock">
                        {product.qty > 0 ? (
                          "In Stock"
                        ) : (
                          <span style={{ color: "#AB0000" }}>
                            Out of Stock
                          </span>
                        )}
                      </li>

                      <li className="product-page-list-item">
                        <select className="size" required onChange={(e) => setSize(e)}>
                          <option value="noSize" selected disabled>
                            Choose size
                          </option>
                          {product.size.map((item) => (
                            <option value={item} key={Math.random()}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <select name="qty" className="qty" onChange={(e) => setQty(e)}>
                          <option value="1" selected>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </li>
                      <li>
                        {product.qty > 0 ? (
                        <button id={product.itemCode} onClick={(e) => sizeCheck(e) }>
                          <i className="fas fa-shopping-cart"></i>&nbsp;Add to Cart
                        </button>
                        ) : (
                          <button className='product-page-btn-disabled' onClick={() => alert('Sorry this item is Out of Stock')}>
                            <i className="fas fa-shopping-cart"></i>&nbsp;Add to Cart
                          </button>
                        )}
                      </li>

                    </div>
                    <div className="product-page-list-part3">
                      <h1>Information</h1>
                      <div className="product-page-list-part3-information">
                        <div>
                          <li className="product-page-list-item">
                            <h2>Item code:</h2> {product.itemCode}
                          </li>
                          <li className="product-page-list-item">
                            <h2>Dress Style:</h2> {product.type}
                          </li>
                        </div>
                        <div>
                          <li className="product-page-list-item">
                            <h2>Description:</h2>
                            <ul>
                              {product.features.map((item) => (
                                <li key={Math.random()}>{item}</li>
                              ))}
                            </ul>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              );
          }
        }) 
    );

    return (
        <section>
         { content() }
        </section>
    );
};

export default ProductPage;