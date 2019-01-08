import { createStackNavigator } from 'react-navigation'
import Cart from '../Component/Page/Cart/Cart';
import Checkout from '../Component/Page/Checkout/Checkout';
import Login from '../Component/Page/Login/Login';
import Register from '../Component/Page/Register/Register';
import CheckoutSuccess from '../Component/Page/Checkout/CheckoutSuccess';

export default RouteConfig = createStackNavigator({
  Cart: { screen: Cart },
  Checkout: { screen: Checkout },
  CheckoutSuccess: { screen: CheckoutSuccess },
  Login: { screen: Login },
  Register: { screen: Register }
},
  {
    initialRouteName: 'Login',
    navigationOptions:
    {
      header: null
    }
  },
);
