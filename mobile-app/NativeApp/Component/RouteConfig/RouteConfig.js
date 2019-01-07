import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './../../navigation/HomeScreen/HomeScreen';
import DetailShoe from './../../navigation/DetailShoe/DetailShoe';
import ListShoe from './../../navigation/ListShoe/ListShoe';

export default RouteConfig = createStackNavigator({
  Home: HomeScreen,
  DetailShoe: DetailShoe,
  ListShoe: ListShoe
},
  {
    initialRouteName: 'Home',
    navigationOptions:
    {
      header: null
    }
  },

);
