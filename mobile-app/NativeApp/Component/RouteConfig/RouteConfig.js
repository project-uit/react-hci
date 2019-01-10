import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './../../navigation/HomeScreen/HomeScreen';
import DetailShoe from './../../navigation/DetailShoe/DetailShoe';
import ListShoe from './../../navigation/ListShoe/ListShoe';
import SearchListShoe from './../../navigation/ListShoe/SearchListShoe';
import Cart from './../Page/Cart/Cart';
import Checkout from './../Page/Checkout/Checkout';
import CheckoutSuccess from './../Page/Checkout/CheckoutSuccess';
import Login from './../Page/Login/Login';
import Register from './../Page/Register/Register';
import ReviewShoe from './../../navigation/DetailShoe/ReviewShoe';
import Support from '../Page/Support/Support';

export default RouteConfig = createStackNavigator({
  Home: HomeScreen,
  DetailShoe: DetailShoe,
  ListShoe: ListShoe,
  SearchListShoe: SearchListShoe,
  Cart: { screen: Cart },
  Checkout: { screen: Checkout },
  CheckoutSuccess: { screen: CheckoutSuccess },
  Login: { screen: Login },
  Register: { screen: Register },
  Support: {screen: Support},
  ReviewShoe: ReviewShoe
},
  {
    initialRouteName: 'Home',
    navigationOptions:
    {
      header: null
    }
  },

);
