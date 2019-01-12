import React, { Component } from "react";
import "./App.css";
import HeaderStore from "./Header/HeaderStore";
import Footer from "./Footer/Footer";

import {
  Route,
  Switch
} from 'react-router-dom';

import Home from './Home/Home';
import ListShoe from './List/ListShoe';
import ShoeDetails from './ShoeDetails/shoeDetails';
import Checkout from './Checkout/Checkout';
import Signup from './Signup/Signup';
import ShoeCart from './ShoeCart/shoeCart';
class App extends Component {

  render() {

    return (
      <div>
        <HeaderStore />
        <Switch>
          <Route
            exact
            path="(/trang-chu|/)"
            component={Home}
          />
          <Route
            path='/danh-sach-giay'
            component={ListShoe}
          />
          <Route
            exact
            path='/chi-tiet-giay'
            component={ShoeDetails}
          />
          <Route
            exact
            path='/thanh-toan'
            component={Checkout}
          />
          <Route
            exact
            path='/dang-ky'
            component={Signup}
          />
          <Route
            exact
            path='/cart'
            component={ShoeCart}
          />
        </Switch>

        <Footer />

      </div >
    );
  }
}

export default App;
