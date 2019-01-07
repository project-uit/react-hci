import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './../../navigation/HomeScreen/HomeScreen';
import DetailShoe from './../../navigation/DetailShoe/DetailShoe';

export default RouteConfig = createStackNavigator({
  Home: HomeScreen,
  DetailShoe: DetailShoe
},
  {
    initialRouteName: 'Home',
    navigationOptions:
    {
      header: null
    }
  },

);
