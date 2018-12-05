import React, { Component } from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb, Icon, Input, Carousel } from "antd";
import Header from "./Header/Header";
const { Footer, Sider, Content } = Layout;
const Search = Input.Search;
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel autoplay>
          <div>
            <img   class="img-thumbnail"
            src="https://sits-pod14-adidas.demandware.net/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-AME-Library/default/dwd723e8de/brand/images/2018/08/pod-hp-mh-typea-dt_271913.jpg?sw=1366&sh=830&sm=fit&cx=0&cy=0&cw=1366&ch=830&sfrm=jpg"/>
          </div>
          <div>
          <img   class="img-thumbnail"
            src="https://sits-pod14-adidas.demandware.net/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-AME-Library/default/dwd723e8de/brand/images/2018/08/pod-hp-mh-typea-dt_271913.jpg?sw=1366&sh=830&sm=fit&cx=0&cy=0&cw=1366&ch=830&sfrm=jpg"/>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default App;
