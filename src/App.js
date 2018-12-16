import React, { Component } from "react";
import "./App.css";
import HeaderStore from "./Header/HeaderStore";
import Footer from "./Footer/Footer";
import {
  Route,
  Switch
} from 'react-router-dom';

import Home from './Home/Home';
class App extends Component {


  render() {

    return (
      <div>
        <HeaderStore />
        <Switch>
          <Route
            exact
            path={["/trang-chu", "/"]}
            component={Home}
          />

        </Switch>
        <Footer />

      </div >
    );
  }
}

export default App;
