import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Faq from './components/Faq';
import Regulations from './components/Regulations';
import Contact from './components/Contact';
import Modal from './components/Modal';
import { AnimatedSwitch } from 'react-router-transition';

class App extends Component {
  render() {
    return ( 
      <React.Fragment>
        <Navbar />
        <Switch>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/faq" component={Faq} />
          <Route path="/regulations" component={Regulations} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </AnimatedSwitch>
        </Switch>
        <Modal />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
