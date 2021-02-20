import React, {useContext, useEffect, useRef} from 'react';
import {ProductContext} from './ProductContext';
import './ProductList.css';
import { Link } from 'react-router-dom';

const ProductList = ({onPageChange, category, scrollDown}) => {
    const [products, setProducts] = useContext(ProductContext);
    const jumpRef = useRef(null);   
   
    useEffect(() => {
      if(scrollDown === 'stop'){
        return
      }
      if(scrollDown === 'start'){
        jumpRef.current.scrollIntoView();
      }
    },);
    
    const content = () =>
      products.map((product) => {
        if (category === product.category || category === "") {
          return (
            <div className="product" key={product.itemCode} >
              {/* RESET THE SUB-CATEGORY TO EMPTY */}
              <ul className="product-item" >
                <li>
                  {product.category === 'sale' ? <span className='product-sale'>sale</span> : '' }

                  {/* CONDITIONAL OPERATOR STARTS HERE */}
                  
                  {category === "" ?
                  <Link to={`shopping/${product.category}/${product.itemCode}`}>  
                    <img
                      // src={`${process.env.PUBLIC_URL}/images/${product.image}`}
                      src={process.env.PUBLIC_URL + '/images/' + product.image}
                      alt={product.brand}
                      onClick={() => (
                        console.log('click'),
                        onPageChange({ page: "product", id: product.itemCode })
                      )}
                    />
                  </Link> 
                    :
                  <Link to={`${product.category}/${product.itemCode}`}>
                    <img
                      // src={`${process.env.PUBLIC_URL}/images/${product.image}`}
                      src={process.env.PUBLIC_URL + '/images/' + product.image}
                      alt={product.brand}
                      onClick={() => (
                        onPageChange({ page: "product", id: product.itemCode })
                      )}
                    />
                  </Link>
                  }
                  
                </li>
                <li>{product.description}</li>
                <li>${product.price}</li>
                   
              </ul>
            </div>
          );
        }
      });


    // Scroll to product title
    const title = () => { 
      if(category === ''){
        return
      }
      return (
        <div className='productlist-title' ref={jumpRef}><h1>{category}</h1></div>
      )
    };
      

    return (
      <>
        {title()}
        <main className="productlist" >
          {content()}
        </main>  
      </>    
      
    );
};

export default ProductList;