import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import {ProductProvider} from './components/ProductContext';
import ProductPage from './components/ProductPage';
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [activePage, setActivePage] = useState({ page: 'product', id: '' });
  const [subPage, setSubPage] = useState('')
  const [cart, setCart] = useState([]);
  const [scroll, setScroll] = useState('stop');
  
  // Routes
  useEffect(() => {
    if (window.location.pathname === '/') {
      setActivePage({ page: "main" });
      setSubPage('');
    }
    if (window.location.pathname === '/about') {
      setActivePage({ page: "about" });
      setSubPage('');
    }
    if (window.location.pathname === '/contact') {
      setActivePage({ page: "contact" });
      setSubPage('');
    }
    if (window.location.pathname === '/cart') {
      setActivePage({ page: "shoppingCart" });
      setSubPage('');
    }
    if (window.location.pathname === '/shopping/streetwear') {
      setActivePage({ page: "main" });
      setSubPage('streetwear');
    }
    if (window.location.pathname === '/shopping/outwear') {
      setActivePage({ page: "main" });
      setSubPage('outwear');
    }
    if (window.location.pathname === '/shopping/summer') {
      setActivePage({ page: "main" });
      setSubPage('summer');
    }
    if (window.location.pathname === '/shopping/sale') {
      setActivePage({ page: "main" });
      setSubPage('sale');
    }
  },[])
    

  
  const addToCart = (product, orderedSize) => {
    if(orderedSize === 'Small') {
      setCart(prevCart => {
          product.orderedSizeSmall++;  
        return [...prevCart, product]
      });
    }

    if(orderedSize === 'Medium') {
      setCart(prevCart => {
          product.orderedSizeMedium++;  
        return [...prevCart, product]
      });
    }

    if(orderedSize === 'Large') {
      setCart(prevCart => {
          product.orderedSizeLarge++;  
        return [...prevCart, product]
      });
    }
  };


  const removeFromCart = (item, itemCode, orderedSize) => {
    let index = cart.findIndex(i => i.id === item.id);
    if (index >= 0) {
      setCart(cart => {
        const copy = [...cart];
        copy.map(value => {
        if (orderedSize === 'Small' && value.itemCode === itemCode){
          copy.splice(index, value.orderedSizeSmall);
          value.orderedSizeSmall = 0;
        }
        if (orderedSize === 'Medium' && value.itemCode === itemCode){
          copy.splice(index, value.orderedSizeMedium);
          value.orderedSizeMedium = 0;
        }
        if (orderedSize === 'Large' && value.itemCode === itemCode){
          copy.splice(index, value.orderedSizeLarge);
          value.orderedSizeLarge = 0;
        }        
        })
        return copy;
      });
    }

    if (item === 'All'){
      console.log('item');
      alert('This website is for demonstration purpose');
      setCart([]);
    }
  };

  console.log(cart);
  console.log(activePage);
  console.log(subPage);

  return (
    <Router>
      <ProductProvider>
        <div>
          <Nav onPageChange={setActivePage} subPage={setSubPage} scrollTo={setScroll} />
          <Header onPageChange={setActivePage} subPage={setSubPage} scrollTo={setScroll} />
          <Switch>
            <Content scroll={scroll} scrollTo={setScroll} page={activePage.page} productId={activePage.id} setPage={setActivePage} onSetSubPage={setSubPage} category={subPage} onAddToCart={addToCart} cart={summarizeCart(cart)} removeFromCart={removeFromCart}/>
          </Switch>
          <Footer />
        </div>  
      </ProductProvider>
    </Router>
  );
};

const Content = ({page, productId, setPage, onSetSubPage, category, onAddToCart, cart, removeFromCart, scroll, scrollTo}) => {
  switch (page) {
    default:
    case 'main':
      if(category === '') {
        return (
          <Route path='/' exact>
            <ProductList onPageChange={setPage} category={category} onAddToCart={onAddToCart} scrollDown={scroll}/>
          </Route>
        )
      }
      if(category === 'streetwear') {
        return (
          <Route path='/shopping/streetwear' exact>
            <ProductList onPageChange={setPage} category={category} onAddToCart={onAddToCart} scrollDown={scroll}/>
          </Route>
        )
      }
      if(category === 'outwear') {
        return (
          <Route path='/shopping/outwear' exact>
            <ProductList onPageChange={setPage} category={category} onAddToCart={onAddToCart} scrollDown={scroll}/>
          </Route>
        )
      }
      if(category === 'summer') {
        return (
          <Route path='/shopping/summer' exact>
            <ProductList onPageChange={setPage} category={category} onAddToCart={onAddToCart} scrollDown={scroll}/>
          </Route>
        )
      }
      if(category === 'sale') {
        return (
          <Route path='/shopping/sale' exact>
            <ProductList onPageChange={setPage} category={category} onAddToCart={onAddToCart} scrollDown={scroll}/>
          </Route>
        )
      }
    // eslint-disable-next-line no-fallthrough
    case 'product':
      return (
        <Route path={`/shopping/:category/:id`} exact render={(match) => <ProductPage onPageChange={setPage} onSubPageChange={onSetSubPage} productItem={productId} onAddToCart={onAddToCart} scrollDown={scroll} scrollTo={scrollTo} />} />      
      );
    case 'about':
      return <Route path='/about' exact component={AboutUs} />;
    case 'contact':
      return <Route path='/contact' exact component={ContactUs} />;
    case 'shoppingCart':
      return <Route path='/cart' exact><ShoppingCart productItemsInCart={cart} removeFromCart={removeFromCart} onPageChange={setPage} /></Route>;
  }
};

const summarizeCart = cart => {
  const groupedItems = cart.reduce((summary, item) => {
    summary[item.itemCode] = summary[item.itemCode] || {...item, ordered: 0};
    summary[item.itemCode].ordered++;
    return summary;
  }, {});
  return Object.values(groupedItems);
};


export default App;